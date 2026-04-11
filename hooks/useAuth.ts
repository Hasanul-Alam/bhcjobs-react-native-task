import { setPhoneAndOtp } from "@/redux/slices/authSlice";
import { useState } from "react";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";

const BASE_URL = "https://dev.bhcjobs.com";

type RegistrationForm = {
  fullName: string;
  mobile: string;
  dob: Date | null;
  passportNo: string;
  gender: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreed: boolean;
};

type LoginResponse = {
  token: string;
  user_id: number;
  phone: string;
  email: string;
  name: string;
};

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [verificationLoading, setVerificationLoading] = useState(false);
  const [signInLoading, setSignInLoading] = useState(false);
  const dispatch = useDispatch();

  const validate = (form: RegistrationForm): string | null => {
    if (!form.fullName.trim()) return "Full name is required.";
    if (!form.mobile.trim()) return "Mobile number is required.";
    if (!form.dob) return "Date of birth is required.";
    if (!form.passportNo.trim()) return "Passport number is required.";
    if (!form.gender) return "Gender is required.";
    if (!form.email.trim()) return "Email is required.";
    if (!form.password) return "Password is required.";
    if (form.password !== form.confirmPassword)
      return "Passwords do not match.";
    if (!form.agreed) return "You must agree to the terms.";
    return null;
  };

  const register = async (form: RegistrationForm, onSuccess: () => void) => {
    const error = validate(form);
    if (error) {
      Alert.alert("Validation Error", error);
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", form.fullName.trim());
      formData.append("phone", form.mobile.trim());
      formData.append("email", form.email.trim());
      formData.append("password", form.password);
      formData.append("confirm_password", form.confirmPassword);
      formData.append("passport_number", form.passportNo.trim());
      formData.append("dob", form.dob!.toISOString().split("T")[0]);
      formData.append("gender", form.gender.toLowerCase());

      const response = await fetch(`${BASE_URL}/api/job_seeker/register`, {
        method: "POST",
        body: formData,
      });

      const json = await response.json();

      if (json.status === true) {
        Alert.alert("Success", json.message ?? "Registration successful!");
        dispatch(
          setPhoneAndOtp({ phone: form.mobile, otp: json.data.otp.toString() }),
        );
        onSuccess();
      } else {
        Alert.alert("Error", json.message ?? "Registration failed.");
      }
    } catch {
      Alert.alert("Error", "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const verifyPhone = async (
    otp: string,
    phone: string,
    onSuccess: () => void,
  ) => {
    if (otp.length < 4) {
      Alert.alert("Validation Error", "Please enter the complete OTP.");
      return;
    }

    setVerificationLoading(true);
    try {
      const formData = new FormData();
      formData.append("phone", phone);
      formData.append("otp", otp);

      const response = await fetch(`${BASE_URL}/api/job_seeker/phone_verify`, {
        method: "POST",
        body: formData,
      });

      const json = await response.json();
      console.log("OTP verify response:", JSON.stringify(json, null, 2));

      if (json.status === true) {
        onSuccess();
      } else {
        Alert.alert("Error", json.message ?? "OTP verification failed.");
      }
    } catch {
      Alert.alert("Error", "Something went wrong. Please try again.");
    } finally {
      setVerificationLoading(false);
    }
  };

  const signIn = async (
    phone: string,
    password: string,
    onSuccess: () => void,
  ) => {
    if (!phone.trim()) {
      Alert.alert("Validation Error", "Phone number is required.");
      return;
    }
    if (!password) {
      Alert.alert("Validation Error", "Password is required.");
      return;
    }

    setSignInLoading(true);
    try {
      const formData = new FormData();
      formData.append("phone", phone.trim());
      formData.append("password", password);

      const response = await fetch(`${BASE_URL}/api/job_seeker/login`, {
        method: "POST",
        body: formData,
      });

      const json = await response.json();
      console.log("Login response:", JSON.stringify(json, null, 2));

      if (json.status === true) {
        onSuccess();
      } else {
        Alert.alert("Error", json.message ?? "Login failed.");
      }
    } catch {
      Alert.alert("Error", "Something went wrong. Please try again.");
    } finally {
      setSignInLoading(false);
    }
  };

  return {
    register,
    verifyPhone,
    signIn,
    loading,
    verificationLoading,
    signInLoading,
  };
};

export default useAuth;
