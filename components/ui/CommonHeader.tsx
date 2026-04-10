import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const CommonHeader = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View className="flex-row items-center justify-between px-4 py-2 bg-white">
      {/* Logo */}
      <Image
        source={require("../../assets/images/logo.png")}
        className="w-[121px] h-[30px]"
        resizeMode="contain"
      />

      {/* Right Actions */}
      <View className="flex-row items-center gap-2">
        {/* Sign Up — outlined */}
        <TouchableOpacity
          activeOpacity={0.8}
          className="border border-blue-500 px-5 py-2 rounded-full"
        >
          <Text className="text-sm text-blue-500 font-medium">Sign Up</Text>
        </TouchableOpacity>

        {/* Dark Mode Toggle — circular outlined */}
        <TouchableOpacity
          activeOpacity={0.8}
          className="border border-blue-500 w-9 h-9 rounded-full items-center justify-center"
          onPress={() => setIsDarkMode((prev) => !prev)}
        >
          <Feather
            name={isDarkMode ? "sun" : "moon"}
            size={17}
            color="#3b82f6"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommonHeader;
