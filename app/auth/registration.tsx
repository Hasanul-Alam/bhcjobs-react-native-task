import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const GENDER_OPTIONS = ["Male", "Female", "Other", "Prefer not to say"];

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

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <LinearGradient
      colors={["#a8c8f0", "#c5daf5", "#e8f2fc", "#f5f9ff"]}
      locations={[0, 0.3, 0.6, 1]}
      start={{ x: 0.2, y: 0 }}
      end={{ x: 0.8, y: 1 }}
      className="flex-1"
    >
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

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
          {/* Card */}
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
            {/* Title */}
            <Text className="text-blue-600 text-xl font-semibold text-center mb-6 tracking-wide">
              Create an account
            </Text>

            {/* Full Name */}
            <Text className="text-gray-700 text-sm font-medium mb-1">
              Full Name <Text className="text-red-500">*</Text>
            </Text>
            <View
              className="flex-row items-center border border-gray-200 rounded-xl px-3 mb-4 bg-white"
              style={{ height: 50 }}
            >
              <MaterialIcons
                name="person-outline"
                size={18}
                color="#94a3b8"
                style={{ marginRight: 8 }}
              />
              <TextInput
                className="flex-1 text-gray-700"
                placeholder="Enter your full name"
                placeholderTextColor="#b0bec5"
                value={fullName}
                onChangeText={setFullName}
                style={{ fontSize: 14 }}
              />
            </View>

            {/* Mobile Number */}
            <Text className="text-gray-700 text-sm font-medium mb-1">
              Mobile Number <Text className="text-red-500">*</Text>
            </Text>
            <View
              className="flex-row items-center border border-gray-200 rounded-xl px-3 mb-4 bg-white"
              style={{ height: 50 }}
            >
              <Ionicons
                name="call-outline"
                size={18}
                color="#94a3b8"
                style={{ marginRight: 8 }}
              />
              <TextInput
                className="flex-1 text-gray-700"
                placeholder="01XXXXXXXXX"
                placeholderTextColor="#b0bec5"
                keyboardType="phone-pad"
                value={mobile}
                onChangeText={setMobile}
                style={{ fontSize: 14 }}
              />
            </View>

            {/* Date of Birth */}
            <Text className="text-gray-700 text-sm font-medium mb-1">
              Date of Birth <Text className="text-red-500">*</Text>
            </Text>
            <TouchableOpacity
              className="flex-row items-center border border-gray-200 rounded-xl px-3 mb-4 bg-white"
              style={{ height: 50 }}
              onPress={() => setShowDatePicker(true)}
              activeOpacity={0.7}
            >
              <Ionicons
                name="calendar-outline"
                size={18}
                color="#94a3b8"
                style={{ marginRight: 8 }}
              />
              <Text
                className={dob ? "text-gray-700" : "text-gray-400"}
                style={{ fontSize: 14 }}
              >
                {dob ? formatDate(dob) : "Select Date"}
              </Text>
            </TouchableOpacity>

            {showDatePicker && (
              <DateTimePicker
                value={dob ?? new Date()}
                mode="date"
                display={Platform.OS === "ios" ? "spinner" : "default"}
                maximumDate={new Date()}
                onChange={(_, selectedDate) => {
                  setShowDatePicker(Platform.OS === "ios");
                  if (selectedDate) setDob(selectedDate);
                  if (Platform.OS === "android") setShowDatePicker(false);
                }}
              />
            )}

            {/* Passport No */}
            <Text className="text-gray-700 text-sm font-medium mb-1">
              Passport No <Text className="text-red-500">*</Text>
            </Text>
            <View
              className="flex-row items-center border border-gray-200 rounded-xl px-3 mb-4 bg-white"
              style={{ height: 50 }}
            >
              <MaterialCommunityIcons
                name="passport"
                size={18}
                color="#94a3b8"
                style={{ marginRight: 8 }}
              />
              <TextInput
                className="flex-1 text-gray-700"
                placeholder="Enter your passport number"
                placeholderTextColor="#b0bec5"
                value={passportNo}
                onChangeText={setPassportNo}
                style={{ fontSize: 14 }}
              />
            </View>

            {/* Gender */}
            <Text className="text-gray-700 text-sm font-medium mb-1">
              Gender <Text className="text-red-500">*</Text>
            </Text>
            <TouchableOpacity
              className="flex-row items-center border border-gray-200 rounded-xl px-3 mb-4 bg-white"
              style={{ height: 50 }}
              onPress={() => setShowGenderModal(true)}
              activeOpacity={0.7}
            >
              <MaterialIcons
                name="person-outline"
                size={18}
                color="#94a3b8"
                style={{ marginRight: 8 }}
              />
              <Text
                className={
                  gender ? "text-gray-700 flex-1" : "text-gray-400 flex-1"
                }
                style={{ fontSize: 14 }}
              >
                {gender || "Select gender"}
              </Text>
              <Ionicons name="chevron-down" size={16} color="#94a3b8" />
            </TouchableOpacity>

            {/* Email Address */}
            <Text className="text-gray-700 text-sm font-medium mb-1">
              Email Address <Text className="text-red-500">*</Text>
            </Text>
            <View
              className="flex-row items-center border border-gray-200 rounded-xl px-3 mb-4 bg-white"
              style={{ height: 50 }}
            >
              <MaterialCommunityIcons
                name="email-outline"
                size={18}
                color="#94a3b8"
                style={{ marginRight: 8 }}
              />
              <TextInput
                className="flex-1 text-gray-700"
                placeholder="Enter your email address"
                placeholderTextColor="#b0bec5"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                style={{ fontSize: 14 }}
              />
            </View>

            {/* Password */}
            <Text className="text-gray-700 text-sm font-medium mb-1">
              Password <Text className="text-red-500">*</Text>
            </Text>
            <View
              className="flex-row items-center border border-gray-200 rounded-xl px-3 mb-4 bg-white"
              style={{ height: 50 }}
            >
              <MaterialIcons
                name="lock-outline"
                size={18}
                color="#94a3b8"
                style={{ marginRight: 8 }}
              />
              <TextInput
                className="flex-1 text-gray-700"
                placeholder="Enter your new password"
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

            {/* Confirm Password */}
            <Text className="text-gray-700 text-sm font-medium mb-1">
              Confirm Password <Text className="text-red-500">*</Text>
            </Text>
            <View
              className="flex-row items-center border border-gray-200 rounded-xl px-3 mb-5 bg-white"
              style={{ height: 50 }}
            >
              <MaterialIcons
                name="lock-outline"
                size={18}
                color="#94a3b8"
                style={{ marginRight: 8 }}
              />
              <TextInput
                className="flex-1 text-gray-700"
                placeholder="Enter your new password"
                placeholderTextColor="#b0bec5"
                secureTextEntry={!showConfirmPassword}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                style={{ fontSize: 14 }}
              />
              <TouchableOpacity
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                activeOpacity={0.7}
              >
                <Ionicons
                  name={showConfirmPassword ? "eye-outline" : "eye-off-outline"}
                  size={20}
                  color="#3b82f6"
                />
              </TouchableOpacity>
            </View>

            {/* Terms & Privacy */}
            <TouchableOpacity
              className="flex-row items-start mb-6"
              onPress={() => setAgreed(!agreed)}
              activeOpacity={0.7}
            >
              <View
                className="rounded mr-2 items-center justify-center"
                style={{
                  width: 18,
                  height: 18,
                  marginTop: 1,
                  backgroundColor: agreed ? "#3b82f6" : "#fff",
                  borderWidth: agreed ? 0 : 1.5,
                  borderColor: "#94a3b8",
                }}
              >
                {agreed && <Ionicons name="checkmark" size={13} color="#fff" />}
              </View>
              <Text className="text-gray-500 text-xs flex-1 leading-5">
                By continuing, you agree to our{" "}
                <Text className="text-blue-500 font-medium">
                  Terms of Service
                </Text>{" "}
                and{" "}
                <Text className="text-blue-500 font-medium">
                  Privacy Policy
                </Text>
              </Text>
            </TouchableOpacity>

            {/* Sign Up Button */}
            <TouchableOpacity activeOpacity={0.85}>
              <LinearGradient
                colors={["#3b82f6", "#2563eb"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                className="rounded-xl items-center justify-center"
                style={{ height: 50 }}
              >
                <Text
                  className="text-white font-bold tracking-widest"
                  style={{ fontSize: 14 }}
                >
                  SIGN UP
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* OR Divider */}
            <View className="flex-row items-center my-5">
              <View className="flex-1 h-px bg-gray-200" />
              <Text className="text-gray-400 text-xs mx-3 font-medium">OR</Text>
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

      {/* Gender Picker Modal */}
      <Modal
        visible={showGenderModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowGenderModal(false)}
      >
        <TouchableOpacity
          className="flex-1 bg-black/40 justify-center items-center px-8"
          activeOpacity={1}
          onPress={() => setShowGenderModal(false)}
        >
          <View
            className="bg-white rounded-2xl w-full overflow-hidden"
            style={{
              shadowColor: "#000",
              shadowOpacity: 0.15,
              shadowRadius: 20,
              elevation: 12,
            }}
          >
            <Text className="text-gray-700 font-semibold text-base px-5 pt-5 pb-3 border-b border-gray-100">
              Select Gender
            </Text>
            <FlatList
              data={GENDER_OPTIONS}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className="px-5 py-4 flex-row items-center justify-between"
                  onPress={() => {
                    setGender(item);
                    setShowGenderModal(false);
                  }}
                  activeOpacity={0.7}
                >
                  <Text
                    className={`text-sm ${gender === item ? "text-blue-600 font-semibold" : "text-gray-600"}`}
                  >
                    {item}
                  </Text>
                  {gender === item && (
                    <Ionicons
                      name="checkmark-circle"
                      size={18}
                      color="#3b82f6"
                    />
                  )}
                </TouchableOpacity>
              )}
              ItemSeparatorComponent={() => (
                <View className="h-px bg-gray-100 mx-5" />
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </LinearGradient>
  );
}
