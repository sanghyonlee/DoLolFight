import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions
} from 'react-native';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getTeamInfo } from '../external/userApis';
import Icon from 'react-native-vector-icons/Ionicons';
// import { TouchableHighlight } from 'react-native-gesture-handler';

export default class TeamCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.height);
    const teaminfo = this.props.teaminfo
    const { navigation } = this.props;
    var tournament_date = new Date(teaminfo.register_id.schedule_id.tournament_datetime)
    tournament_date = make_date_format(tournament_date)
    function make_date_format(date){
      var year = tournament_date.getFullYear();
      var month = tournament_date.getMonth()+1;
      var day = tournament_date.getDate();
      var hour = tournament_date.getHours();
      
      var ampm = null
      if(hour > 12){
        hour=hour-12;
        ampm="오후";
      }else{
        ampm="오전";
      }
      var min = tournament_date.getMinutes();
      min < 10 ? min='0' + min : min = min
      tournament_date = (year + ". " + month + ". " + day + ". " + ampm + " " + hour + ":" + min)
      return tournament_date;
    }
    
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('TeamManageScreen', { teaminfo: teaminfo })
        }}
        
      >
        <View style={[styles.container,{height:this.props.height}]}>
            <View style={{flex:0.1}}></View>
            <View style={styles.firstViewContainer}>
                <Image resizeMode="contain" style={styles.tierImage} source={require('../assets/ranked-emblems/Emblem_Platinum.png')}></Image>
                <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.tierText}>Platinum IV</Text>
            </View>

            <View style={{flex:0.1}}></View>
            <View style={styles.secondViewContainer}>
              <View style={{flex:1}}>
                <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.dateText}>경기 일정 : {tournament_date} </Text>
              </View>
              <View style={styles.teamNameAndLeader}>
                <View style={{flex:1}}>
                  <View style={styles.teamNameView}>
                    <Text style={styles.teamName}>{teaminfo.TeamName}</Text>
                  </View>
                  <View style={{flex:1}}>
                    <Text style={styles.leaderText}>Leader : {teaminfo.Leader}</Text>
                  </View>
                </View>
                <View style={{flex:0.35, alignItems:'center', justifyContent:'center'}}>
                  <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <Icon name="ellipsis-horizontal-circle-outline" size={45} color="rgba(86, 133, 255, 255)"></Icon>
                    <Text adjustsFontSizeToFit={true} numberOfLines={1} style={[styles.detailText]}>상세정보</Text>
                  </View>
                </View>
              </View>
              <View style={{flex:0.25, }}></View>
              
            </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 3,
    "borderColor": "rgba(86, 133, 255, 255)",
    "backgroundColor": "rgba(255, 255, 255, 255)",
    borderRadius: 30,
    marginTop: 8,
  },
  firstViewContainer:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
  },
  secondViewContainer:{
    flex:4,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  tierImage: {
    width: 60,
    height: 70
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  positionImage: {
    width: 24,
    height: 24,
    marginRight: 5
  },
  userName: {
    fontSize: 12,
  },
  teamName:{
    flex:1,
    "fontFamily": "Noto Sans CJK KR",
    "fontWeight": "600",
    "fontSize": 30,
    "color": "rgba(86, 133, 255, 255)",
    marginLeft:5,
  },
  dateText:{
    flex:1,
    "fontFamily": "Noto Sans CJK KR",
    "fontWeight": "600",
    "fontSize": 17,
    "color": "rgba(51, 51, 51, 255)"
  },
  teamNameAndLeader:{
    flex:2.5,
    flexDirection:'row',
    borderColor:'rgba(135, 171, 255, 255)',
    borderLeftWidth:2,
  },
  teamNameView:{
    flex:1.5, 
    justifyContent:'center',
    borderColor:'rgba(135, 171, 255, 255)',
    borderBottomWidth:2,
  },
  leaderText:{
    flex:1,
    "fontFamily": "Noto Sans CJK KR",
    "fontWeight": "600",
    "fontSize": 17,
    "color": "rgba(51, 51, 51, 255)",
    marginLeft:5,
  },
  detailText:{
    fontWeight:"700" , 
    color: "rgba(86, 133, 255, 255)"
  },
  tierText:{
    "fontFamily": "Noto Sans CJK KR",
    "fontWeight": "700",
    color:"rgba(172,172,181,255)"
  }
});
