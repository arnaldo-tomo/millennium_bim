import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { SPACING } from '../../config';
import { Ionicons } from "@expo/vector-icons";

export default function CredeleckComprar() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <Ionicons name="chevron" />
            </View>
            <View style={{ paddingTop: SPACING * 4 }}>
                <Text>Comprar Credelec</Text>
            </View>

        </SafeAreaView>
    );
}