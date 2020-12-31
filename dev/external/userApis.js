import axios from 'axios';
import { url } from './const';

export function getUser(id) {
  axios.get(url + `/${id}`, {

  })
}
