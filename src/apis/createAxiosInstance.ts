import axios, { AxiosError } from 'axios';
import { API_BASE_URL } from '../constants/apiUrl';
import { setCacheStorage } from '../utils/cacheStorage';

const axiosConfig = {
  baseURL: API_BASE_URL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
};

const instance = axios.create(axiosConfig);

instance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

instance.interceptors.response.use(
  async (response) => {
    await setCacheStorage(response);
    return response;
  },
  async (error) => {
    if (error instanceof AxiosError) {
      console.error(error.message);
    }
    return Promise.reject(error.response);
  }
);

export default instance;
