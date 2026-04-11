import { Footer } from "@/components/landingScreenComponents/Footer";
import HotJobsScreen from "@/components/landingScreenComponents/HotJobs";
import PopularCompaniesScreen from "@/components/landingScreenComponents/PopularCompanies";
import PopularIndustriesScreen from "@/components/landingScreenComponents/PopularIndustries";
import RecommendedJobsScreen from "@/components/landingScreenComponents/RecommendedJobs";
import TrendingJobsScreen from "@/components/landingScreenComponents/TrendingJobs";
import CommonHeader from "@/components/reusableComponents/CommonHeader";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LandingScreen = () => {
  const screenHeight = useWindowDimensions().height;
  const [query, setQuery] = React.useState("");
  return (
    <>
      <SafeAreaView className="flex-1">
        <CommonHeader />
        <StatusBar style="light" />
        <ScrollView
          className="flex-1 bg-white"
          showsVerticalScrollIndicator={false}
        >
          <LinearGradient
            colors={["#bfdbfe", "#60a5fa", "#3b82f6", "#2563eb"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            className="flex-1 items-center justify-center"
            style={{ height: screenHeight / 2.5, overflow: "hidden" }}
          >
            <Text className="text-center text-white text-3xl font-bold tracking-wide">
              #1 Platform for Saudi Jobs
            </Text>
            <Text className="text-md text-white text-center mt-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              tempore natus laborum ad consequatur delectus rerum eos ex ratione
              quisquam minus sit voluptate nihil dolorem veniam, reiciendis
              explicabo facilis eligendi laboriosam nisi
            </Text>

            {/* Search Bar */}
            <View className="flex-row items-center bg-white rounded-full px-4 py-2 mx-4 mt-10">
              <TextInput
                className="flex-1 text-gray-500 text-sm"
                placeholder="Search Job"
                placeholderTextColor="#9ca3af"
                value={query}
                onChangeText={setQuery}
                style={{ fontSize: 14 }}
              />
              <TouchableOpacity
                activeOpacity={0.8}
                className="bg-blue-500 w-9 h-9 rounded-full items-center justify-center ml-2"
              >
                <Ionicons name="search" size={18} color="white" />
              </TouchableOpacity>
            </View>
          </LinearGradient>

          {/* Popular Industries Section */}
          <View>
            <PopularIndustriesScreen />
          </View>

          {/* Trending Jobs Section */}
          <View>
            <TrendingJobsScreen />
          </View>

          {/* Recommended Jobs Section */}
          <View>
            <RecommendedJobsScreen />
          </View>

          {/* Popular Companies Section */}
          <View>
            <PopularCompaniesScreen />
          </View>

          {/* Hot Jobs Section */}
          <View>
            <HotJobsScreen />
          </View>

          {/* Footer */}
          <View>
            <Footer />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default LandingScreen;
