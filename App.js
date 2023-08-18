

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Homescreen from './screens/Homescreen';
import SecondPage from './screens/SecondPage';
import LessonPage from './screens/LessonPage';
import Units from './screens/Units';




const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name= 'FirstPage' component={Homescreen} />
     <Stack.Screen name="SecondPage" component={SecondPage} />
     <Stack.Screen name='Lesson1' component={LessonPage} />
     <Stack.Screen name='Units' component={Units} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


