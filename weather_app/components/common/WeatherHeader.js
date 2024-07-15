import React from "react";
import { View, Pressable, Text } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const WeatherHeader = ({ title }) => {
    return (
        <View className="flex flex-row justify-between w-full">
            <Pressable onPress={() => console.log("Pressed")}>
                <Text className="text-white font-extralight p-4 text-4xl">+</Text>
            </Pressable>
            <Text className="p-4 font-bold text-xl text-white">{title}</Text>
            <Pressable className="p-4">
                <MaterialIcons name="more-vert" size={24} color="white" />
            </Pressable>
        </View>
    );
}

export default WeatherHeader;
