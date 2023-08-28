import { View,Text,ImageBackground,Image } from 'react-native'
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

<ImageBackground  source={require('../assets/kidss.jpg')} className='w-[90%] m-auto rounded-lg h-[250px] flex flex-row mb-5 flex-1 items-center justify-center bg-cover'>  
<View>
<Text className=' text-3xl font-bold text-white'>Children</Text>
<View className=' w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#fca311]'>
<MaterialCommunityIcons name="arrow-right" size={50} color='white'  onPress={() => navigation.navigate('SecondPage')} />
</View>
</View>
</ImageBackground>

<ImageBackground  source={require('../assets/interm.jpg')} className='w-[90%] m-auto rounded-lg h-[250px] flex flex-row mb-5 flex-1 items-center justify-center bg-cover'>  
<View>
<Text className=' text-3xl font-bold text-white'>Intermediate</Text>
<View className=' w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#fca311]'>
<MaterialCommunityIcons name="arrow-right" size={50} color='white'  onPress={() => navigation.navigate('Intermediate')} />
</View>
</View>
</ImageBackground>

<ImageBackground  source={require('../assets/youth2.jpg')} className='w-[90%] m-auto rounded-lg h-[250px] flex flex-row mb-5 flex-1 items-center justify-center bg-cover'>  
<View>
<Text className=' text-3xl font-bold text-white'>Youth English</Text>
<View className=' w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#fca311]'>
<MaterialCommunityIcons name="arrow-right" size={50} color='white'  onPress={() => navigation.navigate('Intermediate')} />
</View>
</View>
</ImageBackground>

<ImageBackground  source={require('../assets/youth2.jpg')} className='w-[90%] m-auto rounded-lg h-[250px] flex flex-row mb-5 flex-1 items-center justify-center bg-cover'>  
<View>
<Text className=' text-3xl font-bold text-white'>Intermediate</Text>
<View className=' w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#fca311]'>
<MaterialCommunityIcons name="arrow-right" size={50} color='white'  onPress={() => navigation.navigate('Intermediate')} />
</View>
</View>
</ImageBackground>




<ImageBackground  source={require('../assets/adult2.jpg')} className='w-[90%] m-auto rounded-lg h-[250px] flex flex-row mb-5 flex-1 items-center justify-center bg-cover'>  
<View>
<Text className=' text-3xl font-bold text-white'>Intermediate</Text>
<View className=' w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#fca311]'>
<MaterialCommunityIcons name="arrow-right" size={50} color='white'  onPress={() => navigation.navigate('Intermediate')} />
</View>
</View>
</ImageBackground>

<ImageBackground  source={require('../assets/adult2.jpg')} className='w-[90%] m-auto rounded-lg h-[250px] flex flex-row mb-5 flex-1 items-center justify-center bg-cover'>  
<View>
<Text className=' text-3xl font-bold text-white'>Intermediate</Text>
<View className=' w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#fca311]'>
<MaterialCommunityIcons name="arrow-right" size={50} color='white'  onPress={() => navigation.navigate('Intermediate')} />
</View>
</View>
</ImageBackground>

    </ScrollView>
   </SafeAreaView>
   
  )

  
}
