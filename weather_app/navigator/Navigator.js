import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WeatherScreen from '../screens/WeatherScreen';

/**
 * App Navigator component
 */
// Define your screens

function DetailsScreen() {
    return (
        <View>
            <Text>Details Screen</Text>
        </View>
    );
}

// Create a stack navigator
const Stack = createNativeStackNavigator();

// App Navigator component
function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" options={{ headerShown: false }} component={WeatherScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;