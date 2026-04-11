import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  agreed: boolean;
  setAgreed: (val: boolean) => void;
};

const TermsCheckbox = ({ agreed, setAgreed }: Props) => (
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
      <Text className="text-blue-500 font-medium">Terms of Service</Text> and{" "}
      <Text className="text-blue-500 font-medium">Privacy Policy</Text>
    </Text>
  </TouchableOpacity>
);

export default TermsCheckbox;
