import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';

interface Props {
  placeholder?: string;
  onChangeText: (text: string) => void;
  title: string;
  value: string;
}

const Input = ({
  placeholder,
  onChangeText,
  title,
  value,
  ...props
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className="w-full border-b-[#C4C4C4] border-b-[1px] py-[10px] rounded-md">
      <TextInput
        className="text-base"
        placeholderTextColor={"#565656"}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        {...props}
        secureTextEntry={title === "password" && !showPassword}
      />
      <View className="absolute right-0 bottom-2">
      {title === "password" && (
        <TouchableOpacity activeOpacity={1} onPress={() => setShowPassword(!showPassword)}>
          {
            showPassword ? <Ionicons name="eye-outline" size={17} color="#878787" /> : <Ionicons name="eye-off-outline" size={17} color="#878787" /> 
          }
        </TouchableOpacity>
      )}
      </View>
    </View>
  );
};

export default Input;
