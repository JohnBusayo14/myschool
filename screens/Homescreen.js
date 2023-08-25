import React from 'react'
import {Image,TouchableOpacity, Text, View } from 'react-native';


const Homescreen = ({navigation}) => {
  return (
    <View className="flex-1 items-start justify-around bg-white">
  
  <Text className='text-3xl px-2 text-black font-extrabold'>THE GOSPEL FAITH MISSION INT'</Text>
  <Text className='font-bold px-2 text-lg text-gray-400'>Sunday School Manual</Text>
  <TouchableOpacity 
    className=' w-32 h-12 bg-[#274c77] justify-center mx-2 align-middle rounded-md'
    onPress={() => navigation.navigate('SecondPage')}>
    <Text className='text-center text-lg font-bold text-white'>Get Started</Text>
    </TouchableOpacity>
     <Image className=' w-full h-[150px]object-scale-down' source = {require('../assets/frontimage.jpeg')} /> 
     
    {/* <Image source = {require('../assets/frontimage2.jpg')} /> */}
   
   
    

    </View>
  )
}

export default Homescreen;
  