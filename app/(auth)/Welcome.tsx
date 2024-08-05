import { View, Text, Platform } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Button from "@/components/Button";
import Logo from "@/components/Logo";

const Welcome = () => {
  const router = useRouter();
  const statusBarHeight = Platform.OS === "ios" ? 44 : 24;
  return (
    <View className="flex-1 bg-[#FFFFFF]">
      <View
        className="flex-1 items-center justify-center"
        style={{ marginTop: statusBarHeight }}
      >
        <View className="items-center">
          <Logo height={83} width={83} />
          <View className="items-center mt-4">
            <Text className="text-[54px] text-[#1E1E1E] font-semibold">
              Welcome to
            </Text>
            <Text className="text-[40px] text-[#5063BF] font-semibold">
              TransferMe.
            </Text>
          </View>
          <Text className="text-[13px] mt-4 text-[#5063BF]">
            Your Best Mobile Transfer Partner.
          </Text>
        </View>
        <View className="absolute bottom-28">
            <Button title={"Get Started"} onPress={()=>router.push("/Onboard")} />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
