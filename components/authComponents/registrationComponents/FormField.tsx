import React from "react";
import { Text, View } from "react-native";

type Props = {
  label: string;
  required?: boolean;
  children: React.ReactNode;
};

const FormField = ({ label, required = false, children }: Props) => (
  <View className="mb-4">
    <Text className="text-gray-700 text-sm font-medium mb-1">
      {label} {required && <Text className="text-red-500">*</Text>}
    </Text>
    {children}
  </View>
);

export default FormField;
