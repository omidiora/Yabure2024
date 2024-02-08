import axios from 'axios';

const API = 'https://api.yabureapp.com';


export const instance = axios.create({
  withCredentials: true,
  baseURL: API,
});
