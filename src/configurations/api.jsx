// src/api.jsx
import axios from "axios";

// Base URLs - Fixed configuration
const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_API_URL || "http://127.0.0.1:8000/api";
const LOGIN_URL = "/auth/login/";
const REGISTER_URL = "/auth/register/";

// Create axios instance with default config
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Register API - Fixed error handling
export const registerApi = async (userData) => {
  try {
    console.log("Sending to:", BASE_URL + REGISTER_URL);
    console.log("Data:", userData);
    
    const response = await api.post(REGISTER_URL, userData);
    return response.data;
  } catch (err) {
    console.error("API Error Details:", err);
    
    // Return the actual Django validation errors
    if (err.response?.data) {
      return err.response.data; // This contains the field errors from Django
    }
    
    return { 
      error: err.message || "Network error" 
    };
  }
};

// Login API - Fixed error handling
export const loginApi = async (userData) => {
  try {
    const response = await api.post(LOGIN_URL, userData);
    return response.data;
  } catch (err) {
    console.error("Login API Error:", err);
    
    if (err.response?.data) {
      return err.response.data;
    }
    
    return { 
      error: err.message || "Network error" 
    };
  }
};

export default api;