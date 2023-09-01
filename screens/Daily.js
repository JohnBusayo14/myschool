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
<TouchableOpacity onPress={toggleExpandedmo} className=' w-full bg-[#ef476f] my-2 rounded-lg'>
<View className=' w-full h-28 flex justify-around'>
  <View className=' w-full flex flex-row justify-between px-3 items-center'>
<Text className=' font-extrabold text-2xl text-white'>{item.content.day1}</Text>
<Text className=' text-white font-bold text-lg'>{item.content.date1}</Text>
  </View>

<View className=' w-full flex flex-row justify-between px-3 items-center'>
  <Text className=' text-white font-bold text-base'>{item.content.topic1}</Text>
  <Text className='text-white text-base font-semibold'>{item.content.bible_text1}</Text>
</View>

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
<TouchableOpacity onPress={toggleExpandedte} className=' w-ful bg-[#ffbe0b] my-2 rounded-lg'>
<View className=' w-full h-28 flex justify-around'>
  <View className=' w-full flex flex-row justify-between px-3 items-center'>
<Text className=' font-extrabold text-2xl text-white'>{item.content.day2}</Text>
<Text className=' text-white font-bold text-lg'>{item.content.date2}</Text>
  </View>

<View className=' w-full flex flex-row justify-between px-3 items-center'>
  <Text className=' text-white font-bold text-base'>{item.content.topic2}</Text>
  <Text className='text-white text-base font-semibold'>{item.content.bible_text2}</Text>
</View>

</View>
</TouchableOpacity>

{expandedte && (
  <View className='bg-gray-200 p-4 rounded mt-2'>
  {/* Content to be displayed when expanded */}
  <Text className='text-gray-800 font-semibold text-lg'><Text className=' font-extrabold text-xl text-[#e63946]'>LESSON: </Text>{item.content.lesson_word2}</Text>
  <Text className=' text-base py-3 font-bold'><Text className=' font-extrabold text-lg text-[#e63946]'>Point of Emphasis: </Text>{item.content.point_of_emphasis2}</Text>
  <Text  className=' text-base py-3 font-bold'><Text className=' font-extrabold text-lg text-[#e63946]'>Prayer Point: </Text>{item.content.prayer_point2}</Text>
</View>
)}
</View>
<View className=' w-[90%] flex flex-col mx-auto mt-5'>
<TouchableOpacity onPress={toggleExpandedwe} className=' w-ful bg-[#e5989b] my-2 rounded-lg'>
<View className=' w-full h-28 flex justify-around'>
  <View className=' w-full flex flex-row justify-between px-3 items-center'>
<Text className=' font-extrabold text-2xl text-white'>{item.content.day3}</Text>
<Text className=' text-white font-bold text-lg'>{item.content.date3}</Text>
  </View>

<View className=' w-full flex flex-row justify-between px-3 items-center'>
  <Text className=' text-white font-bold text-base'>{item.content.topic3}</Text>
  <Text className='text-white text-base font-semibold'>{item.content.bible_text3}</Text>
</View>

</View>
</TouchableOpacity>

{expandedwe && (
  <View className='bg-gray-200 p-4 rounded mt-2'>
  {/* Content to be displayed when expanded */}
  <Text className='text-gray-800 font-semibold text-lg'><Text className=' font-extrabold text-xl text-[#e63946]'>LESSON: </Text>{item.content.lesson_word3}</Text>
  <Text className=' text-base py-3 font-bold'><Text className=' font-extrabold text-lg text-[#e63946]'>Point of Emphasis: </Text>{item.content.point_of_emphasis3}</Text>
  <Text  className=' text-base py-3 font-bold'><Text className=' font-extrabold text-lg text-[#e63946]'>Prayer Point: </Text>{item.content.prayer_point3}</Text>
</View>
)}
</View>
<View className=' w-[90%] flex flex-col mx-auto mt-5'>
<TouchableOpacity onPress={toggleExpandedth} className=' w-ful bg-[#06d6a0] my-2 rounded-lg'>
<View className=' w-full h-28 flex justify-around'>
  <View className=' w-full flex flex-row justify-between px-3 items-center'>
<Text className=' font-extrabold text-2xl text-white'>{item.content.day4}</Text>
<Text className=' text-white font-bold text-lg'>{item.content.date4}</Text>
  </View>

<View className=' w-full flex flex-row justify-between px-3 items-center'>
  <Text className=' text-white font-bold text-base'>{item.content.topic4}</Text>
  <Text className='text-white text-base font-semibold'>{item.content.bible_text4}</Text>
</View>

</View>
</TouchableOpacity>

