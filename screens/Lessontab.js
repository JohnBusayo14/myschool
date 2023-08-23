import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { LessonContent } from './LessonContent';
import { Daily } from './Daily';

const Tab = createMaterialBottomTabNavigator();

export const Lessontab = ({route}) => {
  const {items} = route.params;
  console.log(items);

    return (

         <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: '#255f85' }}
    >
      
           <Tab.Screen
       name="LessonContent"
           component={LessonContent}
           onPress={()=> navigation.navigate('Lessontab',{item: items})}
           initialParams={{ item: items }}
        options={{
          tabBarLabel: 'Lesson Content',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book" color={color} size={26} />
          ),
        }}
      />
          <Tab.Screen name="DailyReading" component={Daily}
          onPress={()=> navigation.navigate('Lessontab',{item: items})}
          initialParams={{ item: items }}
           options={{
          tabBarLabel: 'Daily Reading',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="lightbulb" color={color} size={26} />
          ),
        }} />
        </Tab.Navigator>
      );
}
