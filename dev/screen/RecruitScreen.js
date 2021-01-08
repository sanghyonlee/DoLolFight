import React from 'react';
import { Text, Image, StyleSheet, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function RecruitScreen({ navigation }) {
  navigation.setOptions({
    headerLeft: () => { return <TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../assets/images/go_back_button.png')} style={styles.headerLeftStyle}></Image></TouchableOpacity> },
  });
  const list = ['니뒤에박스조심', '엌거기박슨데엨', '고쥬노', '일진김구', '화내시는겁니까'];
  return (
    <ScrollView style={styles.container}>
      {list.map((item, index) => <View style={styles.recruitApplicationList}>
        <Text style={styles.nickname}>{item}</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>영입</Text>
        </TouchableOpacity>
      </View>)
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerLeftStyle: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginLeft: 12
  },
  container: {
    margin: 20
  },
  recruitApplicationList: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    height: 40,
    marginVertical: 10
  },
  nickname: {
    width:150,
    textAlign: 'center'
  },
  actionButton: {
    width: 50,
    height: 15,
    backgroundColor: '#0a0a0a',
    borderRadius: 10,
    alignItems: 'center'
  },
  actionButtonText: {
    color: '#fff'
  }
})
