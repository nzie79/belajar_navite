import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Link } from "expo-router";


export default function Siswa() {
    return (
        <SafeAreaView style={tw`flex-1`}>
            <ScrollView contentContainerStyle={tw`p-4`}>
            <View style={tw`items-center mb-4`}>
          <Text style={tw`text-2xl font-bold text-black`}>Album Pesat</Text>
        </View>
                <View style={tw`flex-row justify-center gap-4 mt-1`}>
                    <View style={tw`flex-1`}>
                        <Image
                            source={require("../../assets/images/y.jpg")}
                            style={tw`w-full h-40 rounded-lg`}
                            resizeMode="cover" />

                        <View style={tw`bg-yellow-500 py-2 px-6 rounded-lg mt-2`}>
                            <Text style={tw`text-white text-center font-bold`}>Nurfauziah</Text>
                        </View>
                    </View>
                    <View style={tw`flex-1`}>
                        <Image
                            source={require("../../assets/images/kucingg.jpg")}
                            style={tw`w-full h-40 rounded-lg`}
                            resizeMode="cover" />
                            
                             <Link href="/smkpesat/detailproyek">
                        <View style={tw`bg-yellow-500 py-2 px-6 rounded-lg mt-2`}>
                            <Text style={tw`text-white text-center font-bold`}>Nurfauziah</Text>
                        </View></Link>
                    </View>
                </View>



                <View style={tw`flex-row justify-center gap-4 mt-6`}>
                    <View style={tw`flex-1`}>
                        <Image
                            source={require("../../assets/images/y.jpg")}
                            style={tw`w-full h-40 rounded-lg`}
                            resizeMode="cover"
                        />

                        <View style={tw`bg-yellow-500 py-2 px-6 rounded-lg mt-2`}>
                            <Text style={tw`text-white text-center font-bold`}>Nurfauziah</Text>
                        </View>
                    </View>
                    <View style={tw`flex-1`}>
                        <Image
                            source={require("../../assets/images/y.jpg")}
                            style={tw`w-full h-40 rounded-lg`}
                            resizeMode="cover" />
                        <View style={tw`bg-yellow-500 py-2 px-6 rounded-lg mt-2`}>
                            <Text style={tw`text-white text-center font-bold`}>Nurfauziah</Text>
                        </View>
                    </View>
                </View>

                <View style={tw`flex-row justify-center gap-4 mt-1`}>
                    <View style={tw`flex-1`}>
                        <Image
                            source={require("../../assets/images/y.jpg")}
                            style={tw`w-full h-40 rounded-lg`}
                            resizeMode="cover" />

                        <View style={tw`bg-yellow-500 py-2 px-6 rounded-lg mt-2`}>
                            <Text style={tw`text-white text-center font-bold`}>Nurfauziah</Text>
                        </View>
                    </View>
                    <View style={tw`flex-1`}>
                        <Image
                            source={require("../../assets/images/y.jpg")}
                            style={tw`w-full h-40 rounded-lg`}
                            resizeMode="cover" />
                        <View style={tw`bg-yellow-500 py-2 px-6 rounded-lg mt-2`}>
                            <Text style={tw`text-white text-center font-bold`}>Nurfauziah</Text>
                        </View>
                    </View>
                </View>



                <View style={tw`flex-row justify-center gap-4 mt-6`}>
                    <View style={tw`flex-1`}>
                        <Image
                            source={require("../../assets/images/y.jpg")}
                            style={tw`w-full h-40 rounded-lg`}
                            resizeMode="cover"
                        />

                        <View style={tw`bg-yellow-500 py-2 px-6 rounded-lg mt-2`}>
                            <Text style={tw`text-white text-center font-bold`}>Nurfauziah</Text>
                        </View>
                    </View>
                    <View style={tw`flex-1`}>
                        <Image
                            source={require("../../assets/images/y.jpg")}
                            style={tw`w-full h-40 rounded-lg`}
                            resizeMode="cover" />
                        <View style={tw`bg-yellow-500 py-2 px-6 rounded-lg mt-2`}>
                            <Text style={tw`text-white text-center font-bold`}>Nurfauziah</Text>
                        </View>
                    </View>
                </View>

                <View style={tw`flex-row justify-center gap-4 mt-1`}>
                    <View style={tw`flex-1`}>
                        <Image
                            source={require("../../assets/images/y.jpg")}
                            style={tw`w-full h-40 rounded-lg`}
                            resizeMode="cover" />

                        <View style={tw`bg-yellow-500 py-2 px-6 rounded-lg mt-2`}>
                            <Text style={tw`text-white text-center font-bold`}>Nurfauziah</Text>
                        </View>
                    </View>
                    <View style={tw`flex-1`}>
                        <Image
                            source={require("../../assets/images/y.jpg")}
                            style={tw`w-full h-40 rounded-lg`}
                            resizeMode="cover" />
                        <View style={tw`bg-yellow-500 py-2 px-6 rounded-lg mt-2`}>
                            <Text style={tw`text-white text-center font-bold`}>Nurfauziah</Text>
                        </View>
                    </View>
                </View>

                <View style={tw`flex-row justify-center gap-4 mt-6`}>
                    <View style={tw`flex-1`}>
                        <Image
                            source={require("../../assets/images/y.jpg")}
                            style={tw`w-full h-40 rounded-lg`}
                            resizeMode="cover"
                        />

                        <View style={tw`bg-yellow-500 py-2 px-6 rounded-lg mt-2`}>
                            <Text style={tw`text-white text-center font-bold`}>Nurfauziah</Text>
                        </View>
                    </View>
                    <View style={tw`flex-1`}>
                        <Image
                            source={require("../../assets/images/y.jpg")}
                            style={tw`w-full h-40 rounded-lg`}
                            resizeMode="cover" />
                        <View style={tw`bg-yellow-500 py-2 px-6 rounded-lg mt-2`}>
                            <Text style={tw`text-white text-center font-bold`}>Nurfauziah</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
