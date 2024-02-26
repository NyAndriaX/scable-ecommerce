import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserInfo } from '@/store/userStore';

interface RouteProps {
  children:ReactNode;
  requireAdmin?:boolean
}

const ProtectedRoute:React.FC<RouteProps> = ({ children, requireAdmin }) => {
  const user = useUserInfo();
  if (!user) return <Navigate to="/" replace />;
  return <>{children}</>;
};

export default ProtectedRoute;
