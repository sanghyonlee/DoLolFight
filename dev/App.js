import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import StackNavigator from './navigator/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';

export default function App() {
  LogBox.ignoreAllLogs();//Ignore all log notifications

  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  );
};
