import axios, { AxiosRequestConfig } from 'axios';
import { API_BASE_URL } from '../constants/apiUrl';

const axiosConfig: AxiosRequestConfig = {
  baseURL: API_BASE_URL,
  timeout: 3000,
};

const instance = axios.create(axiosConfig);

instance.interceptors.request.use(
  (config) => {
    console.info('calling api : ', getId());
    return config;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

export default instance;

let id = 1;
const getId = () => id++;
