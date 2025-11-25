// src/ProtectedRoute.jsx

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import your auth hook

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  
  // If the user is NOT authenticated, redirect them to the login page.
  if (!isAuthenticated) {
    // The 'replace' prop is crucial to stop users from using the browser's back button 
    // to access the protected page after being redirected.
    return <Navigate to="/login" replace />; 
  }
  
  // If the user IS authenticated, render the child route components.
  return <Outlet />;
};

export default ProtectedRoute;