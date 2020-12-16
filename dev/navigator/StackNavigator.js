import BottomTabNavigator from './BottomTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import TeamManageScreen from '../screen/TeamManageScreen';
import {
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

const Stack = createStackNavigator();

export default class StackNavigator extends React.Component {

  render() {
    return (
      <Stack.Navigator >
          <Stack.Screen
          name="Main"
          component={BottomTabNavigator}/>

          <Stack.Screen
          options={{
            headerTitle : '팀 관리',
            headerTitleAlign : 'center',
            headerStyle : styles.headerStyle,
            headerTitleStyle : styles.headerTitleStyle,
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
  headerRightStyle : {
    width:16,
    height:16,
    resizeMode:'contain',
    marginRight:12
  },
});
