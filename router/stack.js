import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Oneboard } from '../screen/oneboarding';
import { Credelec } from '../screen/Credeleck';
import { Dia } from '../screen/dia-a-dia';


const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="dia" component={Dia} options={{ headerShown: false }} />
            <Stack.Screen name="Credelec" component={Credelec} options={{ headerShown: false }} />
            <Stack.Screen name="Oneboard" component={Oneboard} screenOptions={{ presentation: 'modal' }} />
        </Stack.Navigator>
    );
}
