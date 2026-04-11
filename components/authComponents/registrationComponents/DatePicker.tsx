import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import React from "react";
import { Platform, Text, TouchableOpacity } from "react-native";

type Props = {
  dob: Date | null;
  showDatePicker: boolean;
  setShowDatePicker: (val: boolean) => void;
  setDob: (date: Date) => void;
};

const formatDate = (date: Date) =>
  date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const DatePicker = ({
  dob,
  showDatePicker,
  setShowDatePicker,
  setDob,
}: Props) => (
  <>
    <TouchableOpacity
      className="flex-row items-center border border-gray-200 rounded-xl px-3 bg-white"
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
  </>
);

export default DatePicker;
