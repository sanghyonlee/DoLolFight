import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function MyInfoScreen() {
  return (
    <View style={styles.container}>
      <Text>니뒤에박스조심</Text>
      <Text>플레티넘1</Text>
      <Image source={require('../assets/ranked-emblems/Emblem_Platinum.png')}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'flex-start',
    alignItems: 'center'
  }
});
