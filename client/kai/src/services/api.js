// client/src/services/api.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional interceptor (e.g., auth token support)
api.interceptors.request.use((config) => {
  // Example: add token if needed
  // config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});
export const getAllEntries = () => api.get('/entries');
export const getEntryById = (id) => api.get(`/entry/${id}`);
export const createEntry = (data) => api.post('/entry', data);
export const triggerMemory = () => api.post('/daily-memory-trigger');
export default api;