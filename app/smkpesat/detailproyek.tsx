import {View, Text, Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from "twrnc";
export default function detailproyek() {
    return (
        <SafeAreaView style={tw`flex-1 p-4`}>
        <View>
          {/* Gambar */}
          <Image
            source={require("../../assets/images/kucingg.jpg")}
            style={tw`w-full h-80 rounded-lg`}
            resizeMode="cover"
          />
  
   
          <View style={tw`items-center my-4`}>
            <Text style={tw`text-xl font-bold text-black`}>Deskripsi</Text>
          </View>

          <View>
            <Text style={tw`text-base text-justify text-gray-700`}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet adipisci odit aut atque, quaerat quod deleniti distinctio cumque molestias consectetur aliquid est eius, quisquam recusandae. Ad atque exercitationem quis enim?
            </Text>
          </View>
        </View>
      </SafeAreaView>
    )
}