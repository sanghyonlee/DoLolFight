import TeamListScreen from '../screen/TeamListScreen';
import LeagueScreen from '../screen/LeagueScreen';
import React from 'react';
import {
  Text,
} from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const BottomTab = createMaterialBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
    // initialRouteName={INITIAL_ROUTE_NAME}
    // barStyle={styles.tabBarStyle}
    tabBarPosition='top'>

      <BottomTab.Screen
      name="LeagueScreen"
      component={LeagueScreen}
      options={{
        title:'리그',
        tabBarIcons: ()=> {
          return <Text>hhi</Text>
        }
      }}
      />

      <BottomTab.Screen name="TeamListScreen" component={TeamListScreen} />
    </BottomTab.Navigator>
  );
}
