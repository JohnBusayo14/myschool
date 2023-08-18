

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Homescreen from './screens/Homescreen';
import SecondPage from './screens/SecondPage';
import Units from './screens/Units';
import { LessonScreen } from './screens/LessonScreen';






const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name= 'FirstPage' component={Homescreen} />
     <Stack.Screen name="SecondPage" component={SecondPage} />
     <Stack.Screen name='LessonScreen' component={LessonScreen}/>
     <Stack.Screen name='Units' component={Units} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


