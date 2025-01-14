import { EvilIcons } from '@expo/vector-icons';
import { Image, View, Text } from 'react-native';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>

        <Image source={require('../../assets/images/y.jpg')} style={tw`w-full h-109 absolute`} />
        <View style={tw`justify-center items-center p-4`}></View>


        <View style={tw`bg-yellow-300 rounded-t-xl p-10 mt-80`}>
          <Text style={tw`text-2xl font-bold text-black`}>Nurfauziah</Text>



          <View style={tw`flex-row justify-between items-center mt-2`}>
            <Text style={tw`text-sm text-gray-600`}>Programer</Text>
            <View style={tw`flex-row items-center`}>
              <EvilIcons name="location" size={20} color="black" style={tw`mr-1`} />
              <Text style={tw`text-sm text-gray-600`}>Bogor</Text>
            </View>
          </View>

          <View style={tw`flex-row justify-between mt-6`}>
            <View style={tw`items-center`}>
              <Text style={tw`text-lg font-bold`}>11</Text>
              <Text style={tw`text-gray-600 text-sm`}>Kelas</Text>
            </View>
            <View style={tw`items-center`}>
              <Text style={tw`text-lg font-bold`}>RPL</Text>
              <Text style={tw`text-gray-600 text-sm`}>Jurusan</Text>
            </View>
            <View style={tw`items-center`}>
              <Text style={tw`text-lg font-bold`}>100</Text>
              <Text style={tw`text-gray-600 text-sm`}>Jumlah Proyek</Text>
            </View>
          </View>

          <View style={tw`bg-black py-2 px-10 mt-9 rounded-lg self-start`}>
            <Text style={tw`text-white text-center font-bold`}>Hire Me</Text>
          </View>


          <View style={tw`flex-row mt-4`}>
            <EvilIcons name='sc-facebook' size={30} style={tw`m-2`} />
            <EvilIcons name='sc-linkedin' size={30} style={tw`m-2`} />
            <EvilIcons name='sc-twitter' size={30} style={tw`m-2`} />
          </View>

          <View style={tw`mt-4`}>
            <Text style={tw`text-2xl font-bold text-black `}>
              about
            </Text>
            <Text style={tw`text-sm text-gray-600 mt-3`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos facere accusantium ipsum minima maxime modi earum alias, dicta enim voluptatem voluptatum obcaecati dolores ab saepe, totam consectetur odio mollitia aspernatur.</Text>
          </View>

          <View style={tw`mt-4`}>
            <Text style={tw`text-2xl font-bold text-black `}>
              projek
            </Text>
            <Text style={tw`text-sm text-gray-600 mt-3`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos facere accusantium ipsum minima maxime modi earum alias, dicta enim voluptatem voluptatum obcaecati dolores ab saepe, totam consectetur odio mollitia aspernatur.</Text>
          </View>

          <View style={tw`mt-4`}>
            <Text style={tw`text-2xl font-bold text-black `}>
              tools
            </Text>
            <Text style={tw`text-sm text-gray-600 mt-3`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos facere accusantium ipsum minima maxime modi earum alias, dicta enim voluptatem voluptatum obcaecati dolores ab saepe, totam consectetur odio mollitia aspernatur.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
