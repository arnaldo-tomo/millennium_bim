import { Dimensions, Image, ScrollView, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native"
import { Text, View } from "react-native"
import { PRIMARY, Rosa, SECUNDARY, SPACING } from "../../config/index";
import { CredelecData, Recargas } from "../../data/index";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
const { width, height } = Dimensions.get('screen');

export const Credelec = ({ navigation, route }) => {
    const id = route.params;

    if (id === 1) {
        return (
            <SafeAreaView>
                <StatusBar style="dark" />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: SPACING * 5, marginLeft: SPACING, justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={SPACING * 3} color={PRIMARY} />
                    </TouchableOpacity>
                    <Text style={{ flexDirection: 'row', fontWeight: 'bold', alignContent: 'center', alignSelf: 'center', alignItems: 'center', marginRight: SPACING * 5 }}>Credeleck</Text>
                    <Text></Text>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    {CredelecData.map((category) =>
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

                <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', padding: SPACING, marginTop: SPACING * 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: SPACING * 2 }}>Favoritos </Text>
                    <Text style={{ backgroundColor: PRIMARY, width: 100, height: 4, borderRadius: SPACING }}></Text>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', alignItems: 'center', marginTop: SPACING * 10 }}>
                    <TouchableOpacity style={{ backgroundColor: "pink", borderRadius: SPACING * 5, padding: SPACING }}>
                        <Ionicons name="close" size={SPACING * 4} color={PRIMARY} />
                    </TouchableOpacity>
                    <Text style={{ marginTop: SPACING }}>Nao tem favoritos guardados</Text>
                </View>
            </SafeAreaView>
        )
    }
    if (id === 2) {
        return (
            <SafeAreaView>
                <StatusBar style="dark" />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: SPACING * 5, marginLeft: SPACING, justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={SPACING * 3} color={PRIMARY} />
                    </TouchableOpacity>
                    <Text style={{ flexDirection: 'row', fontWeight: 'bold', alignContent: 'center', alignSelf: 'center', alignItems: 'center', marginRight: SPACING * 5 }}>Credeleck</Text>
                    <Text></Text>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    {Recargas.map((category) =>
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

                <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', padding: SPACING, marginTop: SPACING * 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: SPACING * 2 }}>Favoritos </Text>
                    <Text style={{ backgroundColor: PRIMARY, width: 100, height: 4, borderRadius: SPACING }}></Text>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', alignItems: 'center', marginTop: SPACING * 10 }}>
                    <TouchableOpacity style={{ backgroundColor: "pink", borderRadius: SPACING * 5, padding: SPACING }}>
                        <Ionicons name="close" size={SPACING * 4} color={PRIMARY} />
                    </TouchableOpacity>
                    <Text style={{ marginTop: SPACING }}>Nao tem favoritos guardados</Text>
                </View>
            </SafeAreaView>
        )
    }

}