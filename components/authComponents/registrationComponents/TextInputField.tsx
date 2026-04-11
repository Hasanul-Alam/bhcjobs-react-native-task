import React from "react";
import { TextInput, TextInputProps, View } from "react-native";

type Props = TextInputProps & {
  icon: React.ReactNode;
  rightIcon?: React.ReactNode;
};

const TextInputField = ({ icon, rightIcon, ...props }: Props) => (
  <View
    className="flex-row items-center border border-gray-200 rounded-xl px-3 bg-white"
    style={{ height: 50 }}
  >
    {icon}
    <TextInput
      className="flex-1 text-gray-700"
      placeholderTextColor="#b0bec5"
      style={{ fontSize: 14 }}
      {...props}
    />
    {rightIcon}
  </View>
);

export default TextInputField;
