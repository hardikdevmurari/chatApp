/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import LoginScreen from './src/screen/loginScreen';
import SignUpScreen from './src/screen/signUpScreen';
import Home from './src/screen/home';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import ChatScreen from './src/screen/chat';

const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#3F7EFF'} barStyle={'light-content'} />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{title: 'Sign Up', headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Home', headerShown: false}}
        />
         <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{title: 'ChatScreen', headerShown: false}}
        />
      </Stack.Navigator>
      {/* <LoginScreen /> */}
      {/* <SignUpScreen /> */}
    </NavigationContainer>
  );
}
export default App;
