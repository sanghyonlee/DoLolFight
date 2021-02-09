import axios from 'axios';
import { url } from './const';

export function getUser(id) {
  axios.get(url + `/${id}`, {

  })
}

export async function getTeamInfo(payload){
  const nickname = payload.name;
  const state = payload.state;
  const response = await axios.get(url + (`/team/findWithName/${nickname}?state=${state}`))
  return response.data
}

export async function getTeamFullInfo(payload){
  const nickname = payload.name;
  const state = payload.state;
  const response = await axios.get(url + (`/team/findAllWithName/${nickname}?state=${state}`))
  return response.data
}