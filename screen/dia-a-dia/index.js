import { Dimensions } from "react-native"
import { SafeAreaView } from "react-native"
import { Text, View } from "react-native"
import { PRIMARY, SECUNDARY, SPACING, banner, fundo, user } from "../../config/index";
import { ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import { categorias } from "../../data";
import { ScrollView } from "react-native";
import { Image } from "react-native";
const { width, height } = Dimensions.get('screen');

export const Dia = ({ navigation }) => {
    const [active, setAtive] = useState(false);
    const navigateToCredelec = () => {
        navigation.navigate('Credelec', { popToTop: true });
    };
    return (
        <SafeAreaView>
            <View style={{ width: width, height: height }}>
                <StatusBar style="light" />
                <ImageBackground source={fundo} style={{ width: width, height: 340 }} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: SPACING, marginTop: SPACING * 3, alignItems: 'center' }}>
                        <Text style={{ color: SECUNDARY, fontWeight: '500' }}>Ola, {user.name}</Text>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Ionicons name="notifications" size={SPACING * 2} color={SECUNDARY} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Ionicons name="settings" size={SPACING * 2} color={SECUNDARY} style={{ marginLeft: SPACING }} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Ionicons name="power" size={SPACING * 2} color={SECUNDARY} style={{ marginLeft: SPACING }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ alignContent: 'center', alignSelf: 'center', alignItems: 'center' }}>
                        <Text style={{ color: SECUNDARY, marginBottom: SPACING * 2 }}>CTA JOVEM MZN</Text>
                        <Text style={{ color: SECUNDARY, marginBottom: SPACING * 2 }}>{user.conta}</Text>

                        {active == false ?
                            <TouchableOpacity onPress={() => setAtive(true)}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>
                                    <Ionicons name="eye" size={SPACING * 2} color={SECUNDARY} />
                                    <Text style={{ color: SECUNDARY, fontSize: SPACING * 2, fontWeight: '800' }}> Ver saldo </Text>
                                </View>

                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => setAtive(false)}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>
                                    <Ionicons name="eye-off" size={SPACING * 2} color={'gray'} />
                                    <Text style={{ color: SECUNDARY, fontSize: SPACING * 2, fontWeight: '800' }}>{user.saldo},200,42 </Text>
                                    <Text style={{ color: SECUNDARY }}>MZN </Text>

                                </View>
                            </TouchableOpacity>
                        }
                    </View>
                    <TouchableOpacity>

                        <View style={{ position: 'absolute', justifyContent: 'flex-end', alignContent: 'flex-end', alignSelf: 'flex-end', alignItems: 'flex-end', right: 30, bottom: 0 }}>
                            <Ionicons name="chevron-forward" size={SPACING * 3} color={SECUNDARY} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        borderColor: SECUNDARY, borderWidth: 1,
                        borderRadius: SPACING - 4, alignItems: 'center', alignSelf: 'center', alignContent: 'center', padding: 5, marginTop: SPACING * 2, elevation: 10
                    }}>
                        <Text style={{ color: SECUNDARY, }}>Ver movimentos</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: SPACING + 2 }}>
                        <Text style={{ backgroundColor: PRIMARY, width: 10, height: 10, borderRadius: SPACING }}></Text>
                        <Text style={{ backgroundColor: SECUNDARY, width: 8, height: 8, borderRadius: SPACING, marginLeft: 3 }}></Text>
                    </View>
                </ImageBackground>


                <ScrollView horizontal={true} style={{ position: 'absolute', top: 250 }} showsHorizontalScrollIndicator={false} >
                    {categorias.map((category) =>
                        <TouchableOpacity key={category.id} onPress={() => navigation.navigate('Oneboard')}>
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
                <View style={{ marginTop: SPACING * 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding: SPACING }}>
                    <Ionicons name="pie-chart" color={'#258BE7'} size={20} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: "#258BE7" }}>Ver patrimonio</Text>
                </View >
                <Image source={banner} style={{ width: width, height: 120 }} resizeMode="cover" />
            </View>

        </SafeAreaView >
    )
}