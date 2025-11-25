// src/AuthContext.jsx

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

// Custom hook to use the Auth context easily
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider component
export const AuthProvider = ({ children }) => {
  // Try to load the user from local storage on mount
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Function to handle successful login
  // This is what your Login.jsx component will call
  const login = (userData) => {
    // 1. Save the user data to local storage (for persistence across page reloads)
    localStorage.setItem('user', JSON.stringify(userData));
    // 2. Set the user state
    setUser(userData);
  };

  // Function to handle logout
  const logout = () => {
    // 1. Clear the token/user data
    localStorage.removeItem('user');
    // 2. Clear the user state
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    // The core check for the ProtectedRoute
    isAuthenticated: !!user, 
  };

  // Optional: You can skip this loading state for simplicity 
  // since we're using a synchronous check in the useState initializer.
  // We'll keep it simple and just return the provider immediately.
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};