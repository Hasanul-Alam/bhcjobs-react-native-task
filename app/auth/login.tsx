import CommonHeader from "@/components/reusableComponents/CommonHeader";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

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
          className="flex-1 justify-center items-center px-6"
        >
          {/* Card */}
          <View
            className="w-full bg-white rounded-3xl px-6 py-8"
            style={{
              shadowColor: "#4a90d9",
              shadowOffset: { width: 0, height: 8 },
              shadowOpacity: 0.12,
              shadowRadius: 24,
              elevation: 10,
            }}
          >
            {/* Header */}
            <View className="items-center mb-7">
              <View className="bg-blue-100 rounded-full w-14 h-14 items-center justify-center mb-3">
                <Ionicons name="people" size={28} color="#2563eb" />
              </View>
              <Text className="text-blue-600 text-xl font-semibold tracking-wide">
                Job Seeker Login
              </Text>
            </View>

            {/* Mobile Number Input */}
            <Text className="text-gray-700 text-sm font-medium mb-2">
              Mobile Number
            </Text>
            <View
              className="flex-row items-center border border-gray-200 rounded-xl px-3 mb-5 bg-white"
              style={{ height: 50 }}
            >
              <Ionicons
                name="call-outline"
                size={18}
                color="#3b82f6"
                style={{ marginRight: 8 }}
              />
              <TextInput
                className="flex-1 text-gray-700 text-sm"
                placeholder="01XXXXXXXXX"
                placeholderTextColor="#b0bec5"
                keyboardType="phone-pad"
                value={mobile}
                onChangeText={setMobile}
                style={{ fontSize: 14 }}
              />
            </View>

            {/* Password Input */}
            <Text className="text-gray-700 text-sm font-medium mb-2">
              Password
            </Text>
            <View
              className="flex-row items-center border border-gray-200 rounded-xl px-3 bg-white"
              style={{ height: 50 }}
            >
              <MaterialIcons
                name="lock-outline"
                size={18}
                color="#3b82f6"
                style={{ marginRight: 8 }}
              />
              <TextInput
                className="flex-1 text-gray-700 text-sm"
                placeholder="Enter your password"
                placeholderTextColor="#b0bec5"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                style={{ fontSize: 14 }}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                activeOpacity={0.7}
              >
                <Ionicons
                  name={showPassword ? "eye-outline" : "eye-off-outline"}
                  size={20}
                  color="#3b82f6"
                />
              </TouchableOpacity>
            </View>

            {/* Forgot Password */}
            <TouchableOpacity
              className="items-end mt-2 mb-6"
              activeOpacity={0.7}
            >
              <Text className="text-blue-500 text-sm">
                Forgot Your Password?
              </Text>
            </TouchableOpacity>

            {/* Sign In Button */}
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => {
                router.push("/main/landingScreen");
              }}
            >
              <LinearGradient
                colors={["#3b82f6", "#2563eb"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                className="items-center justify-center"
                style={{ height: 50, borderRadius: 12 }}
              >
                <Text className="text-white font-bold text-sm tracking-widest">
                  SIGN IN
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* OR Divider */}
            <View className="flex-row items-center my-5">
              <View className="flex-1 h-px bg-gray-200" />
              <Text className="text-gray-400 text-xs mx-3 font-medium">OR</Text>
              <View className="flex-1 h-px bg-gray-200" />
            </View>

            {/* Create Account */}
            <View className="flex-row justify-center">
              <Text className="text-gray-500 text-sm">
                New to BhcJobs.com?{" "}
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => router.push("/auth/registration")}
              >
                <Text className="text-blue-500 text-sm font-semibold">
                  Create an account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  );
}
