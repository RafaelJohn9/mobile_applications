import { View, Text, ScrollView } from "react-native";
import Weather from "../components/Weather";

function WeatherScreen() {
    return (
        <ScrollView className="min-h-screen overflow-y-auto">
            <Weather />
        </ScrollView>
    );
}

export default WeatherScreen;