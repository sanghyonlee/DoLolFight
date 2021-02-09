import React from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import LeagueCard from '../component/LeagueCard';


export default function LeagueScreen() {
  return (
    <ScrollView style={styles.container}>
      <LeagueCard></LeagueCard>
      <LeagueCard></LeagueCard>
      <LeagueCard></LeagueCard>
      <LeagueCard></LeagueCard>
      <LeagueCard></LeagueCard>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20
  }
});
