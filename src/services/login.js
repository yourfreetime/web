import axios from 'axios';
import { URL } from 'core/constants';

export const onLogin = (email, password) => {
  return axios.post(`${URL}/login`, {
    email,
    password
  });
};
