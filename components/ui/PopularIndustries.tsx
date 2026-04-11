import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

type Industry = {
  id: string;
  label: string;
  jobCount: number;
  icon: keyof typeof Ionicons.glyphMap;
};

const industries: Industry[] = [
  { id: "1", label: "Construction", jobCount: 6, icon: "construct-outline" },
  {
    id: "2",
    label: "Facilities Management",
    jobCount: 1,
    icon: "people-outline",
  },
  {
    id: "3",
    label: "Fast Food Restaurant",
    jobCount: 4,
    icon: "restaurant-outline",
  },
  { id: "4", label: "Cafés & Coffee Shops", jobCount: 0, icon: "cafe-outline" },
  { id: "5", label: "Agriculture", jobCount: 0, icon: "leaf-outline" },
  {
    id: "6",
    label: "Contracting & Maintenance",
    jobCount: 2,
    icon: "hammer-outline",
  },
  {
    id: "7",
    label: "Factory & Manufacturing",
    jobCount: 1,
    icon: "business-outline",
  },
  { id: "8", label: "Hotel", jobCount: 0, icon: "bed-outline" },
];

const IndustryCard = ({ item }: { item: Industry }) => (
  <TouchableOpacity
    activeOpacity={0.75}
    className="bg-white rounded-2xl m-2 p-4 items-center justify-center border border-gray-100"
    style={{
      flex: 1,
      minHeight: 120,
      elevation: 2,
      shadowColor: "#000",
      shadowOpacity: 0.06,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 2 },
    }}
  >
    <View className="bg-blue-50 rounded-full p-3 mb-3">
      <Ionicons name={item.icon} size={26} color="#3b82f6" />
    </View>
    <Text
      className="text-gray-800 font-semibold text-sm text-center"
      numberOfLines={2}
    >
      {item.label}
    </Text>
    <Text className="text-gray-400 text-xs mt-1 text-center">
      {item.jobCount} Available Jobs
    </Text>
  </TouchableOpacity>
);

const PopularIndustriesScreen = () => {
  return (
    <View className="px-2 pb-6">
      {/* Title */}
      <View className="items-center py-4">
        <View className="bg-blue-50 border border-blue-100 rounded-full px-5 py-2">
          <Text className="text-blue-600 font-semibold text-base">
            Popular Industries
          </Text>
        </View>
      </View>

      {/* Grid */}
      <FlatList
        data={industries}
        keyExtractor={(item) => item.id}
        numColumns={2}
        scrollEnabled={false}
        renderItem={({ item }) => <IndustryCard item={item} />}
      />
    </View>
  );
};

export default PopularIndustriesScreen;
