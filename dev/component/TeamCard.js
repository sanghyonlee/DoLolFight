import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
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
          <Text style={styles.LegueTime}>
            경기 일자 : { new Date('2020-01-01T20:00').toLocaleString()}
          </Text>
          
          <View>
            <Text>고쥬노 화이팅</Text>
          </View>

          <Image style={styles.tierImage} source={require('../assets/ranked-emblems/Emblem_Platinum.png')}></Image>
          
          <View>
            <View style={styles.userInfo}>
              <Image style={styles.positionImage} source={require('../assets/ranked-positions/Position_Grandmaster-Top.png')}></Image>
              <Text style={styles.userName}>다리우스 삼촌</Text>
            </View>
            <View style={styles.userInfo}>
              <Image style={styles.positionImage} source={require('../assets/ranked-positions/Position_Plat-Jungle.png')}></Image>
              <Text style={styles.userName}>엌거기박슨데엨</Text>
            </View>
            <View style={styles.userInfo}>
              <Image style={styles.positionImage} source={require('../assets/ranked-positions/Position_Plat-Mid.png')}></Image>
              <Text style={styles.userName}>화내시는겁니까</Text>
            </View>
            <View style={styles.userInfo}>
              <Image style={styles.positionImage} source={require('../assets/ranked-positions/Position_Diamond-Bot.png')}></Image>
              <Text style={styles.userName}>일진김구</Text>
            </View>
            <View style={styles.userInfo}>
              <Image style={styles.positionImage} source={require('../assets/ranked-positions/Position_Diamond-Support.png')}></Image>
              <Text style={styles.userName}>고쥬노</Text>
            </View>
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
    borderWidth:1,
    borderColor:'#6e6e6e',
    borderRadius: 30,
    marginVertical:10,
    marginHorizontal:5
  },
  LegueTime: {
    position: 'absolute',
    top:5,
  },
  tierImage: {
    width:48,
    height:48
  },
  userInfo: {
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center'
  },
  positionImage: {
    width:24,
    height:24,
    marginRight:5
  },
  userName: {
    fontSize:12,
  }
});
