import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Modal, Text, TouchableOpacity, View } from "react-native";

const GENDER_OPTIONS = ["Male", "Female", "Other", "Prefer not to say"];

type Props = {
  gender: string;
  showModal: boolean;
  setShowModal: (val: boolean) => void;
  setGender: (val: string) => void;
};

const GenderPicker = ({
  gender,
  showModal,
  setShowModal,
  setGender,
}: Props) => (
  <>
    <TouchableOpacity
      className="flex-row items-center border border-gray-200 rounded-xl px-3 bg-white"
      style={{ height: 50 }}
      onPress={() => setShowModal(true)}
      activeOpacity={0.7}
    >
      <MaterialIcons
        name="person-outline"
        size={18}
        color="#94a3b8"
        style={{ marginRight: 8 }}
      />
      <Text
        className={gender ? "text-gray-700 flex-1" : "text-gray-400 flex-1"}
        style={{ fontSize: 14 }}
      >
        {gender || "Select gender"}
      </Text>
      <Ionicons name="chevron-down" size={16} color="#94a3b8" />
    </TouchableOpacity>

    <Modal
      visible={showModal}
      transparent
      animationType="fade"
      onRequestClose={() => setShowModal(false)}
    >
      <TouchableOpacity
        className="flex-1 bg-black/40 justify-center items-center px-8"
        activeOpacity={1}
        onPress={() => setShowModal(false)}
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
                  setShowModal(false);
                }}
                activeOpacity={0.7}
              >
                <Text
                  className={`text-sm ${
                    gender === item
                      ? "text-blue-600 font-semibold"
                      : "text-gray-600"
                  }`}
                >
                  {item}
                </Text>
                {gender === item && (
                  <Ionicons name="checkmark-circle" size={18} color="#3b82f6" />
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
  </>
);

export default GenderPicker;
