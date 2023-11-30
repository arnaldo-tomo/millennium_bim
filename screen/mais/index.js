import { Dimensions, Image, ScrollView, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native"
import { Text, View } from "react-native"
import { PRIMARY, Rosa, SECUNDARY, SPACING } from "../../config/index";
import { Maiss } from "../../data/index";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
const { width, height } = Dimensions.get('screen');
export const Mais = ({ navigation }) => {
    return (
        <SafeAreaView>
            <StatusBar style="dark" />
            <View style={{ alignItems: 'center', marginTop: SPACING * 5, marginLeft: SPACING, justifyContent: 'space-between' }}>
                <Text style={{ fontWeight: 'bold', alignContent: 'center', alignSelf: 'center', alignItems: 'center', marginRight: SPACING * 5 }}>Mais</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                {Maiss.map((category) =>
                    <TouchableOpacity key={category.id} onPress={() => navigation.push('CredeleckComprar')}>
                        <View style={{
                            width: 125, height: 150, backgroundColor: PRIMARY,
                            marginTop: SPACING * 2, borderRadius: SPACING, marginLeft: SPACING, padding: SPACING, justifyContent: 'space-between'
                        }}>
                            <Image source={category.img} style={{ width: 40, height: 40, justifyContent: 'space-between' }} />
                            <Text style={{ color: SECUNDARY }}>{category.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            </ScrollView>
            <Text style={{ fontWeight: 'bold', color: PRIMARY, padding: SPACING * 2 }}>Outros</Text>
            <ScrollView>

            </ScrollView>


        </SafeAreaView>
    )
}