import MyLeagueScreen from '../screen/MyLeagueScreen';
import LeagueListScreen from '../screen/LeagueListScreen';
import React from 'react';
import {
  Alert,
  StyleSheet, Text,
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyInfoScreen from '../screen/MyInfoScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TabBarCustom from './TabBarCustom';

const Tab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'LeagueScreen';

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({
    title: getHeaderTitle(route),
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerTitleStyle,
    headerVisible: true,
    headerRight: () => getHeaderRight(navigation, route)
  });

  return (
    <Tab.Navigator
      tabBar={props => <TabBarCustom {...props} />}
    >

      <Tab.Screen
        name="MyLeagueScreen"
        component={MyLeagueScreen}
        options={{
          title: '내 리그',
        }}
      />

      <Tab.Screen
        name="LeagueListScreen"
        component={LeagueListScreen}
        options={{
          title: '대회',
        }}
      />

      <Tab.Screen
        name="MyInfo"
        component={MyInfoScreen}
        options={{
          title: '내 정보',
        }}
      />

    </Tab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'LeagueListScreen':
      return '대회 목록';
    case 'MyLeagueScreen':
      return '내 리그';
    case 'MyInfo':
      return '내 정보';
  }
}

function getHeaderRight(navigation, route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'MyLeagueScreen':
      return <TouchableOpacity
        style={styles.headerRightStyle}
        onPress={() => {
          Alert.prompt(
            "팀 가입",
            "팀장으로부터 받은 team key 를 입력하세요.",
            [
              {
                text: "취소",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              {
                text: "가입",
                onPress: password => console.log("OK Pressed, password: " + password)
              }
            ],
            "plain-text"
          );
        }}>
        <Text style={styles.headerRightTextStyle}>팀가입</Text>
      </TouchableOpacity>;

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
  tabBarStyle: {
    backgroundColor: '#fff'
  },
  iconStyle: {
    width: 24,
    height: 24
  },
  headerLeftStyle: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginLeft: 20
  },
  headerRightStyle: {
    width: 40,
    height: 26,
    resizeMode: 'contain',
    marginRight: 10
  },
  headerRightTextStyle: {
    color: 'white'
  }
});
