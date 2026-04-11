import DatePicker from "@/components/authComponents/registrationComponents/DatePicker";
import FormField from "@/components/authComponents/registrationComponents/FormField";
import GenderPicker from "@/components/authComponents/registrationComponents/GenderPicker";
import TermsCheckbox from "@/components/authComponents/registrationComponents/TermsCheckbox";
import TextInputField from "@/components/authComponents/registrationComponents/TextInputField";
import CommonHeader from "@/components/reusableComponents/CommonHeader";

import useRegistration from "@/hooks/useRegistration";
import useStorage from "@/hooks/useStorage";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Registration() {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [passportNo, setPassportNo] = useState("");
  const [gender, setGender] = useState("");
  const [showGenderModal, setShowGenderModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(true);

  const router = useRouter();
  const { register, loading } = useRegistration();
  const { setValue } = useStorage();

  const handleRegister = () => {
    register(
      {
        fullName,
        mobile,
        dob,
        passportNo,
        gender,
        email,
        password,
        confirmPassword,
        agreed,
      },
      () => {
        setValue("isLoggedIn", "true");
        router.push("/auth/phoneVerification");
      },
    );
  };

  return (
    <>
      <SafeAreaView className="flex-1">
        <StatusBar style="light" />
        <CommonHeader />
        <LinearGradient
          colors={["#a8c8f0", "#c5daf5", "#e8f2fc", "#f5f9ff"]}
          locations={[0, 0.3, 0.6, 1]}
          start={{ x: 0.2, y: 0 }}
          end={{ x: 0.8, y: 1 }}
          className="flex-1"
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className="flex-1"
          >
            <ScrollView
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: "center",
                paddingHorizontal: 24,
                paddingVertical: 48,
              }}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            >
              <View
                className="w-full bg-white rounded-3xl px-6 py-7"
                style={{
                  shadowColor: "#4a90d9",
                  shadowOffset: { width: 0, height: 8 },
                  shadowOpacity: 0.12,
                  shadowRadius: 24,
                  elevation: 10,
                }}
              >
                <Text className="text-blue-600 text-xl font-semibold text-center mb-6 tracking-wide">
                  Create an account
                </Text>

                <FormField label="Full Name" required>
                  <TextInputField
                    icon={
                      <MaterialIcons
                        name="person-outline"
                        size={18}
                        color="#94a3b8"
                        style={{ marginRight: 8 }}
                      />
                    }
                    placeholder="Enter your full name"
                    value={fullName}
                    onChangeText={setFullName}
                  />
                </FormField>

                <FormField label="Mobile Number" required>
                  <TextInputField
                    icon={
                      <Ionicons
                        name="call-outline"
                        size={18}
                        color="#94a3b8"
                        style={{ marginRight: 8 }}
                      />
                    }
                    placeholder="01XXXXXXXXX"
                    keyboardType="phone-pad"
                    value={mobile}
                    onChangeText={setMobile}
                  />
                </FormField>

                <FormField label="Date of Birth" required>
                  <DatePicker
                    dob={dob}
                    showDatePicker={showDatePicker}
                    setShowDatePicker={setShowDatePicker}
                    setDob={setDob}
                  />
                </FormField>

                <FormField label="Passport No" required>
                  <TextInputField
                    icon={
                      <MaterialCommunityIcons
                        name="passport"
                        size={18}
                        color="#94a3b8"
                        style={{ marginRight: 8 }}
                      />
                    }
                    placeholder="Enter your passport number"
                    value={passportNo}
                    onChangeText={setPassportNo}
                  />
                </FormField>

                <FormField label="Gender" required>
                  <GenderPicker
                    gender={gender}
                    showModal={showGenderModal}
                    setShowModal={setShowGenderModal}
                    setGender={setGender}
                  />
                </FormField>

                <FormField label="Email Address" required>
                  <TextInputField
                    icon={
                      <MaterialCommunityIcons
                        name="email-outline"
                        size={18}
                        color="#94a3b8"
                        style={{ marginRight: 8 }}
                      />
                    }
                    placeholder="Enter your email address"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                  />
                </FormField>

                <FormField label="Password" required>
                  <TextInputField
                    icon={
                      <MaterialIcons
                        name="lock-outline"
                        size={18}
                        color="#94a3b8"
                        style={{ marginRight: 8 }}
                      />
                    }
                    placeholder="Enter your new password"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                    rightIcon={
                      <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                        activeOpacity={0.7}
                      >
                        <Ionicons
                          name={
                            showPassword ? "eye-outline" : "eye-off-outline"
                          }
                          size={20}
                          color="#3b82f6"
                        />
                      </TouchableOpacity>
                    }
                  />
                </FormField>

                <FormField label="Confirm Password" required>
                  <TextInputField
                    icon={
                      <MaterialIcons
                        name="lock-outline"
                        size={18}
                        color="#94a3b8"
                        style={{ marginRight: 8 }}
                      />
                    }
                    placeholder="Confirm your password"
                    secureTextEntry={!showConfirmPassword}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    rightIcon={
                      <TouchableOpacity
                        onPress={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        activeOpacity={0.7}
                      >
                        <Ionicons
                          name={
                            showConfirmPassword
                              ? "eye-outline"
                              : "eye-off-outline"
                          }
                          size={20}
                          color="#3b82f6"
                        />
                      </TouchableOpacity>
                    }
                  />
                </FormField>

                <TermsCheckbox agreed={agreed} setAgreed={setAgreed} />

                {/* Sign Up Button */}
                <TouchableOpacity
                  activeOpacity={0.85}
                  onPress={handleRegister}
                  // onPress={() => router.push("/auth/phoneVerification")}
                  disabled={loading}
                >
                  <LinearGradient
                    colors={["#3b82f6", "#2563eb"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    className="items-center justify-center"
                    style={{ height: 50, borderRadius: 12 }}
                  >
                    {loading ? (
                      <ActivityIndicator color="#fff" />
                    ) : (
                      <Text
                        className="text-white font-bold tracking-widest"
                        style={{ fontSize: 14 }}
                      >
                        SIGN UP
                      </Text>
                    )}
                  </LinearGradient>
                </TouchableOpacity>

                {/* OR Divider */}
                <View className="flex-row items-center my-5">
                  <View className="flex-1 h-px bg-gray-200" />
                  <Text className="text-gray-400 text-xs mx-3 font-medium">
                    OR
                  </Text>
                  <View className="flex-1 h-px bg-gray-200" />
                </View>

                {/* Sign In */}
                <View className="flex-row justify-center">
                  <Text className="text-gray-500 text-sm">
                    Already have an account?{" "}
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => router.back()}
                  >
                    <Text className="text-blue-500 text-sm font-semibold">
                      Sign In
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </LinearGradient>
      </SafeAreaView>
    </>
  );
}
