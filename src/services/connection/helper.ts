// src/services/utils/apiUtils.js
import axios from 'axios';
import { API_URL } from '../constant';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    throw error;
  }
);

export const get = async (url: string, params = {}) => {
  try {
    const response = await apiClient.get(url, { params });
    return response;
  } catch (error) {
    throw error;
  }
};

export const post = async (url:string, data:any) => {
  try {
    const response = await apiClient.post(url, data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const put = async (url:string, data:any) => {
  try {
    const response = await apiClient.put(url, data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const remove = async (url:string) => {
  try {
    const response = await apiClient.delete(url);
    return response;
  } catch (error) {
    throw error;
  }
};