// RequireAuth.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const RequireAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    if (isAuthenticated === 'true') {
      return <WrappedComponent {...props} />;
    } else {
      return <Navigate to="/login" />;
    }
  };
};

export default RequireAuth;
