import { Image, StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons } from '@expo/vector-icons';
import tw from 'twrnc';
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={tw`flex-1 justify-center items-center mt-2`}>
          <Image
            source={require('../../assets/images/pp.jpg')}
            style={tw`w-30 h-30 rounded-full`}
          />
        </View>

        <View style={tw`rounded-t-xl p-10 mt-1 items-center`}>
          <Text style={tw`text-1xl font-bold text-black text-center`}>
            SMK INFORMATIKA PESAT ITXPRO
          </Text>
          <Text style={tw`text-sm font-bold text-black text-center`}>
            @smkpesat_itxpro
          </Text>
        </View>

        <View style={tw`flex-row justify-center mt-1`}>
  {/* Instagram Icon */}
  <View style={tw`items-center m-2`}>
    <View style={tw`w-12 h-12 bg-pink-200 rounded-full items-center justify-center`}>
      <EvilIcons name="sc-instagram" size={30} color="#e4405f" />
    </View>
  </View>

  {/* LinkedIn Icon */}
  <View style={tw`items-center m-2`}>
    <View style={tw`w-12 h-12 bg-blue-200 rounded-full items-center justify-center`}>
      <EvilIcons name="sc-linkedin" size={30} color="#06b6d4" />
    </View>
  </View>

  {/* Facebook Icon */}
  <View style={tw`items-center m-2`}>
    <View style={tw`w-12 h-12 bg-green-200 rounded-full items-center justify-center`}>
      <EvilIcons name="sc-facebook" size={30} color="#3b5998" />
    </View>
  </View>

  {/* Twitter Icon */}
  <View style={tw`items-center m-2`}>
    <View style={tw`w-12 h-12 bg-cyan-200 rounded-full items-center justify-center`}>
      <EvilIcons name="sc-twitter" size={30} color="#1da1f2" />
    </View>
  </View>
</View>

        <View style={tw`flex-row justify-around mt-4`}>
  <View style={tw`items-center`}>
    <Text style={tw`text-lg font-bold`}>11</Text>
    <Text style={tw`text-gray-600 text-sm`}>TKJ</Text>
  </View>
  <View style={tw`items-center`}>
    <Text style={tw`text-lg font-bold`}>RPL</Text>
    <Text style={tw`text-gray-600 text-sm`}>Jurusan</Text>
  </View>
  <View style={tw`items-center`}>
    <Text style={tw`text-lg font-bold`}>100</Text>
    <Text style={tw`text-gray-600 text-sm`}>DKP</Text>
  </View>
</View>


<View style={tw`flex-1 justify-center items-center mt-10`}>
  <View style={tw`flex-row justify-between gap-4`}>

    <Link href="/smkpesat/projek">
      <View style={tw`bg-white border border-gray-400 py-2 px-9 rounded-lg`}>
        <Text style={tw`text-black text-center font-bold text-lg`}>projek</Text>
      </View>
    </Link>


    <Link href="/smkpesat/siswa">
      <View style={tw`bg-blue-500 py-2 px-9 rounded-lg`}>
        <Text style={tw`text-white text-center font-bold text-lg`}>siswa</Text>
      </View>
    </Link>
  </View>
</View>



        <View style={tw`flex-row justify-center gap-4 mt-10`}>
          <View> <Link href="/tab/siswa"><Image source={require('../../assets/images/y.jpg')} style={tw`w-30 h-30 rounded-lg`} /> </Link></View>
          <View>
            <Image
              source={require('../../assets/images/y.jpg')}
              style={tw`w-30 h-30 rounded-lg`}
            />
          </View>
          <View >
            <Image
              source={require('../../assets/images/y.jpg')}
              style={tw`w-30 h-30 rounded-lg`}
            />
          </View>
        </View>
        <View style={tw`flex-row justify-center gap-4 mt-6`}>
          <View>
            <Image
              source={require('../../assets/images/y.jpg')}
              style={tw`w-30 h-30 rounded-lg`}
            />
          </View>
          <View>
            <Image
              source={require('../../assets/images/y.jpg')}
              style={tw`w-30 h-30 rounded-lg`}
            />
          </View>
          <View>
            <Image
              source={require('../../assets/images/y.jpg')}
              style={tw`w-30 h-30 rounded-lg`}
            />
          </View>
        </View>
        <View style={tw`flex-row justify-center gap-4 mt-6`}>
          <View>
            <Image
              source={require('../../assets/images/y.jpg')}
              style={tw`w-30 h-30 rounded-lg`}
            />
          </View>
          <View>
            <Image
              source={require('../../assets/images/y.jpg')}
              style={tw`w-30 h-30 rounded-lg`}
            />
          </View>
          <View>
            <Image
              source={require('../../assets/images/y.jpg')}
              style={tw`w-30 h-30 rounded-lg`}
            />
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}
