/* eslint-disable react-hooks/exhaustive-deps */
import CommonHeader from "@/components/reusableComponents/CommonHeader";
import useAuth from "@/hooks/useAuth";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

const OTP_LENGTH = 4;
const EXPIRY_SECONDS = 5 * 60;

const PhoneVerificationScreen = () => {
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [secondsLeft, setSecondsLeft] = useState(EXPIRY_SECONDS);
  const inputRefs = useRef<(TextInput | null)[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { verificationLoading, verifyPhone } = useAuth();
  const phone = useSelector((state: any) => state.auth.phone || "");

  const router = useRouter();

  useEffect(() => {
    startTimer();
    return () => clearTimer();
  }, []);

  const startTimer = () => {
    clearTimer();
    setSecondsLeft(EXPIRY_SECONDS);
    timerRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearTimer();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const clearTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleChange = (text: string, index: number) => {
    const digit = text.replace(/[^0-9]/g, "").slice(-1);
    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);
    if (digit && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (key: string, index: number) => {
    if (key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    setOtp(Array(OTP_LENGTH).fill(""));
    inputRefs.current[0]?.focus();
    startTimer();
    console.log("Resend OTP triggered");
  };

  const handleSubmit = () => {
    // console.log("phone:", "01516746197", "otp:", otp.join(""));
    verifyPhone(otp.join(""), "01516746197", () => {
      router.replace("/main/landingScreen");
    });
  };

  const isExpired = secondsLeft === 0;
  const isFilled = otp.every((d) => d !== "");

  return (
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
          <View className="flex-1 justify-center px-6">
            <View
              className="bg-white rounded-3xl px-6 py-8"
              style={{
                shadowColor: "#4a90d9",
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.12,
                shadowRadius: 24,
                elevation: 10,
              }}
            >
              {/* Title */}
              <Text className="text-gray-900 text-xl font-bold text-center mb-4">
                OTP Verification
              </Text>

              {/* Shield Icon */}
              <View className="items-center mb-4">
                <View
                  className="w-14 h-14 rounded-full items-center justify-center"
                  style={{ backgroundColor: "#eff6ff" }}
                >
                  <Ionicons
                    name="shield-checkmark-outline"
                    size={32}
                    color="#3b82f6"
                  />
                </View>
              </View>

              {/* Description */}
              <Text className="text-gray-500 text-sm text-center leading-6 mb-1">
                We&apos;ve sent a 4-digit OTP to{" "}
                <Text className="text-red-500 font-medium">{phone}</Text>
              </Text>
              <Text className="text-gray-500 text-sm text-center mb-4">
                Kindly enter it below to continue.
              </Text>

              {/* Timer */}
              <Text className="text-blue-500 text-sm font-medium text-center mb-5">
                {isExpired ? (
                  <Text className="text-red-400">OTP has expired</Text>
                ) : (
                  <>
                    OTP will expire in{" "}
                    <Text className="font-bold">{formatTime(secondsLeft)}</Text>
                  </>
                )}
              </Text>

              {/* OTP Inputs */}
              <View className="flex-row justify-center gap-3 mb-5">
                {otp.map((digit, index) => (
                  <TextInput
                    key={index}
                    ref={(ref) => {
                      inputRefs.current[index] = ref;
                    }}
                    value={digit}
                    onChangeText={(text) => handleChange(text, index)}
                    onKeyPress={({ nativeEvent }) =>
                      handleKeyPress(nativeEvent.key, index)
                    }
                    keyboardType="number-pad"
                    maxLength={1}
                    className="rounded-xl text-center font-bold text-gray-800"
                    style={{
                      width: 60,
                      height: 60,
                      fontSize: 22,
                      borderWidth: 1.5,
                      borderColor: digit ? "#3b82f6" : "#e2e8f0",
                      backgroundColor: digit ? "#eff6ff" : "#fff",
                    }}
                  />
                ))}
              </View>

              {/* Resend */}
              <View className="flex-row justify-center items-center mb-6">
                <Text className="text-gray-500 text-sm">
                  Didn&apos;t get the code?{" "}
                </Text>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={handleResend}
                  disabled={!isExpired}
                >
                  <Text
                    className="text-sm font-medium"
                    style={{ color: isExpired ? "#3b82f6" : "#94a3b8" }}
                  >
                    Send again
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Submit Button */}
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={handleSubmit}
                disabled={verificationLoading || !isFilled || isExpired}
              >
                <LinearGradient
                  colors={
                    isFilled && !isExpired
                      ? ["#3b82f6", "#2563eb"]
                      : ["#cbd5e1", "#cbd5e1"]
                  }
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  className="items-center justify-center"
                  style={{ height: 50, borderRadius: 12 }}
                >
                  {verificationLoading ? (
                    <ActivityIndicator color="#fff" />
                  ) : (
                    <Text
                      className="text-white font-semibold"
                      style={{ fontSize: 15 }}
                    >
                      Submit
                    </Text>
                  )}
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default PhoneVerificationScreen;
