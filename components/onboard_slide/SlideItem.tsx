import { Text, View, Dimensions, Animated, Easing } from "react-native";
import React from "react";

interface Props {
  item: {
    img: any;
    title: string;
    description: string;
    highlight: string;
    width: any;
  };
}

const { width, height } = Dimensions.get("screen");

const SlideItem = ({ item }: Props) => {
  const translateYImage = new Animated.Value(40);

  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();

  return (
    <View style={{ width, height, alignItems: "center" }}>
      <Animated.Image
        source={item.img}
        resizeMode="contain"
        className="flex-[0.6] -mt-14"
        style={[
          {
            width: item.width,
            transform: [
              {
                translateY: translateYImage,
              },
            ],
          },
        ]}
      />

      <View className="flex-[0.4] px-[10] items-center -mt-20">
        <Text className="text-[30px] font-bold text-[#1E1E1E] text-center">{item.title}</Text>
        <Text className="text-[13px] w-[300px] my-[12px] text-[#878787] text-center">
          {item.description} <Text className="text-[#5063BF]">{item.highlight}</Text>
        </Text>
      </View>
    </View>
  );
};

export default SlideItem;
