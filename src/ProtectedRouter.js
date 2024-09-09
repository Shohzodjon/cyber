import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRouter = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRouter;