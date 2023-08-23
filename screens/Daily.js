import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';


 
   
export const Daily = ({route}) => {
  const {items} = route.params;
  console.log(items);
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

    <SafeAreaView>
       <ScrollView>
     <View>
     {
  items.content?.map( 
     (unit, index) => {
      return (
    <TouchableOpacity key={index} onPress={() => navigation.navigate('Units',{unit})} className=' w-96 h-44 flex flex-col  bg-[#255f85]  rounded-md justify-center items-center align-middle shadow-2xl' >
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
    </TouchableOpacity> )
})
}
     </View>
       </ScrollView>

    </SafeAreaView>
    
 
  )
}
