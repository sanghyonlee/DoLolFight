import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import StackNavigator from './navigator/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container : {
    // flex:1,
    // alignContent:'center',
    // justifyContent:'center',
    // alignItems:'center'
  }
});
