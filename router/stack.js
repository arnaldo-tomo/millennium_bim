// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Oneboard } from '../screen/oneboarding';


const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Oneboard" component={Oneboard} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
