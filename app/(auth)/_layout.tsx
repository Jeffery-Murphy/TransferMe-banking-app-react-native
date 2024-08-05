import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Welcome"
        options={{
          statusBarColor: "transparent",
          statusBarStyle: "dark",
          statusBarTranslucent: true,
        }}
      />
      <Stack.Screen
        name="Onboard"
        options={{
          statusBarColor: "transparent",
          statusBarStyle: "dark",
          statusBarTranslucent: true,
        }}
      />
      <Stack.Screen
        name="Signup"
        options={{
          statusBarColor: "transparent",
          statusBarStyle: "dark",
          statusBarTranslucent: true,
        }}
      />
      <Stack.Screen
        name="Login"
        options={{
          statusBarColor: "transparent",
          statusBarStyle: "dark",
          statusBarTranslucent: true,
        }}
      />
    </Stack>
  );
};

export default AuthLayout;
