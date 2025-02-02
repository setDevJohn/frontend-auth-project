import axios from 'axios';

const token = localStorage.getItem('@token');
const apiBaseUrl = import.meta.env.VITE_API_URL; 

export const api = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('@token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});