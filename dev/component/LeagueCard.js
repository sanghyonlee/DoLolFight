import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function LeagueCard() {
  return (
    <View style={styles.container}>
      <View style={styles.timeWrapper}>
        <Text>2021-01-30</Text>
        <Text>06:00 pm</Text>
      </View>

      <View style={styles.leagueRound}>
        <Text style={styles.leagueRoundText}>32강</Text>
      </View>

      <View style={styles.registeredTeamNumber}>
        <Text style={styles.registeredTeamNumberText}>
          201팀 신청 완료
        </Text>
      </View>

      <View style={styles.registerButtonWrapper}>
        <TouchableOpacity
          onPress={()=>{

          }}>
          <Text style={styles.registerButtonText}>신청</Text>
        </TouchableOpacity>
      </View>
        
      
      
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    alignItems:'center',
    // justifyContent:'center',
    padding:10,
    borderWidth:1,
    borderColor:'#6e6e6e',
    borderRadius:10,
    marginVertical:10
  },
  timeWrapper: {
    flex:2,
    alignItems:'center'
  },
  leagueRound: {
    flex:1
  },
  leagueRoundText: {
    textAlign:'center'
  },
  registeredTeamNumber: {
    flex:3
  },
  registeredTeamNumberText: {
    textAlign:'center'
  },
  registerButtonWrapper: {
    flex:1
  },
  registerButtonText: {
    textAlign:'center',
    fontSize:12,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'#6e6e6e',
    borderRadius:10,
    padding:2
  }

});
