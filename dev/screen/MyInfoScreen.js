import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import prompt from 'react-native-prompt-android'

export default function MyInfoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.nicknameWrapper}>
        <Text style={styles.nickname}>니뒤에박스조심 </Text>
        <TouchableOpacity
          onPress={() => {
            prompt(
              "닉 변경",
              "닉네임을 입력하세요. \n 신청중인 리그가 있다면 닉네임을 변경할 수 없습니다. \n 타인의 닉네임을 도용할 경우 정책에 의거하여 법적인 조치를 받을 수 있습니다.",
              [
                {
                  text: "취소",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
                {
                  text: "적용",
                  onPress: password => console.log("OK Pressed, password: " + password)
                }
              ],
              "plain-text"
            );
          }}>
          <Icon style={styles.nicknameEditIcon} name="wrench" size={30} color="#4b4b4b" />
        </TouchableOpacity>
      </Text>

      <View style={styles.basicInfoWrapper}>
        <View style={styles.basicInfo}>
          <Image style={styles.imageIcons} source={require('../assets/ranked-emblems/Emblem_Platinum.png')}></Image>
          <Text style={styles.basicInfoText}>플레티넘1</Text>
        </View>

        <View style={styles.basicInfo}>
          <Image style={styles.imageIcons} source={require('../assets/ranked-positions/Position_Plat-Jungle.png')}></Image>
          <Text style={styles.basicInfoText}>주포 : 정글</Text>
        </View>

        <View style={styles.basicInfo}>
          <Image style={styles.imageIcons} source={require('../assets/ranked-positions/Position_Plat-Support.png')}></Image>
          <Text style={styles.basicInfoText}>부포 : 서폿</Text>
        </View>
      </View>

      <View style={styles.matchHistoryWrapper}>
        <Text style={styles.matchHistory}>솔로랭크 : 120승/120패 (50%)</Text>
        <Text style={styles.matchHistory}>자유랭크 : 120승/120패 (50%)</Text>
        <Text style={styles.matchHistory}>리그전적 : 1승/1패 (50%)</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    height: '100%'
  },
  nicknameWrapper: {
    alignSelf: 'center',
    height: 42,
    lineHeight: 42,
    margin: 20
  },
  nickname: {
    fontSize: 42
  },
  nicknameEditIcon: {
    lineHeight: 42
  },
  basicInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%'
  },
  basicInfo: {
    alignItems: 'center',
  },
  imageIcons: {
    width: 50,
    height: 50
  },
  basicInfoText: {
    color: '#4b4b4b',
    fontSize: 12
  },
  matchHistoryWrapper: {
    marginVertical: 20,
    padding: 20
  },
  matchHistory: {
    fontSize: 15,
    marginVertical: 2,
    color: '#3b3b3b'
  }
});
