import BottomTabNavigator from './BottomTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import TeamManageScreen from '../screen/TeamManageScreen';
import {
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import RecruitScreen from '../screen/RecruitScreen';
import { Dimensions } from 'react-native';
import { HeaderTitle } from './../component/HeaderTitle';
const Stack = createStackNavigator();
const windowHeight = Dimensions.get('window').height;
export default class StackNavigator extends React.Component {

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="내 리그"
          component={BottomTabNavigator} />

        <Stack.Screen
          options={{
            headerTitle: ()=> <HeaderTitle title="팀 관리"/>,
            headerStyle:{height:windowHeight/13}
          }}
          name="TeamManageScreen"
          component={TeamManageScreen} />

        <Stack.Screen
          options={{
            headerTitle: ()=> <HeaderTitle title="팀 영입"/>,
            headerStyle:{height:windowHeight/13}
          }}
          name="RecruitScreen"
          component={RecruitScreen} />

      </Stack.Navigator>
    )
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#FFF',
  },
  headerTitleStyle: {
    fontFamily:"Noto Sans CJK KR",
    fontWeight: "700",
    color: "rgba(86, 133, 255, 255)",
    alignSelf: 'center',
    justifyContent:'center'
  },
});
