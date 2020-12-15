import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Image, Alert, Text, TouchableOpacity, StyleSheet} from 'react-native';
import TeamListScreen from '../screen/TeamListScreen';
import LeagueScreen from '../screen/LeagueScreen';

const BottomTab = createMaterialBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';
const style = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#0c1b31',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    color: "#fff",
    alignSelf: 'center',
  },
  tabBarStyle : {
    backgroundColor : "#fff"
  },
  iconStyle : {width:20, height:20},
  logoImg : {width:105, height:25},
  headerLeftStyle : {width:16, height:16,resizeMode:'contain',marginLeft:14},
  headerRightImgStyle : {width:26, height:26,resizeMode:'contain',marginRight:14}
});

export default function BottomTabNavigator({navigation, route}) {
  navigation.setOptions({ 
    title: getHeaderTitle(route),
    headerStyle: style.headerStyle,
    headerTitleStyle: style.headerTitleStyle,
    headerVisible : true,
    headerRight :()=>getHeaderRight(navigation,route)
  });

  return (
    <BottomTab.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME}
      barStyle={style.tabBarStyle}
      tabBarPosition='top'
      >

      <BottomTab.Screen
        name="LeagueScreen"
        component={LeagueScreen}
        options={{
          title: '대회',
          tabBarIcon: () => {
            return <View>대회</View>
            // return <Image source={require('../assets/images/bt_nv_home.png')} style={style.iconStyle}/>;
          },
        }}
      />

      <BottomTab.Screen
        name="TeamListScreen"
        component={TeamListScreen}
        options={{
          title: '팀',
          tabBarIcon: () => {
            return <View>팀</View>
            // return <Image source={require('../assets/images/bt_nv_home.png')} style={style.iconStyle}/>;
          },
        }}
      />

    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'LeagueScreen':
      return '대회'
    case 'TeamListScreen':
      return '팀';
  }
}

function getHeaderRight(navigation,route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return <Text></Text>;
    case 'RoomList':
      return <TouchableOpacity onPress={() => {navigation.navigate('RoomFilterScreen'); navigation.closeDrawer();}}></TouchableOpacity>;
    case 'PromotionList':
      return <TouchableOpacity onPress={() => {navigation.navigate('PromotionFilterScreen'); navigation.closeDrawer();}}></TouchableOpacity>;
    case 'Help':
      return <Text></Text>;
  }
}
