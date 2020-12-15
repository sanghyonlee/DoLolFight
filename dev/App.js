import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import StackNavigator from './navigator/StackNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>hello</Text>*/}
      <StackNavigator></StackNavigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex:1,
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center'
  }
});
