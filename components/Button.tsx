import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface Props {
  title: string;
  onPress: () => void;
}

const Button = ({ title, onPress }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      className="bg-[#5063BF] w-[201px] h-[59px] items-center justify-center rounded-[20px]"
    >
      <Text className="font-semibold text-[16px] text-[#FFFFFF]">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
