import { NavigationContainer } from '@react-navigation/native';
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

export default class TeamMemberCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.position}>TOP</Text>
        <View style={styles.infos}>
          <Text>다리우스 삼촌</Text>
          <Text>다이아4</Text>
        </View>
        <Text style={styles.point}>100</Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    height:100,
    backgroundColor:'#aaa',
    borderRadius: 30,
    marginVertical:10,
    marginHorizontal:5,
    padding:10,
  },
  position: {
    fontSize:18,
    flex:2,
    textAlign: 'center'
  },
  infos: {
    flex:5,
  },
  point: {
    flex:2,
    textAlign: 'center'
  }
});
