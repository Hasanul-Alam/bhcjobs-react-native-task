import { useState } from "react";
import { Alert } from "react-native";

const BASE_URL = "https://your-api-base-url.com"; // 🔁 replace with your base URL

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

const useRegistration = () => {
  const [loading, setLoading] = useState(false);

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
      formData.append(
        "dob",
        form.dob!.toISOString().split("T")[0], // formats to YYYY-MM-DD
      );
      formData.append("gender", form.gender.toLowerCase());

      const response = await fetch(`${BASE_URL}/api/job_seeker/register`, {
        method: "POST",
        body: formData,
      });

      const json = await response.json();

      if (json.status === true) {
        Alert.alert("Success", json.message ?? "Registration successful!");
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

  return { register, loading };
};

export default useRegistration;
