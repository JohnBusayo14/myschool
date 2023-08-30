import React from 'react'
import {Image,TouchableOpacity, Text, View } from 'react-native';


const Homescreen = ({navigation}) => {
  return (
    <View className=" w-full h-screen flex-1 items-start justify-between bg-[#000000]">
  
  <View className=' w-full h-1/2'>
  <Text className=' text-4xl px-2 py-10 text-white font-extrabold italic'>THE GOSPEL FAITH MISSION INT'</Text>
  <Text className='font-bold px-2 text-2xl text-gray-400'>Sunday School Manual</Text>
  <TouchableOpacity 
    className=' w-32 h-12 my-10 bg-[#274c77] justify-center mx-2 align-middle rounded-md'
    onPress={() => navigation.navigate('Firstpage')}>
    <Text className='text-center text-lg font-bold text-white'>Get Started</Text>
    </TouchableOpacity>
  </View>
     <Image className=' w-full h-1/2 object-scale-down' source = {require('../assets/image6.png')} /> 
     
    {/* <Image source = {require('../assets/frontimage2.jpg')} /> */}

    </View>
  )
  
}

export default Homescreen;
  