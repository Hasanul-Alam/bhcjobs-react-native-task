import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

type RecommendedJob = {
  id: string;
  title: string;
  company: string;
  companyInitial: string;
  salary: string;
  foodAllowance: string;
  tags: { label: string; icon: keyof typeof Ionicons.glyphMap }[];
  deadline: string;
};

const recommendedJobs: RecommendedJob[] = [
  {
    id: "1",
    title: "Service Crew",
    company: "McDonald's",
    companyInitial: "M",
    salary: "SAR 900 (BDT 29,700 approx.)",
    foodAllowance: "SAR 250 (BDT 8,250 approx.)",
    tags: [
      { label: "OVERSEAS", icon: "briefcase-outline" },
      { label: "SAUDI ARABIA", icon: "location-outline" },
    ],
    deadline: "21 April, 2026",
  },
  {
    id: "2",
    title: "Maintenance Man",
    company: "McDonald's",
    companyInitial: "M",
    salary: "SAR 1,000 (BDT 33,000 approx.)",
    foodAllowance: "SAR 250 (BDT 8,250 approx.)",
    tags: [
      { label: "OVERSEAS", icon: "briefcase-outline" },
      { label: "SAUDI ARABIA", icon: "location-outline" },
    ],
    deadline: "7 May, 2026",
  },
  {
    id: "3",
    title: "Kitchen Staff",
    company: "KFC Arabia",
    companyInitial: "K",
    salary: "SAR 850 (BDT 28,050 approx.)",
    foodAllowance: "SAR 200 (BDT 6,600 approx.)",
    tags: [
      { label: "OVERSEAS", icon: "briefcase-outline" },
      { label: "SAUDI ARABIA", icon: "location-outline" },
    ],
    deadline: "15 May, 2026",
  },
  {
    id: "4",
    title: "Security Guard",
    company: "Al Majal Group",
    companyInitial: "A",
    salary: "SAR 1,100 (BDT 36,300 approx.)",
    foodAllowance: "SAR 300 (BDT 9,900 approx.)",
    tags: [
      { label: "OVERSEAS", icon: "briefcase-outline" },
      { label: "SAUDI ARABIA", icon: "location-outline" },
    ],
    deadline: "20 May, 2026",
  },
  {
    id: "5",
    title: "Electrician",
    company: "Saudi Aramco",
    companyInitial: "S",
    salary: "SAR 2,000 (BDT 66,000 approx.)",
    foodAllowance: "SAR 400 (BDT 13,200 approx.)",
    tags: [
      { label: "OVERSEAS", icon: "briefcase-outline" },
      { label: "SAUDI ARABIA", icon: "location-outline" },
    ],
    deadline: "30 May, 2026",
  },
  {
    id: "6",
    title: "Plumber",
    company: "Binladin Group",
    companyInitial: "B",
    salary: "SAR 1,800 (BDT 59,400 approx.)",
    foodAllowance: "SAR 350 (BDT 11,550 approx.)",
    tags: [
      { label: "OVERSEAS", icon: "briefcase-outline" },
      { label: "SAUDI ARABIA", icon: "location-outline" },
    ],
    deadline: "1 June, 2026",
  },
  {
    id: "7",
    title: "Driver",
    company: "SAPTCO",
    companyInitial: "S",
    salary: "SAR 1,500 (BDT 49,500 approx.)",
    foodAllowance: "SAR 300 (BDT 9,900 approx.)",
    tags: [
      { label: "OVERSEAS", icon: "briefcase-outline" },
      { label: "SAUDI ARABIA", icon: "location-outline" },
    ],
    deadline: "10 June, 2026",
  },
  {
    id: "8",
    title: "Welder",
    company: "Saudi Aramco",
    companyInitial: "S",
    salary: "SAR 2,200 (BDT 72,600 approx.)",
    foodAllowance: "SAR 400 (BDT 13,200 approx.)",
    tags: [
      { label: "OVERSEAS", icon: "briefcase-outline" },
      { label: "SAUDI ARABIA", icon: "location-outline" },
    ],
    deadline: "15 June, 2026",
  },
  {
    id: "9",
    title: "Cleaning Staff",
    company: "Al Nakheel Co.",
    companyInitial: "A",
    salary: "SAR 700 (BDT 23,100 approx.)",
    foodAllowance: "SAR 150 (BDT 4,950 approx.)",
    tags: [
      { label: "OVERSEAS", icon: "briefcase-outline" },
      { label: "SAUDI ARABIA", icon: "location-outline" },
    ],
    deadline: "18 June, 2026",
  },
  {
    id: "10",
    title: "Mason",
    company: "Saudi Oger",
    companyInitial: "S",
    salary: "SAR 1,600 (BDT 52,800 approx.)",
    foodAllowance: "SAR 300 (BDT 9,900 approx.)",
    tags: [
      { label: "OVERSEAS", icon: "briefcase-outline" },
      { label: "SAUDI ARABIA", icon: "location-outline" },
    ],
    deadline: "25 June, 2026",
  },
];

