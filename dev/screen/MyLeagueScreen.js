import React from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import TeamCard from '../component/TeamCard';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PastListScreen from './MyPastLeagueScreen';
import FutureListScreen from './MyFutureLeagueScreen';
import TabBarCustomLeague from './../navigator/TabBarCustomLeague';


const Tab = createMaterialTopTabNavigator();

export default function LeagueListScreen({ navigation }) {
  return (
    <Tab.Navigator
      tabBar={props => <TabBarCustomLeague {...props} />}
    >

      <Tab.Screen
        name="FutureLeague"
        component={FutureListScreen}
        options={{
          title: '현재 리그',
        }} />

      <Tab.Screen
        name="PastLeague"
        component={PastListScreen}
        options={{
          title: '과거 리그',
        }} />

    </Tab.Navigator>
    
  );
}

const styles = StyleSheet.create({
  container: {
    // justifyContent:'space-evenly',
    // alignItems:'center'
  }
});
