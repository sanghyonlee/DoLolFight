import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import StackNavigator from './navigator/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer, { rootSaga } from './redux/reducers';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AsyncStorage } from 'react-native';
import createSagaMiddleware from 'redux-saga';
import { getNickName, setNickName } from './redux/sagas/user';
import { setNickname } from './screen/Login';
import { useEffect, useState } from 'react';
import  prompt  from 'react-native-prompt-android';
import LoadingScreen from './screen/LoadingScreen'

export default function App() {
  LogBox.ignoreAllLogs();//Ignore all log notifications
  const [team,userInfo] = useSelector((store)=> [store.team, store.userInfo])
  const [loading, setLoading] = useState(false);
  if(userInfo.name.data != null && userInfo.name.data != "DefaultInitialState" && team.FUTURE_TEAM.data != 'default' && team.PAST_TEAM.data != 'default' && !loading){
    setLoading(true);
  }
  if(loading){
    return (
      <NavigationContainer>
        <StackNavigator></StackNavigator>
      </NavigationContainer>
    )
  }else{
    return(
      <LoadingScreen/>
    )
  }
  ;
};
