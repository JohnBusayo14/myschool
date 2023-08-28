import { View,Text,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



export const Firstpage = ({navigation}) => {
  return (
   <SafeAreaView>
      <View className=' w-full flex flex-row justify-between h-20 items-center px-5 bg-[]'>
      <MaterialCommunityIcons name="arrow-left-circle-outline" size={40} color='#255f85'  onPress={() => navigation.navigate('FirstPage')} />
      <Text className=' text-center text-4xl font-extrabold'></Text>
      </View>
    <ScrollView>
<View className=' w-full flex flex-col mb-28'>
<View className=' w-[90%] m-auto rounded-lg bg-[#255f85] border border-gray-500 h-[250px] flex flex-row justify-around items-center mb-5'>
<Image className=' w-[40%] h-[50%] object-scale-down' source = {require('../assets/kids.png')} /> 
<Text className=' text-3xl font-bold text-white'>Children</Text>
<View className=' w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#fca311]'>
<MaterialCommunityIcons name="arrow-right" size={50} color='white'  onPress={() => navigation.navigate('SecondPage')} />
</View>
</View>
<View className=' w-[90%] m-auto rounded-lg bg-[#255f85] border border-gray-500 h-[250px] flex flex-row justify-around items-center mb-5'>
<Image className=' w-[40%] h-[50%] object-scale-down' source = {require('../assets/inter.png')} /> 
<View className='flex flex-col w-[30%]'>
<Text className=' text-3xl font-bold text-white text-center'>Intermediate</Text>
<Text className=' text-3xl font-bold text-white'>Class</Text>
</View>

<View className=' w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#fca311]'>
<MaterialCommunityIcons name="arrow-right" size={50} color='white' />
</View>
</View>

<View className=' w-[90%] m-auto rounded-lg bg-[#255f85] border border-gray-500 h-[250px] flex flex-row justify-around items-center mb-5'>
<Image className=' w-[40%] h-[50%] object-scale-down' source = {require('../assets/kids.png')} /> 
<View className='flex flex-col w-[30%]'>
<Text className=' text-3xl font-bold text-white'>Youth</Text>
<Text className=' text-3xl font-bold text-white'>English</Text>
</View>
<View className=' w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#fca311]'>
<MaterialCommunityIcons name="arrow-right" size={50} color='white' />
</View>
</View>
<View className=' w-[90%] m-auto rounded-lg bg-[#255f85] border border-gray-500 h-[250px] flex flex-row justify-around items-center mb-5'>
<Image className=' w-[40%] h-[50%] object-scale-down' source = {require('../assets/kids.png')} /> 
<View className='flex flex-col w-[30%]'>
<Text className=' text-3xl font-bold text-white'>Youth</Text>
<Text className=' text-3xl font-bold text-white'>Yoruba</Text>
</View>
<View className=' w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#fca311]'>
<MaterialCommunityIcons name="arrow-right" size={50} color='white' />
</View>
</View>
<View className=' w-[90%] m-auto rounded-lg bg-[#255f85] border border-gray-500 h-[250px] flex flex-row justify-around items-center mb-5'>
<Image className=' w-[40%] h-[50%] object-scale-down' source = {require('../assets/kids.png')} /> 
<View className='flex flex-col w-[30%]'>
<Text className=' text-3xl font-bold text-white text-center'>Adult</Text>
<Text className=' text-3xl font-bold text-white'>English</Text>
</View>
<View className=' w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#fca311]'>
<MaterialCommunityIcons name="arrow-right" size={50} color='white' />
</View>
</View>
<View className=' w-[90%] m-auto rounded-lg bg-[#255f85] border border-gray-500 h-[250px] flex flex-row justify-around items-center mb-5'>
<Image className=' w-[40%] h-[50%] object-scale-down' source = {require('../assets/kids.png')} /> 
<View className='flex flex-col w-[30%]'>
<Text className=' text-3xl font-bold text-white text-center'>Adult</Text>
<Text className=' text-3xl font-bold text-white'>Yoruba</Text>
</View>
<View className=' w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#fca311]'>
<MaterialCommunityIcons name="arrow-right" size={50} color='white' />
</View>
</View>
</View>
    </ScrollView>
   </SafeAreaView>
  )
}
