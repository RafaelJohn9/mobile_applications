import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const WeatherComponents = ({ wind, pressure, rain, humidity }) => {
    return (
        <View className="flex flex-row mt-4 p-2 justify-around mb-4 flex-wrap">
            <View className="flex w-2/6 mx-3 mb-4 flex-row gap-2">
                <MaterialCommunityIcons name="weather-windy" size={30} color="white" />
                <View>
                    <Text className="text-white">{wind}</Text>
                    <Text className="text-white">Wind</Text>
                </View>
            </View>
            <View className="flex w-2/6 mx-3 mb-4 flex-row gap-2">
                <MaterialCommunityIcons name="weather-rainy" size={30} color="white" />
                <View>
                    <Text className="text-white">{rain}</Text>
                    <Text className="text-white mb-1">Chance of rain</Text>
                </View>
            </View>
            <View className="flex w-2/6 mx-3 mb-4 flex-row gap-2">

                <MaterialCommunityIcons name="weather-cloudy" size={30} color="white" />
                <View>
                    <Text className="text-white">{pressure}</Text>
                    <Text className="text-white">Pressure</Text>
                </View>
            </View>
            <View className="flex w-2/6 mx-3 mb-4 flex-row gap-2">
                <MaterialCommunityIcons name="water" size={30} color="white" />
                <View>
                    <Text className="text-white">{humidity}</Text>
                    <Text className="text-white">Humidity {humidity}</Text>
                </View>
            </View>
        </View>
    );
};


export default WeatherComponents;
