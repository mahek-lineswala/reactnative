import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutUsScreen from '../screens/AboutUsScreen';
import HomeScreen from '../screens/HomeScreen';

export type RootStackParamList = {
  Home: undefined;
  AboutUs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Book Store' }}
      />
      <Stack.Screen
        name="AboutUs"
        component={AboutUsScreen}
        options={{ title: 'About us' }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
