import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { TouchableHighlight } from 'react-native-gesture-handler';

export default class TeamCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    return (
      <TouchableOpacity
      onPress={() => {
        navigation.navigate('TeamManageScreen',{teamId : 1})
      }}
      >
        <View style={styles.container}>
          <View>
            <Text>고쥬노 화이팅</Text>
          </View>
          <View>
              <Text>Top : 다리우스 삼촌</Text>
              <Text>Jug : 엌거거박슨데엨</Text>
              <Text>Mid : 화내시는겁니까</Text>
              <Text>Adc : 원딜꺼야</Text>
              <Text>Sup : 고쥬노</Text>
            </View>
          <View>
            <Text>점수 : 100</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    height:200,
    backgroundColor:'#aaa',
    borderRadius: 30,
    marginVertical:10,
    marginHorizontal:5
  }
});
