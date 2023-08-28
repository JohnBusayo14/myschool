import React from 'react'
import { Text, View,Image, SafeAreaView, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native';


export const LessonContent = () => {
  const route = useRoute();
  const { item } = route.params;

  

  return (
   <SafeAreaView>
    <ScrollView className=' w-full h-full flex flex-col'>

    
      <View className=' mx-auto my-5  w-80 h-40 flex flex-row justify-center items-center'>
           <View className=' w-2/3 h-full justify-center items-center '>
           <Text className=' font-extrabold text-2xl italic'>LESSON</Text>
           <Text className=' font-extrabold text-7xl font-mono'>{item.content.lesson_number}</Text>
         
           <Text className=' font-medium text-sm bg-[] ' >{item.content.lesson_date}</Text>
           <Text className=' font-medium text-xs '>(RESPONSIBILITY MONTH)</Text>
           </View>
           <Image className=' w-1/2 h-full bg-transparent' source = {require('../assets/teach.png')} />
           </View>
         <View className=' w-96 h-32 bg-[#6096BA]  items-center mx-auto justify-center rounded-lg'>
         <Text className=' font-extrabold text-2xl italic text-center text-white '>{item.topic} </Text>
       
         </View>
         <View  className=' w-96 mx-auto justify-center   flex flex-col items-center  my-5'> 
         <Text className=' font-semibold text-gray-500  text-base '>Suggested Hymns:{item.content.suggested_hymns}</Text>
         <Text className=' font-semibold text-gray-500  text-base '>Devotional Reading:{item.content.devotional_reading}</Text>
         <Text className=' font-semibold text-gray-500  text-base '>Topic For Adults: {item.content.topic_for_adults} </Text>
         <Text className=' font-semibold text-gray-500  text-base '>Topic For Youth: {item.content.topic_for_youth} </Text>
         <Text className=' font-semibold text-gray-500  text-base '>Topic For Intermediate: {item.content.topic_for_intermediate}</Text>
         <Text className=' font-semibold text-gray-500 pb-5  text-base '>Lesson Scriptures:{item.content.lesson_scriptures}</Text>
         </View>
    
         <View className=' w-96 h-32 border-solid border-2 border-[#44A1A0] mx-auto justify-between items-center'>
         <Text className=' -m-6 bg-white p-3 font-extrabold text-xl'>MEMORY VERSE</Text>
         <Text className=' text-center text-base font-semibold'>{item.content.memory_verse} <Text className=' font-extrabold py-2'>{item.content.memoryVerse_bible_passage} </Text></Text>
         </View>
        
         <View className=' w-full flex flex-col items-center gap-2 mx-auto'>
    
         <Text className=' font-extrabold text-xl py-5'>DAILY DEVOTIONAL READING</Text>
    
         <View className=' w-96 bg-[#6096BA]  flex flex-col justify-center items-center rounded-lg'>
          <Text className=' text-white font-extrabold text-2xl italic py-5'>BACKGROUND</Text>
          <Text className=' text-white text-center p-2 text-lg font-semibold'>{item.content.lesson_background} </Text>
         </View>
          <View className=' w-[98%]  flex flex-col items-center'> 
      <Text className=' font-bold text-[#738290] text-base py-5'>NOTES ON THE LESSON</Text>

      {/* <View className=' w-screen h-2/3 flex flex-col gap-5 align-middle items-center'> */}
           <Text className=' w-96  font-bold text-base text-white py-2 px-3 bg-[#6096BA] '>PART 1:  {item.content.part1_topic} </Text>
      <Text className='text-base text-[#738290] px-5'>{item.content.part1_para1}</Text>
      <Text className='text-base text-[#738290] px-5 py-3'>{item.content.part1_para2} </Text>

      <Text className=' font-bold text-base text-black py-2 px-3 bg-[#6096BA] '>PART 2: {item.content.part2_topic} </Text>
      <Text className='text-base text-[#738290] px-5'> {item.content.part2_para1} </Text>
      <Text className='text-base text-[#738290] px-5 py-3'>{item.content.part2_para2} </Text>
    
      <Text className=' font-bold text-base text-black py-2 px-3 bg-[#6096BA] '>PART 3: {item.content.part3_topic} </Text>
      <Text className='text-base text-[#738290] px-5'> {item.content.part3_para1} </Text>
      <Text className='text-base text-[#738290] px-5 py-3'>{item.content.part3_para2} </Text>
      
        </View>

            </View>
            <View className=' w-full  flex flex-col justify-center items-center'>
          <Text className=' text-center text-white font-bold text-xl bg-[#6096BA]  w-96 py-5'>CONCLUSION</Text>
          <Text className='  text-[#738290] text-start p-2 text-lg'>{item.content.lesson_conclusion} </Text>
          <Text className=' text-white bg-[#6096BA]  w-96 text-center font-bold text-xl py-5'>QUESTION</Text>
          <Text className=' text-[#738290] text-center p-2 text-base'>1. What was Apostle Paul passionate about in the book of Philemon</Text>
          <Text className=' text-[#738290] p-2 text-base text-start'>2. Where did Paul preach to Onesimus?</Text>
          <Text className=' text-[#738290] text-center p-2 text-base'>1. What was Apostle Paul passionate about in the book of Philemon</Text>
          <Text className=' text-[#738290] p-2 text-base text-start'>2. Where did Paul preach to Onesimus?</Text>
         </View>
        
    </ScrollView>

   </SafeAreaView>
   
  )
}
