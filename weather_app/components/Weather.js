import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import WeatherHeader from './common/WeatherHeader';
import rainy from '../assets/weather_widgets/rainy.gif'
import HorizontalLine from './common/HorizontalLine';
import WeatherComponents from './WeatherComponents';
import weather from '../middlewares/weatherApi';
import weatherImageRenderer from '../utilities/weatherImageRenderer';

const Weather = () => {
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const data = await weather('Mombasa');
                setWeatherData(data);
            } catch (error) {
                console.error('Failed to fetch weather data:', error);
            }
        };

        fetchWeather();
    }, []);

    return (
        <LinearGradient
            colors={['#2c79c1', '#60b6f4']}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            className="flex-1 justify-center items-center mx-6 mb-6 mt-8 rounded-3xl flex-grow overflow-y-auto"
        >
            <View className="flex-1  flex-col">
                <WeatherHeader title={weatherData.title} />
                <View className="items-center">
                    <Image
                        source={weatherImageRenderer(weatherData.weatherDescription)}
                        className="resize w-36 h-36"
                    />
                </View>
                <Text className="text-center p-4 text-xl text-white">{weatherData.day} | {weatherData.date}</Text>
                <Text className="text-center p-4 text-6xl text-white font-extrabold">{weatherData.temperature}</Text>
                <Text className="text-center px-4 py-2 text-xl text-white mb-2">{weatherData.weatherDescription}</Text>
                <HorizontalLine />
                <WeatherComponents wind={weatherData.wind} pressure={weatherData.pressure} humidity={weatherData.humidity} rain={weatherData.rain} />
            </View>
        </LinearGradient>
    );
};

export default Weather;