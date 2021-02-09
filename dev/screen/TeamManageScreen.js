import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import TeamMemberCard from '../component/TeamMemberCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { get_future_Team } from '../redux/sagas/team';

export default function TeamManageScreen({ navigation, route }) {
  const [team,userInfo] = useSelector((store)=> [store.team, store.userInfo])
  const dispatch  = useDispatch()

  const { teaminfo } = route.params;
  const team_id = teaminfo.team_id
  let tournament_date = null;
  let list = make_list();
  var leader = null;
  function make_date_format(date){
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var hour = date.getHours();
    var ampm = null
    if(hour > 12){
      hour=hour-12;
      ampm="오후";
    }else{
      ampm="오전";
    }
    var min = date.getMinutes();
    min < 10 ? min='0' + min : min = min
    date = (year + ". " + month + ". " + day + ". " + ampm + " " + hour + ":" + min)
    return date;
  }
  function make_list(){
      var ret_list = []
      for(i=0; i<team.FUTURE_TEAM.data.length; i++){
        if(team_id == team.FUTURE_TEAM.data[i]["team_id"]){
          leader = team.FUTURE_TEAM.data[i].Leader
          tournament_date = make_date_format(new Date(team.FUTURE_TEAM.data[i].register_id.schedule_id.tournament_datetime));
          
          ret_list.push(team.FUTURE_TEAM.data[i].topuser);
          ret_list.push(team.FUTURE_TEAM.data[i].juguser);
          ret_list.push(team.FUTURE_TEAM.data[i].miduser);
          ret_list.push(team.FUTURE_TEAM.data[i].adcuser);
          ret_list.push(team.FUTURE_TEAM.data[i].supuser);
          return ret_list;
        }
      }
      for(i=0; i< team.PAST_TEAM.data.length; i++){
        if(team_id == team.PAST_TEAM.data[i]["team_id"]){
          leader = team.PAST_TEAM.data[i].Leader
          tournament_date = make_date_format(new Date(team.PAST_TEAM.data[i].register_id.schedule_id.tournament_datetime));
          ret_list.push(team.PAST_TEAM.data[i].topuser);
          ret_list.push(team.PAST_TEAM.data[i].juguser);
          ret_list.push(team.PAST_TEAM.data[i].miduser);
          ret_list.push(team.PAST_TEAM.data[i].adcuser);
          ret_list.push(team.PAST_TEAM.data[i].supuser);
          return ret_list;
        }
      }
  }

  function sort_list(list){
    
    var new_list = list.filter((value)=>{
      return value != null;
    })

    for(; new_list.length < 5; ){
      new_list.push(null)
    }

    return new_list;
  }

  navigation.setOptions({
    headerRight: () =>{ return <View></View>}
  });
  const teamMemberReturn = ()=>{
    list = sort_list(list);
    let teamMemberCard = list.map((value, key)=>{
      var leader_bool = null
      leader == value? leader_bool=true: leader_bool=false
      return <TeamMemberCard navigation={navigation} user={value} leader={leader_bool}></TeamMemberCard>
    })
    return teamMemberCard;
  }
  return (
      <View style={styles.container}>
        <View style={{flex:1.5,}}>
          <Text style={{color:'#000'}}>{tournament_date}</Text>
        </View>
        {teamMemberReturn()}
      </View>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    backgroundColor: '#fff'
  },
  titleText: {
    fontSize: 24,
    padding: 10
  },
  tierWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  tierImage: {
    width: 40,
    height: 40,
  },
  tierInfo: {
    color: '#6e6e6e',
    fontSize: 12
  }
});
