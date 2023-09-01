import { View,Text,ImageBackground,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



export const Firstpage = ({navigation}) => {
  return (
<SafeAreaView className=' bg-[#000000]'>
<View className=' w-full h-14 flex flex-row items-center pl-2'>
<MaterialCommunityIcons name="arrow-left" size={30} color='#fb8500'  onPress={() => navigation.navigate('FirstPage')} />
<Text className=' capitalize text-2xl text-white font-semibold px-10'>Choose Category</Text>
</View>
<ScrollView>

<View className=' w-[90%] h-60 bg-[#415a77] flex flex-col m-auto rounded-xl my-3'>
<View className=' w-full flex flex-row justify-between p-3'>
  <Text className=' text-white font-semibold text-xl'>Category: </Text>
  <Text className=' text-white font-semibold text-lg'>Children </Text>
</View>
<View className=' w-full flex flex-row justify-between p-3'>
  <Text className=' text-white font-semibold text-xl'>Age: </Text>
  <Text className=' text-white font-semibold text-lg'>1-8</Text>
</View>

<View className=' w-full flex flex-row justify-between p-3  items-center'>
<Image className=' w-28 h-28 rounded-full'  source={require('../assets/kidss.jpg')}/> 
<MaterialCommunityIcons name="arrow-right" size={30} color='#fb8500'  onPress={() => navigation.navigate('Kid')} />

</View>

</View>

<View className=' w-[90%] h-60 bg-[#415a77] flex flex-col m-auto rounded-xl my-3'>
<View className=' w-full flex flex-row justify-between p-3'>
  <Text className=' text-white font-semibold text-xl'>Category: </Text>
  <Text className=' text-white font-semibold text-lg'>Intermediate</Text>
</View>
<View className=' w-full flex flex-row justify-between p-3'>
  <Text className=' text-white font-semibold text-xl'>Age: </Text>
  <Text className=' text-white font-semibold text-lg'>8-18</Text>
</View>

<View className=' w-full flex flex-row justify-between p-3  items-center'>
<Image className=' w-28 h-28 rounded-full'  source={require('../assets/interm.jpg')}/> 
<MaterialCommunityIcons name="arrow-right" size={30} color='#fb8500'  onPress={() => navigation.navigate('Intermediate')} />

</View>

</View>

<View className=' w-[90%] h-60 bg-[#415a77] flex flex-col m-auto rounded-xl my-3'>
<View className=' w-full flex flex-row justify-between p-3'>
  <Text className=' text-white font-semibold text-xl'>Category: </Text>
  <Text className=' text-white font-semibold text-lg'>Youth English </Text>
</View>
<View className=' w-full flex flex-row justify-between p-3'>
  <Text className=' text-white font-semibold text-xl'>Age: </Text>
  <Text className=' text-white font-semibold text-lg'>18-30</Text>
</View>

<View className=' w-full flex flex-row justify-between p-3  items-center'>
<Image className=' w-28 h-28 rounded-full'  source={require('../assets/youth6.jpg')}/> 
<MaterialCommunityIcons name="arrow-right" size={30} color='#fb8500'  onPress={() => navigation.navigate('Youth_english')} />

</View>

</View>

<View className=' w-[90%] h-60 bg-[#415a77] flex flex-col m-auto rounded-xl my-3'>
<View className=' w-full flex flex-row justify-between p-3'>
  <Text className=' text-white font-semibold text-xl'>Category: </Text>
  <Text className=' text-white font-semibold text-lg'>Youth Yoruba </Text>
</View>
<View className=' w-full flex flex-row justify-between p-3'>
  <Text className=' text-white font-semibold text-xl'>Age: </Text>
  <Text className=' text-white font-semibold text-lg'>18-30</Text>
</View>

<View className=' w-full flex flex-row justify-between p-3  items-center'>
<Image className=' w-28 h-28 rounded-full' source={require('../assets/youth6.jpg')}/> 
<MaterialCommunityIcons name="arrow-right" size={30} color='#fb8500'  onPress={() => navigation.navigate('Youth_yoruba')} />

</View>

</View>

<View className=' w-[90%] h-60 bg-[#415a77] flex flex-col m-auto rounded-xl my-3'>
<View className=' w-full flex flex-row justify-between p-3'>
  <Text className=' text-white font-semibold text-xl'>Category: </Text>
  <Text className=' text-white font-semibold text-lg'>Adult English </Text>
</View>
<View className=' w-full flex flex-row justify-between p-3'>
  <Text className=' text-white font-semibold text-xl'>Age: </Text>
  <Text className=' text-white font-semibold text-lg'>30 above</Text>
</View>

<View className=' w-full flex flex-row justify-between p-3  items-center'>
<Image className=' w-28 h-28 rounded-full'  source={require('../assets/adult2.jpg')}/> 
<MaterialCommunityIcons name="arrow-right" size={30} color='#fb8500'  onPress={() => navigation.navigate('Adult_english')} />

</View>

</View>

<View className=' w-[90%] h-60 bg-[#415a77] flex flex-col m-auto rounded-xl my-3 mb-20'>
<View className=' w-full flex flex-row justify-between p-3'>
  <Text className=' text-white font-semibold text-xl'>Category: </Text>
  <Text className=' text-white font-semibold text-lg'>Adult Yoruba </Text>
</View>
<View className=' w-full flex flex-row justify-between p-3'>
  <Text className=' text-white font-semibold text-xl'>Age: </Text>
  <Text className=' text-white font-semibold text-lg'>30 above</Text>
</View>

<View className=' w-full flex flex-row justify-between p-3  items-center'>
<Image className=' w-28 h-28 rounded-full'  source={require('../assets/adult2.jpg')}/> 
<MaterialCommunityIcons name="arrow-right" size={30} color='#fb8500'  onPress={() => navigation.navigate('Adult_yoruba')} />

</View>

</View>
</ScrollView>
   </SafeAreaView>
   
  )

  
}
