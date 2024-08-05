import { View, Dimensions, Animated, StyleSheet } from "react-native";
import React from "react";


interface Props {
  data: any[];
  scrollX: Animated.Value;
  index: number;
}

const Pagination = ({ data, scrollX, index = 0 }: Props) => {
  const { width } = Dimensions.get("screen");

  return (
    <View style={styles.container}>
      {data.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [8, 8, 8],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.2, 1, 0.1],
          extrapolate: "clamp",
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ["#8EDFEB", "#8EDFEB", "#8EDFEB"],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={idx.toString()}
            style={[
              styles.dot,
              { width: dotWidth, backgroundColor },
              idx === index && styles.dotActive,
            ]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    position: "absolute",
    bottom: 230,
    flexDirection: "row",
    paddingHorizontal: 10,
    width: "100%",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 6,
    marginHorizontal: 3,
    backgroundColor: "#8EDFEB",
  },
  dotActive: {
    backgroundColor: "#5063BF",
  },
});

export default Pagination;
