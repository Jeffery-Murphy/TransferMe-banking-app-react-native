import { View, Text, Platform } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import Slider from '@/components/onboard_slide/Slider';
import Button from '@/components/Button';

const Onboard = () => {
    const router = useRouter();
  const statusBarHeight = Platform.OS === "ios" ? 44 : 24;
  return (
    <View className="flex-1 bg-[#FFFFFF]">
        <View className="flex-1 items-center justify-center" style={{marginTop: statusBarHeight}}>
            <Slider />
        <View className="absolute bottom-28 items-center">
            <Button title={"Continue"} onPress={()=>router.push("(auth)/Signup")} />
        </View>
        </View>
    </View>
  )
}

export default Onboard