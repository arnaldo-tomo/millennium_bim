import { Dimensions, Image, ScrollView, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native"
import { Text, View } from "react-native"
import { PRIMARY, Rosa, SECUNDARY, SPACING } from "../../config/index";
import { CredelecData, Transferencias } from "../../data/index";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
const { width, height } = Dimensions.get('screen');
export const Transferir = ({ navigation }) => {
    return (
        <SafeAreaView >

            <StatusBar style="dark" />
            <View style={{ alignItems: 'center', marginTop: SPACING * 5, justifyContent: 'space-between' }}>
                <Text style={{ fontWeight: 'bold', alignContent: 'center', alignSelf: 'center', alignItems: 'center', }}>Transferir</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                {Transferencias.map((category) =>
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
                <Text style={{ fontWeight: 'bold', fontSize: SPACING * 2 }}>Favoritos</Text>
                <Text style={{ backgroundColor: PRIMARY, width: 100, height: 4, borderRadius: SPACING }}></Text>
            </View>
            <ScrollView>

                <TouchableOpacity style={{ backgroundColor: "white", borderRadius: 16, padding: SPACING, width: '90%', left: 20, height: 90, elevation: 1, marginBottom: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/img/icon/vofafone.png')} style={{ backgroundColor: PRIMARY, borderRadius: 26, width: 50, height: 50, }} />
                            <View style={{ marginLeft: 20, justifyContent: 'center' }}>
                                <Text style={{ fontWeight: 'bold' }}>Mana Candida</Text>
                                <Text style={{ fontSize: 15 }}>
                                    <Text style={{ fontWeight: 'bold' }}>250.00</Text>
                                    MZN
                                </Text>
                            </View>
                        </View>
                        <View>
                            <Ionicons name="chevron-forward" size={SPACING * 4} color={PRIMARY} />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: "white", borderRadius: 16, padding: SPACING, width: '90%', left: 20, height: 90, elevation: 1, marginBottom: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/img/icon/vofafone.png')} style={{ backgroundColor: PRIMARY, borderRadius: 26, width: 50, height: 50, }} />
                            <View style={{ marginLeft: 20, justifyContent: 'center' }}>
                                <Text style={{ fontWeight: 'bold' }}>Mauro Peniel</Text>
                                <Text style={{ fontSize: 15 }}>
                                    <Text style={{ fontWeight: 'bold' }}>5,752.00</Text>
                                    MZN
                                </Text>
                            </View>
                        </View>
                        <View>
                            <Ionicons name="chevron-forward" size={SPACING * 4} color={PRIMARY} />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: "white", borderRadius: 16, padding: SPACING, width: '90%', left: 20, height: 90, elevation: 1, marginBottom: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/img/icon/vofafone.png')} style={{ backgroundColor: PRIMARY, borderRadius: 26, width: 50, height: 50, }} />
                            <View style={{ marginLeft: 20, justifyContent: 'center' }}>
                                <Text style={{ fontWeight: 'bold' }}>Filho Mesada</Text>
                                <Text style={{ fontSize: 15 }}>
                                    <Text style={{ fontWeight: 'bold' }}>9,000.00</Text>
                                    MZN
                                </Text>
                            </View>
                        </View>
                        <View>
                            <Ionicons name="chevron-forward" size={SPACING * 4} color={PRIMARY} />
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>

        </SafeAreaView>
    )
}