import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import TeamMemberCard from '../component/TeamMemberCard';

export default function TeamManageScreen({ navigation, route }) {
  const { teamId } = route.params;
  navigation.setOptions({ 
    headerLeft : ()=>{return <TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../assets/images/go_back_button.png')} style={styles.headerLeftStyle }></Image></TouchableOpacity>},
  });
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>고쥬노 화이팅!</Text>
        <View style={styles.tierWrapper}>
          <Image style={styles.tierImage} source={require('../assets/ranked-emblems/Emblem_Platinum.png')}></Image>
          <Text style={styles.tierInfo}>플래티넘2</Text>
        </View>
        
      </View>

      <View>
        <TeamMemberCard></TeamMemberCard>
        <TeamMemberCard></TeamMemberCard>
        <TeamMemberCard></TeamMemberCard>
        <TeamMemberCard></TeamMemberCard>
        <TeamMemberCard></TeamMemberCard>
      </View>
    </View>
  );
}

const styles=StyleSheet.create({
  headerLeftStyle : {
    width:16,
    height:16,
    resizeMode:'contain',
    marginLeft:12
  },
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:5,
    backgroundColor:'#fff'
  },
  titleText: {
    fontSize: 24,
    padding:10
  },
  tierWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  tierImage: {
    width:40,
    height:40,
  },
  tierInfo: {
    color:'#6e6e6e',
    fontSize:12
  }
});
