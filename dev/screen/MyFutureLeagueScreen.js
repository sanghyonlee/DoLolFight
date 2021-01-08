import React from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import TeamCard from '../component/TeamCard';

export default function FutureLeagueListScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <TeamCard navigation={navigation}></TeamCard>
      <TeamCard navigation={navigation}></TeamCard>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // justifyContent:'space-evenly',
    // alignItems:'center'
  }
});
