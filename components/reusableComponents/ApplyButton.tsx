import React from "react";
import { Text, TouchableOpacity } from "react-native";

const ApplyButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="flex-1 bg-blue-500 rounded-xl py-3 items-center"
      onPress={onPress}
    >
      <Text className="text-white font-semibold text-sm">Apply Now</Text>
    </TouchableOpacity>
  );
};

export default ApplyButton;