const INITIAL_COUNT = 3;
const LOAD_MORE_COUNT = 3;

const CompanyLogo = ({ initial }: { initial: string }) => (
  <View className="w-10 h-10 rounded-full bg-yellow-400 items-center justify-center mr-3">
    <Text className="text-white font-bold text-base">{initial}</Text>
  </View>
);

const RecommendedJobCard = ({ job }: { job: RecommendedJob }) => (
  <View
    className="bg-white rounded-2xl p-4 mb-4 border border-gray-100"
    style={{
      elevation: 2,
      shadowColor: "#000",
      shadowOpacity: 0.06,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 2 },
    }}
  >
    {/* Title Row */}
    <View className="flex-row items-center justify-between mb-3">
      <Text className="text-gray-900 text-lg font-bold flex-1 mr-2">
        {job.title}
      </Text>
      <TouchableOpacity activeOpacity={0.7}>
        <Ionicons name="star-outline" size={22} color="#3b82f6" />
      </TouchableOpacity>
    </View>

    {/* Company Row */}
    <View className="flex-row items-center mb-3">
      <CompanyLogo initial={job.companyInitial} />
      <Text className="text-gray-600 text-sm font-medium">{job.company}</Text>
    </View>

    {/* Salary Box */}
    <View className="bg-blue-50 rounded-xl px-3 py-2 mb-3">
      <Text className="text-gray-700 text-xs mb-0.5">Salary: {job.salary}</Text>
      <Text className="text-gray-700 text-xs">
        Food Allowance: {job.foodAllowance}
      </Text>
    </View>

    {/* Tags */}
    <View className="flex-row gap-2 mb-2">
      {job.tags.map((tag) => (
        <View
          key={tag.label}
          className="flex-row items-center border border-gray-200 rounded-full px-3 py-1 gap-1"
        >
          <Ionicons name={tag.icon} size={11} color="#6b7280" />
          <Text className="text-gray-500 text-xs font-medium">{tag.label}</Text>
        </View>
      ))}
    </View>

    {/* Deadline */}
    <View className="flex-row items-center gap-1 mb-4">
      <Ionicons name="time-outline" size={13} color="#ef4444" />
      <Text className="text-gray-500 text-xs">
        Application Deadline:{" "}
        <Text className="font-medium text-gray-700">{job.deadline}</Text>
      </Text>
    </View>

    {/* Buttons */}
    <View className="flex-row gap-3">
      <TouchableOpacity
        activeOpacity={0.8}
        className="flex-1 border border-blue-400 rounded-xl py-3 items-center"
      >
        <Text className="text-blue-500 font-semibold text-sm">View</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        className="flex-1 bg-blue-500 rounded-xl py-3 items-center"
      >
        <Text className="text-white font-semibold text-sm">Apply Now</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const RecommendedJobsScreen = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const visibleJobs = recommendedJobs.slice(0, visibleCount);
  const hasMore = visibleCount < recommendedJobs.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + LOAD_MORE_COUNT, recommendedJobs.length),
    );
  };

  return (
    <View className="px-4 pb-6">
      {/* Section Title */}
      <View className="items-center py-4">
        <View className="bg-blue-50 border border-blue-100 rounded-full px-5 py-2">
          <Text className="text-gray-700 font-semibold text-base">
            Recommended Jobs
          </Text>
        </View>
      </View>

      {/* Job Cards */}
      {visibleJobs.map((job) => (
        <RecommendedJobCard key={job.id} job={job} />
      ))}

      {/* Load More Button */}
      {hasMore && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleLoadMore}
          className="items-center justify-center mt-2 py-3 border border-blue-200 rounded-2xl bg-blue-50"
        >
          <Ionicons name="chevron-down" size={22} color="#3b82f6" />
          <Text className="text-blue-500 text-xs font-medium mt-0.5">
            Load More
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default RecommendedJobsScreen;
