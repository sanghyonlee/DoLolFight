import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
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
      this.props == undefined ?
        <View style={styles.container}>
          <View style={styles.tierWrapper}>
            <Image style={styles.tierImage} source={require('../assets/ranked-emblems/Emblem_Grandmaster.png')} />
            <Text style={styles.tierText}>그랜드마스터</Text>
          </View>

          <View style={styles.infos}>
            <Text style={styles.nickname}>다리우스 삼촌</Text>
            <View style={styles.positionWrapper}>
              <Image style={styles.positionImage} source={require('../assets/ranked-positions/Position_Grandmaster-Top.png')} />
              <Text style={styles.positionText}>TOP</Text>
            </View>
          </View>

          <View style={styles.actionsWrapper}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>변경</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>정보</Text>
            </TouchableOpacity>
          </View>
        </View>
        :
        <View style={styles.container}>
          <Text>팀원을 영입하세요.</Text>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => {
              navigation.navigate('RecruitScreen');
            }}>
            <Text style={styles.actionButtonText}>영입</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  headerLeftStyle: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginLeft: 12
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 100,
    borderWidth: 2,
    borderColor: '#6e6e6e',
    borderRadius: 30,
    marginVertical: 10,
    marginHorizontal: 5,
    padding: 10,
  },
  tierWrapper: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  tierImage: {
    width: 48,
    height: 48,
    marginBottom: 5
  },
  tierText: {
    fontSize: 12,
  },
  infos: {
    flex: 5,
  },
  nickname: {
    fontSize: 16
  },
  positionWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  positionImage: {
    width: 16,
    height: 16,
    marginRight: 5
  },
  positionText: {
    fontSize: 14
  },
  actionsWrapper: {
    flex: 1
  },
  actionButton: {
    borderWidth: 1,
    backgroundColor: '#101010',
    borderColor: '#101010',
    borderRadius: 5,
    alignItems: 'center',
    margin: 2,
    width: 50,
    height: 15
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 12
  }
});
