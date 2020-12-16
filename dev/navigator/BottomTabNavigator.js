import TeamListScreen from '../screen/TeamListScreen';
import LeagueScreen from '../screen/LeagueScreen';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BottomTab = createMaterialBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'LeagueScreen';

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ 
    title: getHeaderTitle(route),
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerTitleStyle,
    headerVisible : true,
    headerRight :()=>getHeaderRight(navigation,route)
  });

  return (
    <BottomTab.Navigator
    initialRouteName={INITIAL_ROUTE_NAME}
    barStyle={styles.tabBarStyle}
    >

      <BottomTab.Screen
      name="LeagueScreen"
      component={LeagueScreen}
      options={{
        title: '대회',
        tabBarIcon: () => {
          return <Image source={require('../assets/images/bt_nv_home.png')} style={styles.iconStyle}/>;
        },
      }}/>

      <BottomTab.Screen
      name="TeamListScreen"
      component={TeamListScreen}
      options={{
        title: '팀',
        tabBarIcon: () => {
          return <Image source={require('../assets/images/bt_nv_home.png')} style={styles.iconStyle}/>;
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
      return '리그';
    case 'TeamListScreen':
      return '팀 리스트';
  }
}

function getHeaderRight(navigation,route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'LeagueScreen':
      return <TouchableOpacity style={styles.headerLeftStyle} onPress={()=>{navigation.navigate('TeamManageScreen')}}><Text>as</Text></TouchableOpacity>;
    case 'TeamListScreen':
      return <View style={styles.headerRightStyle}><Text>vs</Text></View>;
    
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
  tabBarStyle : {
    backgroundColor : "#fff"
  },
  iconStyle : {width:20, height:20},
  // logoImg : {width:105, height:25},
  headerLeftStyle : {width:16, height:16,resizeMode:'contain',marginLeft:20},
  headerRightStyle : {width:26, height:26,resizeMode:'contain',marginRight:20}
});
