// src/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000', // Adjust the base URL to match your JSON Server endpoint
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getFunds() {
    return apiClient.get('/funds');
  },
  getFundById(id) {
    return apiClient.get(`/funds/${id}`);
  },
  // Add other API calls as needed
};
