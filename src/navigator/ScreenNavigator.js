import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Signup } from '../screen/Signup';
import { Welcome } from '../screen/Welcome';
import {Signup4} from '../screen/Signup4';
import { Signup5 } from '../screen/Signup5';


const Stack = createNativeStackNavigator();

export const ScreenNavigator =()=>  {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Signup5" component={Signup5}  options={{headerShown:false}} />
      <Stack.Screen name="Signup4" component={Signup4}  options={{headerShown:false}} />
      <Stack.Screen name="Welcome" component={Welcome}  options={{headerShown:false}} />
      <Stack.Screen name="Signup" component={Signup}  options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}