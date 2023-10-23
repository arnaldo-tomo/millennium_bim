import { Dimensions, Image, ScrollView, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native"
import { Text, View } from "react-native"
import { PRIMARY, SECUNDARY, SPACING } from "../../config/index";
import { CredelecData } from "../../data/index";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
const { width, height } = Dimensions.get('screen');
export const Credelec = ({ navigation }) => {
    return (
        <SafeAreaView>
            <StatusBar style="dark" />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: SPACING * 5, marginLeft: SPACING, justifyContent: 'space-between' }}>
                <TouchableOpacity>
                    <Ionicons name="arrow-back" size={SPACING * 3} color={PRIMARY} />
                </TouchableOpacity>
                <Text style={{ flexDirection: 'row', fontWeight: 'bold', alignContent: 'center', alignSelf: 'center', alignItems: 'center', marginRight: SPACING * 3 }}>Credeleck</Text>
                <Text></Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                {CredelecData.map((category) =>
                    <TouchableOpacity key={category.id} onPress={() => navigation.navigate('Credelec')}>
                        <View style={{
                            width: 125, height: 150, backgroundColor: PRIMARY,
                            marginTop: SPACING * 2, borderRadius: SPACING, marginLeft: SPACING, padding: SPACING, justifyContent: 'space-between'
                        }}>
                            <Image source={category.img} style={{ width: 40, height: 40, justifyContent: 'space-between' }} />
                            <Text style={{ color: SECUNDARY }}>{category.mame}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            </ScrollView>

            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', padding: SPACING, marginTop: SPACING*5 }}>
                <Text style={{ fontWeight: 'bold',fontSize:SPACING*10 }}>Favoritos</Text>
                <Text style={{ backgroundColor: PRIMARY, width: 100, height: 4, borderRadius: SPACING }}></Text>
            </View>
            <View>
                <Ionicons name="close" size={SPACING*5} color={PRIMARY}/>
                <View/>
        </SafeAreaView>
    )
}