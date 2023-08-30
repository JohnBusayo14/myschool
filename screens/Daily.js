import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';


 
   
export const Daily = ({route}) => {
    const {item} = route.params;
  
    const [expandedmo, setExpandedmo] = useState(false);
    const [expandedte, setExpandedte] = useState(false);
    const [expandedwe, setExpandedwe] = useState(false);
    const [expandedth, setExpandedth] = useState(false);
    const [expandedfr, setExpandedfr] = useState(false);
    const [expandedsa, setExpandedsa] = useState(false);
    const [expandedsun,setExpandedsun] = useState(false);
    const toggleExpandedmo = () => {
      setExpandedmo(!expandedmo);
    };
    const toggleExpandedte = () => {
      setExpandedte(!expandedte);
    };
    const toggleExpandedwe = () => {
      setExpandedwe(!expandedwe);
    };
    const toggleExpandedth = () => {
      setExpandedth(!expandedth);
    };
    const toggleExpandedfr = () => {
      setExpandedfr(!expandedfr);
    };
    const toggleExpandedsa = () => {
      setExpandedsa(!expandedsa);
    };
    const toggleExpandedsun = () => {
      setExpandedsun(!expandedsun);
    };
  
  

  return (

    <SafeAreaView className=' w-full h-full bg-[#000000]'>
       <ScrollView >
     <View>
    
     
     <View className=' w-[90%] flex flex-col mx-auto mt-5'>
<TouchableOpacity onPress={toggleExpandedmo} className=' w-full bg-[#415a77] my-2 rounded-lg'>
<View className=' w-full h-28 flex justify-center items-center'>
<Text className=' font-extrabold text-2xl text-white'>{item.content.day1}</Text>
<Text className=' text-white font-bold text-xl'>{item.content.date1}</Text>
<Text className=' text-white text-base font-semibold'>{item.bible_text1}</Text>
</View>
</TouchableOpacity>

{expandedmo && (
<View className='bg-gray-200 p-4 rounded mt-2'>
  {/* Content to be displayed when expanded */}
  <Text className='text-gray-800 font-semibold text-lg'><Text className=' font-extrabold text-xl text-[#e63946]'>LESSON: </Text>{item.content.lesson_word1}</Text>
  <Text className=' text-base py-3 font-bold'><Text className=' font-extrabold text-lg text-[#e63946]'>Point of Emphasis: </Text>{item.content.point_of_emphasis1}</Text>
  <Text  className=' text-base py-3 font-bold'><Text className=' font-extrabold text-lg text-[#e63946]'>Prayer Point: </Text>{item.content.prayer_point1}</Text>
</View>
)}
</View>
<View className=' w-[90%] flex flex-col mx-auto mt-5'>
<TouchableOpacity onPress={toggleExpandedte} className=' w-ful bg-[#415a77] my-2 rounded-lg'>
<View className=' w-full h-28 flex justify-center items-center'>
<Text className=' font-extrabold text-2xl text-white'>{item.content.day1}</Text>
<Text className=' text-white font-bold text-xl'>{item.content.date1}</Text>
<Text className=' text-white text-base font-semibold'>{item.bible_text1}</Text>
</View>
</TouchableOpacity>

{expandedte && (
  <View className='bg-gray-200 p-4 rounded mt-2'>
  {/* Content to be displayed when expanded */}
  <Text className='text-gray-800 font-semibold text-lg'><Text className=' font-extrabold text-xl text-[#e63946]'>LESSON: </Text>{item.content.lesson_word1}</Text>
  <Text className=' text-base py-3 font-bold'><Text className=' font-extrabold text-lg text-[#e63946]'>Point of Emphasis: </Text>{item.content.point_of_emphasis1}</Text>
  <Text  className=' text-base py-3 font-bold'><Text className=' font-extrabold text-lg text-[#e63946]'>Prayer Point: </Text>{item.content.prayer_point1}</Text>
</View>
)}
</View>
<View className=' w-[90%] flex flex-col mx-auto mt-5'>
<TouchableOpacity onPress={toggleExpandedwe} className=' w-ful bg-[#415a77] my-2 rounded-lg'>
<View className=' w-full h-28 flex justify-center items-center'>
<Text className=' font-extrabold text-2xl text-white'>{item.content.day1}</Text>
<Text className=' text-white font-bold text-xl'>{item.content.date1}</Text>
<Text className=' text-white text-base font-semibold'>{item.bible_text1}</Text>
</View>
</TouchableOpacity>

{expandedwe && (
  <View className='bg-gray-200 p-4 rounded mt-2'>
  {/* Content to be displayed when expanded */}
  <Text className='text-gray-800 font-semibold text-lg'><Text className=' font-extrabold text-xl text-[#e63946]'>LESSON: </Text>{item.content.lesson_word1}</Text>
  <Text className=' text-base py-3 font-bold'><Text className=' font-extrabold text-lg text-[#e63946]'>Point of Emphasis: </Text>{item.content.point_of_emphasis1}</Text>
  <Text  className=' text-base py-3 font-bold'><Text className=' font-extrabold text-lg text-[#e63946]'>Prayer Point: </Text>{item.content.prayer_point1}</Text>
</View>
)}
</View>
<View className=' w-[90%] flex flex-col mx-auto mt-5'>
<TouchableOpacity onPress={toggleExpandedth} className=' w-ful bg-[#415a77] my-2 rounded-lg'>
<View className=' w-full h-28 flex justify-center items-center'>
<Text className=' font-extrabold text-2xl text-white'>{item.content.day1}</Text>
<Text className=' text-white font-bold text-xl'>{item.content.date1}</Text>
<Text className=' text-white text-base font-semibold'>{item.bible_text1}</Text>
</View>
</TouchableOpacity>

{expandedth && (
  <View className='bg-gray-200 p-4 rounded mt-2'>
  {/* Content to be displayed when expanded */}
  <Text className='text-gray-800 font-semibold text-lg'><Text className=' font-extrabold text-xl text-[#e63946]'>LESSON: </Text>{item.content.lesson_word1}</Text>
  <Text className=' text-base py-3 font-bold'><Text className=' font-extrabold text-lg text-[#e63946]'>Point of Emphasis: </Text>{item.content.point_of_emphasis1}</Text>
  <Text  className=' text-base py-3 font-bold'><Text className=' font-extrabold text-lg text-[#e63946]'>Prayer Point: </Text>{item.content.prayer_point1}</Text>
</View>
)}
</View>
<View className=' w-[90%] flex flex-col mx-auto mt-5'>
<TouchableOpacity onPress={toggleExpandedfr} className=' w-ful bg-[#415a77] my-2 rounded-lg'>
<View className=' w-full h-28 flex justify-center items-center'>
<Text className=' font-extrabold text-2xl text-white'>{item.content.day1}</Text>
<Text className=' text-white font-bold text-xl'>{item.content.date1}</Text>
<Text className=' text-white text-base font-semibold'>{item.bible_text1}</Text>
</View>
</TouchableOpacity>

{expandedfr && (
  <View className='bg-gray-200 p-4 rounded mt-2'>
  {/* Content to be displayed when expanded */}
  <Text className='text-gray-800 font-semibold text-lg'><Text className=' font-extrabold text-xl text-[#e63946]'>LESSON: </Text>{item.content.lesson_word1}</Text>
  <Text className=' text-base py-3 font-bold'><Text className=' font-extrabold text-lg text-[#e63946]'>Point of Emphasis: </Text>{item.content.point_of_emphasis1}</Text>
  <Text  className=' text-base py-3 font-bold'><Text className=' font-extrabold text-lg text-[#e63946]'>Prayer Point: </Text>{item.content.prayer_point1}</Text>
</View>
)}
</View>
<View className=' w-[90%] flex flex-col mx-auto mt-5'>
<TouchableOpacity onPress={toggleExpandedsa} className=' w-ful bg-[#415a77] my-2 rounded-lg'>
<View className=' w-full h-28 flex justify-center items-center'>
<Text className=' font-extrabold text-2xl text-white'>{item.content.day1}</Text>
<Text className=' text-white font-bold text-xl'>{item.content.date1}</Text>
<Text className=' text-white text-base font-semibold'>{item.bible_text1}</Text>
</View>
</TouchableOpacity>

{expandedsa && (
  <View className='bg-gray-200 p-4 rounded mt-2'>
  {/* Content to be displayed when expanded */}
  <Text className='text-gray-800 font-semibold text-lg'><Text className=' font-extrabold text-xl text-[#e63946]'>LESSON: </Text>{item.content.lesson_word1}</Text>
  <Text className=' text-base py-3 font-bold'><Text className=' font-extrabold text-lg text-[#e63946]'>Point of Emphasis: </Text>{item.content.point_of_emphasis1}</Text>
  <Text  className=' text-base py-3 font-bold'><Text className=' font-extrabold text-lg text-[#e63946]'>Prayer Point: </Text>{item.content.prayer_point1}</Text>
</View>
)}
</View>
<View className=' w-[90%] flex flex-col mx-auto mt-5'>
<TouchableOpacity onPress={toggleExpandedsun} className=' w-ful bg-[#415a77] my-2 rounded-lg'>
<View className=' w-full h-28 flex justify-center items-center'>
<Text className=' font-extrabold text-2xl text-white'>{item.content.day1}</Text>
<Text className=' text-white font-bold text-xl'>{item.content.date1}</Text>
<Text className=' text-white text-base font-semibold'>{item.bible_text1}</Text>
</View>
</TouchableOpacity>

{expandedsun && (
  <View className='bg-gray-200 p-4 rounded mt-2'>
  {/* Content to be displayed when expanded */}
  <Text className='text-gray-800 font-semibold text-lg'><Text className=' font-extrabold text-xl text-[#e63946]'>LESSON: </Text>{item.content.lesson_word1}</Text>
  <Text className=' text-base py-3 font-bold'><Text className=' font-extrabold text-lg text-[#e63946]'>Point of Emphasis: </Text>{item.content.point_of_emphasis1}</Text>
  <Text  className=' text-base py-3 font-bold'><Text className=' font-extrabold text-lg text-[#e63946]'>Prayer Point: </Text>{item.content.prayer_point1}</Text>
</View>
)}
</View>
     </View>
       </ScrollView>

    </SafeAreaView>
    
 
  )
}
