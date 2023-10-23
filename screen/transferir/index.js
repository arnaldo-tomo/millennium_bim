import { Dimensions } from "react-native"
import { SafeAreaView } from "react-native"
import { Text, View } from "react-native"
import { PRIMARY } from "../../config/index";
import { StatusBar } from "react-native";
const { width, height } = Dimensions.get('screen');
export const Transferir = ({ navigation }) => {
    return (
        <SafeAreaView>
            <StatusBar style="dark" />
            <View style={{ width: width, height: height, backgroundColor: PRIMARY }} >
                <Text onPress={() => navigation.navigate('Oneboard')}>Go To</Text>
            </View>
        </SafeAreaView>
    )
}