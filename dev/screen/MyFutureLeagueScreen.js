import React from 'react';
import {
  StyleSheet,
  ScrollView,
  RefreshControl,
  View
} from 'react-native';
import TeamCard from '../component/TeamCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { get_future_Team } from '../redux/sagas/team';
import * as actions from '../redux/actions'


import { setNickName } from '../redux/sagas/user';

export default function FutureLeagueListScreen({ navigation }) {
  const [team,userInfo] = useSelector((store)=> [store.team, store.userInfo])
  const dispatch  = useDispatch()
  const [refreshing, setRefreshing] = useState(false);
  const [height, setHeight] = useState(1000);

  const call_teaminfo = (name)=>{
    dispatch(get_future_Team(name));
  }
  const onRefresh = async (name)=>{
    
    setRefreshing(true);

    call_teaminfo(name);
  }

  const returnTeamcard = (height) =>{
    refreshing? setRefreshing(false) : null;
    if(team.FUTURE_TEAM.data){
      let teamcard = team.FUTURE_TEAM.data.map((team)=>{
        return <TeamCard navigation={navigation} teaminfo={team} height={height}></TeamCard>
      })
      return teamcard
    }
  }

  useEffect(()=>{
    //call_teaminfo(userInfo.name.data)
  },[])
  
  
  return (
    <View style={styles.container}
    onLayout={(e)=>{
      setHeight(e.nativeEvent.layout.height/5)
    }}>
        <ScrollView 
      
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={()=>{onRefresh(userInfo.name.data)}}/>
      }>
        {team.FUTURE_TEAM.loading? null : returnTeamcard(height)}
      </ScrollView>
    </View>
      
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    "backgroundColor": "#EEEEEE",
  }
});
