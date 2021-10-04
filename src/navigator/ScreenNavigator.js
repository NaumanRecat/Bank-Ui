import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Signup } from '../screen/Signup';
import { Welcome } from '../screen/Welcome';
import {Signup4} from '../screen/Signup4';
import { Signup5 } from '../screen/Signup5';
import { Signup6 } from '../screen/Signup6';
import { Signup2 } from '../screen/Signup2';
import { Signup3 } from '../screen/Signup3';
import { Signup7 } from '../screen/Signup7';
import { Signup7_3 } from '../screen/Signup7_3';
import { Signup7_0} from '../screen/Signup7_0';
import { Signup7_5} from '../screen/Signup7_5';
import { Signup1} from '../screen/Signup1';
import { Signup8} from '../screen/Signup8';


const Stack = createNativeStackNavigator();

export const ScreenNavigator =()=>  {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Signup8" component={Signup8}  options={{headerShown:false}} />
      <Stack.Screen name="Signup1" component={Signup1}  options={{headerShown:false}} />
      <Stack.Screen name="Signup7_5" component={Signup7_5}  options={{headerShown:false}} />
      <Stack.Screen name="Signup7_0" component={Signup7_0}  options={{headerShown:false}} />
      <Stack.Screen name="Signup7_3" component={Signup7_3}  options={{headerShown:false}} />
      <Stack.Screen name="Signup7" component={Signup7}  options={{headerShown:false}} />
      <Stack.Screen name="Signup3" component={Signup3}  options={{headerShown:false}} />
      <Stack.Screen name="Signup2" component={Signup2}  options={{headerShown:false}} />
      <Stack.Screen name="Signup6" component={Signup6}  options={{headerShown:false}} />
      <Stack.Screen name="Signup5" component={Signup5}  options={{headerShown:false}} />
      <Stack.Screen name="Signup4" component={Signup4}  options={{headerShown:false}} />
      <Stack.Screen name="Welcome" component={Welcome}  options={{headerShown:false}} />
      <Stack.Screen name="Signup" component={Signup}  options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}