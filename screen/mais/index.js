import { Dimensions, Image, ScrollView, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native"
import { Text, View } from "react-native"
import { PRIMARY, Rosa, SECUNDARY, SPACING } from "../../config/index";
import { Maiss, Outros } from "../../data/index";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
const { width, height } = Dimensions.get('screen');
export const Mais = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar style="dark" />
            <Text style={{ fontWeight: 'bold', alignContent: 'center', alignSelf: 'center', alignItems: 'center', marginTop: SPACING * 5, fontSize: 17 }}>Mais</Text>
            <View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    {Maiss.map((category) =>
                        <TouchableOpacity key={category.id} >
                            <View style={{
                                width: 125, height: 150, backgroundColor: PRIMARY,
                                marginTop: SPACING * 2, borderRadius: SPACING, marginLeft: SPACING, padding: SPACING, justifyContent: 'space-between'
                            }}>
                                <Image source={category.img} style={{ width: 35, height: 35, justifyContent: 'space-between' }} />
                                <Text style={{ color: SECUNDARY }}>{category.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                </ScrollView>
            </View>
            <Text style={{ fontWeight: 'bold', color: PRIMARY, padding: SPACING, marginTop: SPACING, fontSize: 17 }}>Outros</Text>
            <ScrollView>
                {Outros.map((data) =>
                    <TouchableOpacity key={data.id}  >
                        <View style={{
                            flexDirection: 'row', alignContent: 'center',
                            alignItems: 'center', justifyContent: 'space-between', elevation: 1, backgroundColor: 'white'
                        }}>

                            <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', padding: SPACING }}>
                                <Image source={data.img} style={{ width: 40, height: 40 }} />
                                <Text style={{ fontWeight: 'bold', marginLeft: SPACING }}>{data.name}</Text>
                            </View>
                            <View>
                                <Ionicons name="chevron-forward" size={20} color={'gray'} />
                            </View>
                        </View>
                        <View style={{ borderColor: 'gray', borderWidth: 0.3, width: '90%', left: 10 }}></View>
                    </TouchableOpacity>
                )}
            </ScrollView>
        </SafeAreaView>
    )
}