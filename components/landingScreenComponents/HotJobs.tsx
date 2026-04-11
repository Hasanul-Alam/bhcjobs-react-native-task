import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ApplyButton from "../reusableComponents/ApplyButton";
import OutlineButton from "../reusableComponents/OutlineButton";
import SectionTitle from "../reusableComponents/SectionTitle";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

type HotJob = {
  id: string;
  title: string;
  company: string;
  companyInitial: string;
  salary: string;
  foodAllowance: string;
  tags: { label: string; icon: keyof typeof Ionicons.glyphMap }[];
  deadline: string;
};

const hotJobs: HotJob[] = [
  {
    id: "1",
    title: "Maintenance Man",
    company: "McDonald's",
    companyInitial: "M",
    salary: "SAR 1,000 (BDT 33,000 ...)",
    foodAllowance: "SAR 250 (BDT 8,250 approx.)",
    tags: [
      { label: "OVERSEAS", icon: "briefcase-outline" },
      { label: "SAUDI ARABIA", icon: "location-outline" },
    ],
    deadline: "7 May, 2026",
  },
  {
    id: "2",
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
];

const CompanyLogo = ({ initial }: { initial: string }) => (
  <View className="w-10 h-10 rounded-full bg-yellow-400 items-center justify-center mr-3">
    <Text className="text-white font-bold text-base">{initial}</Text>
  </View>
);

const HotJobCard = ({ job }: { job: HotJob }) => (
  <View
    style={{ width: SCREEN_WIDTH - 48 }}
    className="bg-white rounded-2xl p-4 border border-blue-100 mx-2"
  >
    <Text className="text-gray-900 text-lg font-bold text-center mb-3">
      {job.title}
    </Text>

    <View className="flex-row items-center mb-3">
      <CompanyLogo initial={job.companyInitial} />
      <Text className="text-gray-600 text-sm font-medium">{job.company}</Text>
    </View>

    <View className="bg-blue-50 rounded-xl px-3 py-2 mb-3">
      <Text className="text-gray-700 text-xs mb-0.5">Salary: {job.salary}</Text>
      <Text className="text-gray-700 text-xs">
        Food Allowance: {job.foodAllowance}
      </Text>
    </View>

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

    <View className="flex-row items-center gap-1 mb-4">
      <Ionicons name="time-outline" size={13} color="#ef4444" />
      <Text className="text-gray-500 text-xs">
        Application Deadline:{" "}
        <Text className="font-medium text-gray-700">{job.deadline}</Text>
      </Text>
    </View>

    <View className="flex-row gap-3">
      <OutlineButton
        buttonText="View"
        onPress={() => console.log("View Button Pressed")}
      />
      <ApplyButton onPress={() => console.log("Apply Button Pressed")} />
    </View>
  </View>
);

const HotJobsScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(
      e.nativeEvent.contentOffset.x / (SCREEN_WIDTH - 44),
    );
    setActiveIndex(index);
  };

  const scrollTo = (index: number) => {
    scrollRef.current?.scrollTo({
      x: index * (SCREEN_WIDTH - 44),
      animated: true,
    });
    setActiveIndex(index);
  };

  return (
    <View className="pb-6">
      {/* Title */}
      <SectionTitle title="Hot Jobs" />

      {/* Carousel */}
      <View className="flex-row items-center">
        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleScroll}
          snapToInterval={SCREEN_WIDTH - 44}
          decelerationRate="fast"
          contentContainerStyle={{ paddingHorizontal: 4 }}
        >
          {hotJobs.map((job) => (
            <HotJobCard key={job.id} job={job} />
          ))}
        </ScrollView>
      </View>

      {/* Dots */}
      <View className="flex-row justify-center gap-2 mt-4">
        {hotJobs.map((_, i) => (
          <TouchableOpacity key={i} onPress={() => scrollTo(i)}>
            <View
              className="rounded-full"
              style={{
                width: i === activeIndex ? 10 : 8,
                height: i === activeIndex ? 10 : 8,
                backgroundColor: i === activeIndex ? "#3b82f6" : "#d1d5db",
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default HotJobsScreen;