{expandedth && (
  <View className='bg-gray-200 p-4 rounded mt-2'>
  {/* Content to be displayed when expanded */}
  <Text className='text-gray-800 font-semibold text-lg'><Text className=' font-extrabold text-xl text-[#e63946]'>LESSON: </Text>{item.content.lesson_word4}</Text>
  <Text className=' text-base py-3 font-bold'><Text className=' font-extrabold text-lg text-[#e63946]'>Point of Emphasis: </Text>{item.content.point_of_emphasis4}</Text>
  <Text  className=' text-base py-3 font-bold'><Text className=' font-extrabold text-lg text-[#e63946]'>Prayer Point: </Text>{item.content.prayer_point4}</Text>
</View>
)}
</View>
<View className=' w-[90%] flex flex-col mx-auto mt-5'>
<TouchableOpacity onPress={toggleExpandedfr} className=' w-ful bg-[#c8b6ff] my-2 rounded-lg'>
<View className=' w-full h-28 flex justify-around'>
  <View className=' w-full flex flex-row justify-between px-3 items-center'>
<Text className=' font-extrabold text-2xl text-white'>{item.content.day5}</Text>
<Text className=' text-white font-bold text-lg'>{item.content.date5}</Text>
  </View>

<View className=' w-full flex flex-row justify-between px-3 items-center'>
  <Text className=' text-white font-bold text-base'>{item.content.topic5}</Text>
  <Text className='text-white text-base font-semibold'>{item.content.bible_text5}</Text>
</View>

</View>
</TouchableOpacity>

{expandedfr && (
  <View className='bg-gray-200 p-4 rounded mt-2'>
  {/* Content to be displayed when expanded */}
  <Text className='text-gray-800 font-semibold text-lg'><Text className=' font-extrabold text-xl text-[#e63946]'>LESSON: </Text>{item.content.lesson_word5}</Text>
  <Text className=' text-base py-3 font-bold'><Text className=' font-extrabold text-lg text-[#e63946]'>Point of Emphasis: </Text>{item.content.point_of_emphasis5}</Text>
  <Text  className=' text-base py-3 font-bold'><Text className=' font-extrabold text-lg text-[#e63946]'>Prayer Point: </Text>{item.content.prayer_point5}</Text>
</View>
)}
</View>
<View className=' w-[90%] flex flex-col mx-auto mt-5'>
<TouchableOpacity onPress={toggleExpandedsa} className=' w-ful bg-[#a9def9] my-2 rounded-lg'>
<View className=' w-full h-28 flex justify-around'>
  <View className=' w-full flex flex-row justify-between px-3 items-center'>
<Text className=' font-extrabold text-2xl text-white'>{item.content.day6}</Text>
<Text className=' text-white font-bold text-lg'>{item.content.date6}</Text>
  </View>

<View className=' w-full flex flex-row justify-between px-3 items-center'>
  <Text className=' text-white font-bold text-base'>{item.content.topic6}</Text>
  <Text className='text-white text-base font-semibold'>{item.content.bible_text6}</Text>
</View>

</View>
</TouchableOpacity>

{expandedsa && (
  <View className='bg-gray-200 p-4 rounded mt-2'>
  {/* Content to be displayed when expanded */}
  <Text className='text-gray-800 font-semibold text-lg'><Text className=' font-extrabold text-xl text-[#e63946]'>LESSON: </Text>{item.content.lesson_word6}</Text>
  <Text className=' text-base py-3 font-bold'><Text className=' font-extrabold text-lg text-[#e63946]'>Point of Emphasis: </Text>{item.content.point_of_emphasis6}</Text>
  <Text  className=' text-base py-3 font-bold'><Text className=' font-extrabold text-lg text-[#e63946]'>Prayer Point: </Text>{item.content.prayer_point6}</Text>
</View>
)}
</View>
<View className=' w-[90%] flex flex-col mx-auto mt-5'>
<TouchableOpacity onPress={toggleExpandedsun} className=' w-ful bg-[#e09f3e] my-2 rounded-lg'>
<View className=' w-full h-28 flex justify-around'>
  <View className=' w-full flex flex-row justify-between px-3 items-center'>
<Text className=' font-extrabold text-2xl text-white'>{item.content.day7}</Text>
<Text className=' text-white font-bold text-lg'>{item.content.date7}</Text>
  </View>

<View className=' w-full flex flex-row justify-between px-3 items-center'>
  <Text className=' text-white font-bold text-base'>{item.content.topic7}</Text>
  <Text className='text-white text-base font-semibold'>{item.content.bible_text7}</Text>
</View>

</View>
</TouchableOpacity>

{expandedsun && (
  <View className='bg-gray-200 p-4 rounded mt-2'>
  {/* Content to be displayed when expanded */}
  <Text className='text-gray-800 font-semibold text-lg'><Text className=' font-extrabold text-xl text-[#e63946]'>LESSON: </Text>{item.content.lesson_word7}</Text>
  <Text className=' text-base py-3 font-bold'><Text className=' font-extrabold text-lg text-[#e63946]'>Point of Emphasis: </Text>{item.content.point_of_emphasis7}</Text>
  <Text  className=' text-base py-3 font-bold'><Text className=' font-extrabold text-lg text-[#e63946]'>Prayer Point: </Text>{item.content.prayer_point7}</Text>
</View>
)}
</View>
     </View>
       </ScrollView>

    </SafeAreaView>
    
 
  )
} 
