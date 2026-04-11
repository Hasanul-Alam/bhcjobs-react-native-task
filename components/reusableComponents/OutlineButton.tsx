import React from "react";
import { Text, TouchableOpacity } from "react-native";

const OutlineButton = ({
  buttonText,
  onPress,
}: {
  buttonText: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="flex-1 border border-blue-400 rounded-xl py-3 items-center"
    >
      <Text className="text-blue-500 font-semibold text-sm">{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default OutlineButton;
