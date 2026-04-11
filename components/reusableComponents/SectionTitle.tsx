import React from "react";
import { Text, View } from "react-native";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <View className="items-center py-4">
      <View className="bg-blue-50 border border-blue-100 rounded-full px-5 py-2">
        <Text className="text-gray-700 font-semibold text-base">{title}</Text>
      </View>
    </View>
  );
};

export default SectionTitle;
