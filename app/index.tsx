import { View, Text, Platform } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  const statusBarHeight = Platform.OS === "ios" ? 44 : 24;

  useEffect(() => {
    const timeout = setTimeout(() => {
      return router.push("/Welcome");
    }, 3000);
    return () => clearTimeout(timeout);
  }, [router]);
  return (
    <View className="flex-1 bg-[#FFFFFF]">
      <View
        className="flex-1 items-center justify-center"
        style={{ marginTop: statusBarHeight }}
      >
        <View className="items-center">
          <View className="flex-row">
            <View className="bg-[#5063BF] w-[83px] h-[83px] rounded-full"></View>
            <View className="bg-[#8EDFEB] -ml-6 w-[83px] h-[83px] rounded-full"></View>
          </View>
          <Text className="text-[54px] text-[#5063BF] font-semibold">
            TransferMe.
          </Text>
          <Text className="text-[13px] text-[#5063BF]">
            Your Best Mobile Transfer Partner.
          </Text>
        </View>
        <View className="absolute bottom-4 flex-row space-x-1">
          <Text className="text-[#878787]">Secured by</Text>
          <View>
            <Text className="text-[#5063BF]">TransferMe.</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default index;
