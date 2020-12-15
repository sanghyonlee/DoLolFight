import { TouchableOpacity, Image, Text, StyleSheet, AsyncStorage } from 'react-native';
import BottomTabNavigator from './BottomTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import TeamManageScreen from '../screen/TeamManageScreen';

const Stack = createStackNavigator();

export default class StackNavigator extends React.Component {

  render(){
    return (
      <Stack.Navigator >
          <Stack.Screen
          name="Main"
          component={BottomTabNavigator} />

          <Stack.Screen
          options={{
            headerTitle : '회원정보',
            headerTitleAlign : 'center',
            headerStyle : styles.headerStyle,
            headerTitleStyle : styles.headerTitleStyle,
            // headerLeft : ()=>{return <TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../assets/images/go_back_button.png')} style={styles.headerLeftStyle }></Image></TouchableOpacity>},
          }}
          name="TeamManageScreen"
          component={TeamManageScreen} />

          
          
      </Stack.Navigator>
    )
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#0c1b31',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    color: "#fff",
    alignSelf: 'center',
  },
  headerLeftStyle : {
    width:16,
    height:16,
    resizeMode:'contain',
    marginLeft:12
  },
  headerRightStyle : {
    width:16,
    height:16,
    resizeMode:'contain',
    marginRight:12
  },
});
