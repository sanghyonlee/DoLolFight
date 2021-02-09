import React from 'react';
import {
  StyleSheet,
  ScrollView,
  RefreshControl,
  View
} from 'react-native';
import TeamCard from '../component/TeamCard';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../redux/actions'
import { useEffect, useState } from 'react';
import { get_past_Team } from '../redux/sagas/team';

export default function PastLeagueListScreen({ navigation }) {
  const [team,userInfo] = useSelector((store)=> [store.team, store.userInfo])
  const dispatch  = useDispatch()
  const [refreshing, setRefreshing] = useState(false);
  const [height, setHeight] = useState(1000);

  const call_teaminfo = (name)=>{
    dispatch(get_past_Team(name));
  }

  const onRefresh = async (name)=>{
    
    setRefreshing(true);
    
    call_teaminfo(name);
  }

  const returnTeamcard = (height) =>{
    refreshing? setRefreshing(false) : null;
    if(team.PAST_TEAM.data){
      let teamcard = team.PAST_TEAM.data.map((team)=>{
        return <TeamCard navigation={navigation} teaminfo={team} height={height}></TeamCard>
      })
      return teamcard
    }
  }

  useEffect(()=>{
    //call_teaminfo("test")
  },[])
  
  
  return (
    <View style={styles.container}
    onLayout={(e)=>{
      setHeight(e.nativeEvent.layout.height/5)
      console.log(height)
    }}>
      <ScrollView 
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={()=>{onRefresh(userInfo.name.data)}}/>
      }>
        {team.PAST_TEAM.loading? null : returnTeamcard(height)}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    "backgroundColor": "#EEEEEE",
  }
});
