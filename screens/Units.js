import { View,Text,Image,ScrollView,TouchableOpacity } from 'react-native';
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Units = ({navigation,route}) => {

const {unit} = route.params;


  return (
    <View className=' w-full h-full bg-[#000000] flex flex-col justify-start items-center'>

<View className=' w-full h-14 flex flex-row items-center pl-2 pt-6 '>
<MaterialCommunityIcons name="arrow-left" size={30} color='#fb8500'onPress={() => navigation.goBack()} />
</View>

       <Image className=' w-full h-40 my-10' source = {require('../assets/unitimage.jpeg')} /> 
      <Text className=' text-white text-xl font-extrabold'>{unit.units.title}</Text>
      <Text className=' text-white text-sm py-3'>{unit.units.description}</Text>
      <ScrollView horizontal={true} className='w-full h-1/2 flex flex-row gap-5'>
{
  unit.units.lessons.map((item,index) =>{
    return(
      <TouchableOpacity key={index}  onPress={()=> navigation.navigate('Lessontab',{items: item})}  className=' w-80 h-[90%] bg-[#415a77] rounded-md flex flex-col items-center'>
        <Text className=' font-bold text-3xl py-5 text-white'>{item.title}</Text>
        <Text className=' font-extrabold text-3xl text-white py-3'>{item.topic}</Text>
        <Text className=' text-white'>{item.date}</Text>
      </TouchableOpacity>
    )
  })
}

</ScrollView>
    </View>
   
    // <View className=' w-screen h-2/3 flex flex-col gap-5 align-middle items-center'>

    // {
    //   units?.map( 
    //      (unit, index) => {
    //       return (
    //     <TouchableOpacity key={index} onPress={()=>toggleModal(unit)} className=' w-10/12 h-44 flex flex-col  bg-black  rounded-md justify-center items-center align-middle shadow-2xl' >
    // <Text className=' font-extrabold text-2xl italic text-white py-5'>{unit.units.title}</Text>
    // <Text className=' font-extrabold text-lg text-white'>{unit.units.description}</Text>
    
    // <Modal 
    // isVisible={isModalVisible}
    // testID={'modal'}
    // backdropColor="#ffff"
    // backdropOpacity={0.8}
    // animationIn="zoomInDown"
    // animationOut="zoomOutUp"
    // animationInTiming={600}
    // animationOutTiming={600}
    // backdropTransitionInTiming={600}
    // backdropTransitionOutTiming={600}>
    
    //   <TouchableOpacity className=' w-auto  rounded-md shadow-2xl  bg-[#6096BA] flex flex-col justify-center items-center' >
    //   <Text className=' font-extrabold text-2xl pb-5 text-white'>{unit.units.description}</Text>
    //    {
    //     unit.units?.lessons.map((item,index) =>
        
    //     {
    //       return(
    //         <View className=' w-full flex flex-row justify-center items-center gap-5' key={index} >
    //         <Text className=' font-bold text-sm py-5  '>{item.date}</Text>
    //         <Text className=' font-bold text-sm py-5 leading-5  '  onPress={() => navigation.navigate('Lesson1', {
    //            items: item
    //         })}>{item.topic}
    //         </Text>
          
          
    //       </View>
    
    //       )
    //     }
         
    //    )
    //    }
      
    //   <TouchableOpacity onPress={toggleModal} className=' w-32 h-12 bg-red-400 rounded-sm my-10 flex flex-row justify-center items-center'>
    //   <Text className=' font-extrabold text-base text-center'>Close</Text>
    // </TouchableOpacity>
    //   </TouchableOpacity>
    // </Modal>
    
    // </TouchableOpacity> )
    // })
    // }
    
    
    
    //  </View>



  )
}

export default Units;