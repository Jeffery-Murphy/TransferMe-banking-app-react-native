import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Platform } from "react-native";
import { useRouter } from "expo-router";
import * as Yup from "yup";
import { useFormik } from "formik";

import Logo from "@/components/Logo";
import Input from "@/components/Input";
import Button from "@/components/Button";

const Signup = () => {
  const router = useRouter();
  const statusBarHeight = Platform.OS === "ios" ? 44 : 24;

  let schema = Yup.object().shape({
    email: Yup.string().email().required(),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      router.push({
        pathname: "/Signup",
        params: { email: values.email },
      });
    },
  });
  return (
    <View className="flex-1 bg-[#FFFFFF]">
      <View className="flex-1 px-6 justify-center" style={{ marginTop: statusBarHeight }}>
        <View>
          <Logo width={50} height={50} />
          <Text className="text-[35px] mt-2 font-bold">Sign Up</Text>
        </View>
        <View className="w-full mt-10">
          <Text className="text-[#878787] font-medium">Email Address</Text>
          <Input
            title="email"
            value={formik.values.email}
            placeholder=""
            onChangeText={formik.handleChange("email")}
          />
        </View>
        <View className="w-full mt-6">
          <Text className="text-[#878787] font-medium">Password</Text>
          <Input
            title="password"
            value={formik.values.password}
            placeholder=""
            onChangeText={formik.handleChange("password")}
          />
        </View>
        <View className="w-full mt-6">
          <Text className="text-[#878787] font-medium">Confirm Password</Text>
          <Input
            title="password"
            value={formik.values.confirmPassword}
            placeholder=""
            onChangeText={formik.handleChange("confirmPassword")}
          />
        </View>
        <View className="self-center mt-12">
          <Button title="Sign Up" onPress={() => router.push("/Signup")} />
        </View>
        <View className="flex-row items-center space-x-4 self-center mt-12">
          <View className="h-[0.6px] w-24 bg-[#B1B1B1]" />
          <Text>Or</Text>
          <View className="h-[0.6px] w-24 bg-[#B1B1B1]" />
        </View>
        <View className="flex-row space-x-5 mt-12 items-center self-center">
            <TouchableOpacity activeOpacity={1} className="bg-[#EEEEEE] w-[60px] h-[60px] rounded-full items-center justify-center">
                <Image source={require("../../assets/icons/google.png")} className="w-[32px] h-[32px]" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} className="w-[60px] h-[60px] rounded-full items-center justify-center">
                <Image source={require("../../assets/icons/facebook.png")} className="w-full h-full" />
            </TouchableOpacity>
        </View>
        <View className="flex-row items-center mt-12 justify-center space-x-1">
            <Text className="text-[#878787]">Already have an account?</Text>
            <TouchableOpacity onPress={() => router.push("/Login")} activeOpacity={1}>
                <Text className="text-[#5063BF] font-medium underline">Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;
