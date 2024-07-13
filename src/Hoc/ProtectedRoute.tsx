import React from 'react';

import { useSelector } from 'react-redux';

import { Navigate, useLocation } from 'react-router-dom';
import {
  selectCurrentUser,
  selectToken,
} from '../Redux/Features/Auth/authSlice';

interface ProtectedRouteProps {
  component: React.ComponentType<unknown>;
  allowedRoles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
}) => {
 
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectToken);
  const location = useLocation();

  if (!token || !user) {
    // User is not logged in, redirect to login page
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // if (!user || !allowedRoles.includes(user.role)) {
  //   // User doesn't have the required role, redirect to unauthorized page
  //   alert("no roles");
  //   return <Navigate to="/unauthorized" replace />;
  // }

  // User is authenticated and authorized, render the component
  return <Component />;
};

export default ProtectedRoute;
