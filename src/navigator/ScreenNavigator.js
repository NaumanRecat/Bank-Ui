import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Signup } from '../screen/Signup';


const Stack = createNativeStackNavigator();

export const ScreenNavigator =()=>  {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Signup" component={Signup}  options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}