import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Transferir } from '../screen/transferir';
import { Pagar } from '../screen/pagar';
import { Mais } from '../screen/mais';
import { PRIMARY, SPACING } from '../config';
import { StackNavigation } from './stack';


const Tab = createBottomTabNavigator();

export const TabsNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarLabelPosition: "below-icon",
                tabBarLabelStyle: { fontWeight: 'bold', fontSize: SPACING + 2, marginBottom: SPACING },
                tabBarStyle: { height: 60, elevation: 1 },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Dia-a-dia') {
                        iconName = focused
                            ? 'wallet'
                            : 'wallet-outline';
                    }
                    if (route.name === 'Transferir') {
                        iconName = focused
                            ? 'arrow-redo'
                            : 'arrow-redo-outline';
                    }
                    if (route.name === 'Pagar') {
                        iconName = focused
                            ? 'server'
                            : 'server-outline';
                    }
                    if (route.name === 'Mais') {
                        iconName = focused
                            ? 'ellipsis-horizontal'
                            : 'ellipsis-horizontal-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: PRIMARY,
                tabBarInactiveTintColor: 'black',
            })}
            onNavigate={(route) => {
                if (route.name === "Credelec") {
                    route.options.popToTop = true;
                }
            }}
        >
            <Tab.Screen name="Dia-a-dia" component={StackNavigation} options={{ headerShown: false }} />
            <Tab.Screen name="Transferir" component={Transferir} options={{ headerShown: false }} />
            <Tab.Screen name="Pagar" component={Pagar} options={{ headerShown: false }} />
            <Tab.Screen name="Mais" component={Mais} options={{ headerShown: false }} />

        </Tab.Navigator>
    );
}