import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import ApplyButton from "../reusableComponents/ApplyButton";
import OutlineButton from "../reusableComponents/OutlineButton";
import SectionTitle from "../reusableComponents/SectionTitle";

type TrendingJob = {
  id: string;
  title: string;
  company: string;
  daysLeft: number;
  salary: string;
  salaryEquivalent: string;
  foodAllowance: string;
  foodAllowanceEquivalent: string;
  tags: { label: string; icon: keyof typeof Ionicons.glyphMap }[];
};

const job: TrendingJob = {
  id: "1",
  title: "Service Crew",
  company: "McDonald's",
  daysLeft: 10,
  salary: "SAR 900 Monthly",
  salaryEquivalent: "Equivalent BDT 29,700",
  foodAllowance: "SAR 250",
  foodAllowanceEquivalent: "Equivalent BDT 8,250",
  tags: [
    { label: "OVERSEAS", icon: "briefcase-outline" },
    { label: "SAUDI ARABIA", icon: "location-outline" },
  ],
};

const TrendingJobCard = ({ job }: { job: TrendingJob }) => {
  return (
    <View className="mx-4" style={{ marginTop: 16 }}>
      {/* Days Left Badge — sits on top edge of card */}
      <View style={{ position: "absolute", top: -14, right: 16, zIndex: 10 }}>
        <View className="flex-row items-center bg-white border border-red-200 rounded-lg px-3 py-1 gap-1">
          <Ionicons name="time-outline" size={13} color="#ef4444" />
          <Text className="text-red-500 text-xs font-semibold">
            {job.daysLeft} DAYS LEFT
          </Text>
        </View>
      </View>

      {/* Card */}
      <View className="bg-blue-50 rounded-2xl p-4">
        {/* Title & Company */}
        <Text className="text-gray-900 text-xl font-bold mt-2">
          {job.title}
        </Text>
        <Text className="text-gray-500 text-sm mt-0.5 mb-3">{job.company}</Text>

        {/* Salary */}
        <Text className="text-gray-800 text-sm mb-1">
          <Text className="font-bold">Salary: {job.salary} </Text>
          <Text className="font-normal text-gray-500">
            ({job.salaryEquivalent})
          </Text>
        </Text>

        {/* Food Allowance */}
        <Text className="text-gray-800 text-sm mb-4">
          <Text className="font-bold">
            Food Allowance: {job.foodAllowance}{" "}
          </Text>
          <Text className="font-normal text-gray-500">
            ({job.foodAllowanceEquivalent})
          </Text>
        </Text>

        {/* Tags */}
        <View className="flex-row gap-2 mb-4">
          {job.tags.map((tag) => (
            <View
              key={tag.label}
              className="flex-row items-center bg-white border border-gray-200 rounded-full px-3 py-1 gap-1"
            >
              <Ionicons name={tag.icon} size={12} color="#6b7280" />
              <Text className="text-gray-500 text-xs font-medium">
                {tag.label}
              </Text>
            </View>
          ))}
        </View>

        {/* Buttons */}
        <View className="flex-row gap-3">
          <OutlineButton
            buttonText="View"
            onPress={() => console.log("View Button Pressed")}
          />
          <ApplyButton onPress={() => console.log("Apply Button Pressed")} />
        </View>
      </View>
    </View>
  );
};

const TrendingJobsScreen = () => {
  return (
    <View className="py-4">
      {/* Section Title */}
      <SectionTitle title="Trending Jobs" />

      <TrendingJobCard job={job} />
    </View>
  );
};

export default TrendingJobsScreen;
