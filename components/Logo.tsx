import { View } from "react-native";
import React from "react";

interface Props {
  width: number;
  height: number;
}

const Logo = ({ width, height }: Props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          backgroundColor: "#5063BF",
          width,
          height,
          borderRadius: width / 2,
        }}
      />
      <View
        style={{
          backgroundColor: "#8EDFEB",
          width,
          height,
          borderRadius: width / 2,
          marginLeft: -15,
        }}
      />
    </View>
  );
};

export default Logo;