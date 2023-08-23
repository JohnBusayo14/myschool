
import React from 'react'
import { Text, View,Image } from 'react-native'

export const LessonScreen = ({route}) => {
  const {items} = route.params
  console.log(items);
  return (
    <View>
      <Text>{items.title}</Text>
      <View className=' mx-auto my-5  w-80 h-40 flex flex-row justify-center items-center'>
           <View className=' w-2/3 h-full justify-center items-center '>
           <Text className=' font-extrabold text-2xl italic'>LESSON</Text>
           <Text className=' font-extrabold text-7xl font-mono'>{items.content.lesson_number}</Text>
         
           <Text className=' font-medium text-sm bg-[] ' >{items.content.lesson_date}</Text>
           <Text className=' font-medium text-xs '>(RESPONSIBILITY MONTH)</Text>
           </View>
           <Image className=' w-1/2 h-full bg-transparent' source = {require('../assets/teach.png')} />
           </View>
         <View className=' w-96 h-24 bg-[#6096BA] flex my-10 flex-col items-center m-auto justify-center'>
         <Text className=' font-extrabold text-2xl italic text-center '>{items.topic} </Text>
       
         </View>
         <View  className=' w-screen bg-[44A1A0] flex flex-col items-center  my-5'> 
         <Text className=' font-semibold text-gray-500  text-base '>Suggested Hymns:{items.content.suggested_hymns}</Text>
         <Text className=' font-semibold text-gray-500  text-base '>Devotional Reading:{items.content.devotional_reading}</Text>
         <Text className=' font-semibold text-gray-500  text-base '>Topic For Adults: {items.content.topic_for_adults} </Text>
         <Text className=' font-semibold text-gray-500  text-base '>Topic For Youth: {items.content.topic_for_youth} </Text>
         <Text className=' font-semibold text-gray-500  text-base '>Topic For Intermediate: {items.content.topic_for_intermediate}</Text>
         <Text className=' font-semibold text-gray-500 pb-5  text-base '>Lesson Scriptures:{items.content.lesson_scriptures}</Text>
         </View>
    
         <View className=' w-5/6 h-32 border-solid border-2 border-[#44A1A0] mx-auto justify-between items-center'>
         <Text className=' -m-6 bg-white p-3 font-extrabold text-xl'>MEMORY VERSE</Text>
         <Text className=' text-center text-base font-semibold'>{items.content.memory_verse} <Text className=' font-extrabold py-2'>{items.content.memoryVerse_bible_passage} </Text></Text>
         </View>
        
         <View className=' w-full flex flex-col justify-center items-center mt-10 gap-2 mx-auto'>
    
         <Text className=' font-extrabold text-xl py-5'>DAILY DEVOTIONAL READING</Text>
    
        {/* <View className=' w-screen   '>
          <Accordion   title="Accordion 1" content="Content for Accordion 1" />
          <Accordion title="Accordion 2" content="Content for Accordion 2" />
          <Accordion title="Accordion 3" content="Content for Accordion 3" />
          <Accordion   title="Accordion 1" content="Content for Accordion 1" />
          <Accordion title="Accordion 2" content="Content for Accordion 2" />
          <Accordion title="Accordion 3" content="Content for Accordion 3" />
        </View> */}
    
         <View className=' w-full bg-black flex flex-col justify-center items-center'>
          <Text className=' text-[#e2cb44] font-bold text-xl py-5'>BACKGROUND</Text>
          <Text className=' text-white text-center p-2 text-base'>{items.content.lesson_background} </Text>
         </View>
          <View className=' w-[98%] bg-black flex flex-col justify-center items-center'> 
      <Text className=' font-bold text-[#f1d742] text-base py-5'>NOTES ON THE LESSON</Text>
      <View>
      {items.content?.lesson_part.map((part) =>(
        
      <Text className=' font-bold text-base text-black py-2 px-3 bg-[#adc11d]'>PART 1:  {part.part1_topic} </Text>,
      <Text className='text-base text-[#f0ebeb] px-5'>{part.part1_para1}</Text>,
      <Text className='text-base text-[#f0ebeb] px-5 py-3'>{part.part1_para2} </Text>,

      <Text className=' font-bold text-base text-black py-2 px-3 bg-[#adc11d]'>PART 2: {part.part2_topic} </Text>,
      <Text className='text-base text-[#f0ebeb] px-5'> {part.part2_para1} </Text>,
      <Text className='text-base text-[#f0ebeb] px-5 py-3'>{part.part2_para2} </Text>,
    
      <Text className=' font-bold text-base text-black py-2 px-3 bg-[#adc11d]'>PART 3: {part.part3_topic} </Text>,
      <Text className='text-base text-[#f0ebeb] px-5'> {part.part3_para1} </Text>,
      <Text className='text-base text-[#f0ebeb] px-5 py-3'>{part.part3_para2} </Text>,

      <Text className=' font-bold text-base text-black py-2 px-3 bg-[#adc11d]'>PART 4: {part.part4_topic} </Text>,
      <Text className='text-base text-[#f0ebeb] px-5'> {part.part4_para1} </Text>,
      <Text className='text-base text-[#f0ebeb] px-5 py-3'>{part.part4_para2} </Text>
       
      ))}
      </View>
      <View className=' w-96 flex flex-col mx-auto mt-5'>
<TouchableOpacity onPress={toggleExpandedmo} className=' w-ful bg-[#00b4d8] my-5 rounded-lg'>
<View className=' w-full h-28 flex justify-center items-center'>
<Text className=' font-extrabold text-2xl text-white'></Text>
<Text className=' text-white font-bold text-xl'>Use Oppotunities Wisely</Text>
<Text className=' text-white text-base font-semibold'>Philem. 1:9-10</Text>
</View>
</TouchableOpacity>

{expandedmo && (
 <View className='bg-gray-200 p-4 rounded mt-2'>
   {/* Content to be displayed when expanded */}
   <Text className='text-gray-800 font-semibold text-lg'>
     Expanded content goes here.
     Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this article.

First we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.
   </Text>
   <Text className=' text-base py-3 font-bold'>Point Of Emphasis:First we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible </Text>
   <Text  className=' text-base py-3 font-bold'>Prayer Point:First we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible </Text>
 </View>
)}
</View>
<View className=' w-96 flex flex-col mx-auto mt-5'>
<TouchableOpacity onPress={toggleExpandedte} className=' w-ful bg-[#00b4d8] my-5 rounded-lg'>
<View className=' w-full h-28 flex justify-center items-center'>
<Text className=' font-extrabold text-2xl text-white'>Monday :02/06/2020</Text>
<Text className=' text-white font-bold text-xl'>Use Oppotunities Wisely</Text>
<Text className=' text-white text-base font-semibold'>Philem. 1:9-10</Text>
</View>
</TouchableOpacity>

{expandedte && (
 <View className='bg-gray-200 p-4 rounded mt-2'>
   {/* Content to be displayed when expanded */}
   <Text className='text-gray-800'>
     Expanded content goes here.
     Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this article.

First we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.
   </Text>
 </View>
)}
</View>
<View className=' w-96 flex flex-col mx-auto mt-5'>
<TouchableOpacity onPress={toggleExpandedwe} className=' w-ful bg-[#00b4d8] my-5 rounded-lg'>
<View className=' w-full h-28 flex justify-center items-center'>
<Text className=' font-extrabold text-2xl text-white'>Monday :02/06/2020</Text>
<Text className=' text-white font-bold text-xl'>Use Oppotunities Wisely</Text>
<Text className=' text-white text-base font-semibold'>Philem. 1:9-10</Text>
</View>
</TouchableOpacity>

{expandedwe && (
 <View className='bg-gray-200 p-4 rounded mt-2'>
   {/* Content to be displayed when expanded */}
   <Text className='text-gray-800'>
     Expanded content goes here.
     Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this article.

First we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.
   </Text>
 </View>
)}
</View>
<View className=' w-96 flex flex-col mx-auto mt-5'>
<TouchableOpacity onPress={toggleExpandedth} className=' w-ful bg-[#00b4d8] my-5 rounded-lg'>
<View className=' w-full h-28 flex justify-center items-center'>
<Text className=' font-extrabold text-2xl text-white'>Monday :02/06/2020</Text>
<Text className=' text-white font-bold text-xl'>Use Oppotunities Wisely</Text>
<Text className=' text-white text-base font-semibold'>Philem. 1:9-10</Text>
</View>
</TouchableOpacity>

{expandedth && (
 <View className='bg-gray-200 p-4 rounded mt-2'>
   {/* Content to be displayed when expanded */}
   <Text className='text-gray-800'>
     Expanded content goes here.
     Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this article.

First we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.
   </Text>
 </View>
)}
</View>
<View className=' w-96 flex flex-col mx-auto mt-5'>
<TouchableOpacity onPress={toggleExpandedfr} className=' w-ful bg-[#00b4d8] my-5 rounded-lg'>
<View className=' w-full h-28 flex justify-center items-center'>
<Text className=' font-extrabold text-2xl text-white'>Monday :02/06/2020</Text>
<Text className=' text-white font-bold text-xl'>Use Oppotunities Wisely</Text>
<Text className=' text-white text-base font-semibold'>Philem. 1:9-10</Text>
</View>
</TouchableOpacity>

{expandedfr && (
 <View className='bg-gray-200 p-4 rounded mt-2'>
   {/* Content to be displayed when expanded */}
   <Text className='text-gray-800'>
     Expanded content goes here.
     Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this article.

First we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.
   </Text>
 </View>
)}
</View>
<View className=' w-96 flex flex-col mx-auto mt-5'>
<TouchableOpacity onPress={toggleExpandedsa} className=' w-ful bg-[#00b4d8] my-5 rounded-lg'>
<View className=' w-full h-28 flex justify-center items-center'>
<Text className=' font-extrabold text-2xl text-white'>Monday :02/06/2020</Text>
<Text className=' text-white font-bold text-xl'>Use Oppotunities Wisely</Text>
<Text className=' text-white text-base font-semibold'>Philem. 1:9-10</Text>
</View>
</TouchableOpacity>

{expandedsa && (
 <View className='bg-gray-200 p-4 rounded mt-2'>
   {/* Content to be displayed when expanded */}
   <Text className='text-gray-800'>
     Expanded content goes here.
     Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this article.

First we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.
   </Text>
 </View>
)}
</View>
<View className=' w-96 flex flex-col mx-auto mt-5'>
<TouchableOpacity onPress={toggleExpandedsun} className=' w-ful bg-[#00b4d8] my-5 rounded-lg'>
<View className=' w-full h-28 flex justify-center items-center'>
<Text className=' font-extrabold text-2xl text-white'>Monday :02/06/2020</Text>
<Text className=' text-white font-bold text-xl'>Use Oppotunities Wisely</Text>
<Text className=' text-white text-base font-semibold'>Philem. 1:9-10</Text>
</View>
</TouchableOpacity>

{expandedsun && (
 <View className='bg-gray-200 p-4 rounded mt-2'>
   {/* Content to be displayed when expanded */}
   <Text className='text-gray-800'>
     Expanded content goes here.
     Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this article.

First we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.
   </Text>
 </View>
)}
</View>
            </View>
            <View className=' w-full  bg-black flex flex-col justify-center items-center'>
          <Text className=' text-[#e2cb44] font-bold text-xl py-5'>CONCLUSION</Text>
          <Text className=' text-white text-center p-2 text-base'>{items.content.lesson_conclusion} </Text>
          <Text className=' text-[#e2cb44] font-bold text-xl py-5'>QUESTION</Text>
          <Text className=' text-white text-center p-2 text-base'>1. What was Apostle Paul passionate about in the book of Philemon</Text>
          <Text className=' text-white p-2 text-base text-start'>2. Where did Paul preach to Onesimus?</Text>
          <Text className=' text-white text-center p-2 text-base'>1. What was Apostle Paul passionate about in the book of Philemon</Text>
          <Text className=' text-white p-2 text-base text-start'>2. Where did Paul preach to Onesimus?</Text>
         </View>
         </View>
        
    </View>
  )
}

// import { React,View, } from 'react'






// const LessonPage = ({route}) => {

//  
// console.log(items.title);
//   console.log(items);
//     return (
//      <View>
      
//      </View>
//        )
 
// }


// export default LessonPage;
