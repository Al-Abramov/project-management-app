import axios, { AxiosRequestConfig } from 'axios';

const baseURL = 'https://ancient-island-62112.herokuapp.com/';

const api = axios.create({
  baseURL,
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  if (!config.headers) {
    config.headers = {};
  }
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

export default api;
