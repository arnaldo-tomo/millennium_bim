// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Oneboard } from '../screen/oneboarding';
import { Credelec } from '../screen/Credeleck';
import { TabsNavigation } from './tabs';


const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="TabsNavigation" component={TabsNavigation} options={{ headerShown: false }} />
                <Stack.Screen name="Credelec" component={Credelec} options={{ headerShown: false }} />
                <Stack.Screen name="Oneboard" component={Oneboard} screenOptions={{ presentation: 'modal' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
