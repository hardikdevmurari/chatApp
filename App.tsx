/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import LoginScreen from './src/screen/loginScreen';
import SignUpScreen from './src/screen/signUpScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
    <NavigationContainer>
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
      </Stack.Navigator>
      {/* <LoginScreen /> */}
      {/* <SignUpScreen /> */}
    </NavigationContainer>
  );
}
export default App;
