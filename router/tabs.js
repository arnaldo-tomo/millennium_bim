import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dia } from '../screen/dia-a-dia';
import { Transferir } from '../screen/transferir';
import { Pagar } from '../screen/pagar';
import { Mais } from '../screen/mais';
import { PRIMARY, SPACING } from '../config';

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export const TabsNavigation = () => {
    return (
        // <NavigationContainer>

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
                    // You can return any component that you like here!
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
            <Tab.Screen name="Dia-a-dia" component={Dia} options={{ headerShown: false }} />
            <Tab.Screen name="Transferir" component={Transferir} options={{ headerShown: false }} />
            <Tab.Screen name="Pagar" component={Pagar} options={{ headerShown: false }} />
            <Tab.Screen name="Mais" component={Mais} options={{ headerShown: false }} />

        </Tab.Navigator>
        // </NavigationContainer>
    );
}