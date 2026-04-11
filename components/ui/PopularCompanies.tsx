import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import SectionTitle from "../reusableComponents/SectionTitle";

type Company = {
  id: string;
  name: string;
  jobCount: number;
  initial: string;
  color: string;
};

const companies: Company[] = [
  { id: "1", name: "HACC", jobCount: 3, initial: "H", color: "#9ca3af" },
  {
    id: "2",
    name: "IHIS Company",
    jobCount: 2,
    initial: "I",
    color: "#14b8a6",
  },
  { id: "3", name: "McDonald's", jobCount: 4, initial: "M", color: "#f59e0b" },
  { id: "4", name: "Jabco", jobCount: 1, initial: "J", color: "#ef4444" },
  {
    id: "5",
    name: "Saudi Aramco",
    jobCount: 6,
    initial: "S",
    color: "#3b82f6",
  },
  {
    id: "6",
    name: "Al Majal Group",
    jobCount: 2,
    initial: "A",
    color: "#8b5cf6",
  },
  {
    id: "7",
    name: "Binladin Group",
    jobCount: 5,
    initial: "B",
    color: "#f97316",
  },
  { id: "8", name: "KFC Arabia", jobCount: 3, initial: "K", color: "#dc2626" },
];

const INITIAL_COUNT = 4;
const LOAD_MORE_COUNT = 4;

const CompanyCard = ({ company }: { company: Company }) => (
  <TouchableOpacity
    activeOpacity={0.75}
    className="bg-white rounded-2xl m-2 p-4 items-center justify-center border border-gray-100"
    style={{
      flex: 1,
      minHeight: 130,
      elevation: 2,
      shadowColor: "#000",
      shadowOpacity: 0.05,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 2 },
    }}
  >
    {/* Logo Circle */}
    <View
      className="w-16 h-16 rounded-full items-center justify-center mb-3"
      style={{
        backgroundColor: company.color + "18",
        borderWidth: 1,
        borderColor: company.color + "30",
      }}
    >
      <Text className="font-bold text-xl" style={{ color: company.color }}>
        {company.initial}
      </Text>
    </View>

    <Text
      className="text-gray-800 font-semibold text-sm text-center"
      numberOfLines={1}
    >
      {company.name}
    </Text>
    <Text className="text-gray-400 text-xs mt-1">
      {company.jobCount} Available Jobs
    </Text>
  </TouchableOpacity>
);

const PopularCompaniesScreen = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const rows: Company[][] = [];
  const visibleCompanies = companies.slice(0, visibleCount);
  for (let i = 0; i < visibleCompanies.length; i += 2) {
    rows.push(visibleCompanies.slice(i, i + 2));
  }

  const hasMore = visibleCount < companies.length;

  return (
    <View className="px-2 pb-6">
      {/* Section Title */}
      <SectionTitle title="Popular Companies" />

      {/* Grid */}
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} className="flex-row">
          {row.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
          {row.length < 2 && <View style={{ flex: 1, margin: 8 }} />}
        </View>
      ))}

      {/* Load More Button */}
      {hasMore && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            setVisibleCount((prev) =>
              Math.min(prev + LOAD_MORE_COUNT, companies.length),
            )
          }
          className="self-center mt-2 border border-gray-200 rounded-2xl px-8 py-3 bg-white"
          style={{
            elevation: 1,
            shadowColor: "#000",
            shadowOpacity: 0.04,
            shadowRadius: 4,
            shadowOffset: { width: 0, height: 1 },
          }}
        >
          <Ionicons name="chevron-down" size={20} color="#6b7280" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PopularCompaniesScreen;
