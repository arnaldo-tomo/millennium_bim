import { Dimensions } from "react-native"
import { SafeAreaView } from "react-native"
import { Text, View } from "react-native"
import { PRIMARY } from "../../config/index";
import { StatusBar } from "react-native";
const { width, height } = Dimensions.get('screen');
export const Credelec = () => {
    return (
        <SafeAreaView>
            <Text>Make sure that 'Oneboard' is a valid screen name in your navigation setup. If the issue persists, you might want to provide more details about your navigation structure and how you're trying to navigate to the 'Oneboard' screen.

            </Text>
        </SafeAreaView>
    )
}