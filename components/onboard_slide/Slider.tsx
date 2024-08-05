import { Animated, FlatList } from "react-native";
import React, { useRef, useState } from "react";

import SlideItem from "./SlideItem";
import Pagination from "./Pagination";


interface Slide {
  id: number;
  img: any;
  title: string;
  description: string;
  highlight?: string;
  width: string;
}

const Slider = () => {
  const [index, setIndex] = useState<number>(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const slides: Slide[] = [
    {
      id: 1,
      img: require("../../assets/images/img_7.png"),
      title: "Easy, Fast and Trusted",
      description: "Fast money transfer and gauranteed safe transitions with others.",
      width: "100%",
    },
    {
      id: 2,
      img: require("../../assets/images/img_6.png"),
      title: "Saving Your Money",
      description: "Track the progress of your savings and start a habit with.",
      highlight: "TransferMe",
      width: "100%",
    },
    {
      id: 3,
      img: require("../../assets/images/img_5.png"),
      title: "Free Transactions",
      description: "Provide the quality of your financial system with free money transactions without any fee.",
      width: "100%",
    },
    {
      id: 4,
      img: require("../../assets/images/img_4.png"),
      title: "International Transactions",
      description: "Provide the 100% freedom of financial management with lowest fee on International transactions.",
      width: "100%",
    },
    {
      id: 5,
      img: require("../../assets/images/img_3.png"),
      title: "Multiple Credit Cards",
      description: "Provide the 100% freedom of financial management with Multiple Payment Options for local & International Payments.",
      width: "100%",
    },
    {
      id: 6,
      img: require("../../assets/images/img_2.png"),
      title: "Pill Payment Made Easy",
      description: "Pay monthly or daily bills at home in a site of",
      highlight: "TransferMe.",
      width: "100%",
    },
    {
      id: 7,
      img: require("../../assets/images/img_1.png"),
      title: "Color Your Cards",
      description: "Provides better cards management with using Multiple Cards by using a different color scheme for each card payment method.",
      width: "100%",
    }
  ];

  const handleOnScroll = (event: any) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(
    (params: { viewableItems: any[] }) => {
      setIndex(params.viewableItems[0].index);
    }
  ).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <>
      <FlatList
        data={slides}
        renderItem={({ item }: { item: any }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination data={slides} scrollX={scrollX} index={index} />
    </>
  );
};

export default Slider;
