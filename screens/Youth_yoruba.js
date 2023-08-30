import React from 'react'
import {Image,TouchableOpacity, Text,Button, View,ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Youth_yoruba = () => {
  return (
    <SafeAreaView className=' bg-[#000000]' >
<View className=' w-full h-14 flex flex-row items-center pl-2'>
<MaterialCommunityIcons name="arrow-left" size={30} color='#fb8500'  onPress={() => navigation.navigate('FirstPage')} />
</View>
    <ScrollView className=' w-full h-full flex flex-col'>
      
  <View className=' w-full  align-middle justify-around items-center mb-20'>

  <TouchableOpacity  className=' w-3/4 h-28 rounded-md bg-[#751717] flex flex-col justify-center align-middle m-auto'>
  <Text className=' text-2xl text-white text-center font-bold'>4TH QUARTER</Text>
  <Text className=' text-2xl text-white font-bold text-center'>JUNE-AUGUST,2023</Text>
  </TouchableOpacity>
  <View className=' w-80 h-40   flex flex-col justify-center align-middle m-auto'>
  <Text className=' text-xl  text-[#8d99ae] text-center font-serif'>THEME</Text>
  <Text className=' text-2xl text-[#8d99ae] text-center italic font-extrabold'>Demonstration of the </Text>
  <Text className=' text-4xl text-[#8d99ae] text-center font-extrabold'>CHRISTIAN LIFE</Text>
  <Text className=' text-sm text-[#8d99ae]  text-center font-normal'>(EXPOSITION ON THE BOOK OF PHILEMON)</Text>
  </View>

  <View className=' w-screen h-2/3 flex flex-col gap-5 align-middle items-center'>

{
  units?.map( 
     (unit, index) => {
      return (
    <TouchableOpacity key={index} onPress={() => navigation.navigate('Units',{unit})} className=' w-[90%] h-44 flex flex-col  bg-[#255f85]  rounded-md justify-center items-center align-middle shadow-2xl' >
<Text className=' font-extrabold text-2xl italic text-white py-5'>{unit.units.title}</Text>
<Text className=' font-extrabold text-lg text-white'>{unit.units.description}</Text>

</TouchableOpacity> )
})
}


 </View>

  </View>
  </ScrollView>
   </SafeAreaView>
  )
 
}
export default Youth_yoruba