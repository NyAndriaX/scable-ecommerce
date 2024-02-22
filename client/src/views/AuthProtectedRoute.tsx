import React, { ReactNode } from 'react'
import { useUserInfo } from '@/store/authStore'
import { Navigate } from 'react-router-dom';

interface RouteProps{
  children:ReactNode
}

const AuthProtectedRoute:React.FC<RouteProps> = ({children}) => {
  const user = useUserInfo();
  if (user) return <Navigate to="/" replace/>;
  return <>{children}</>
}

export default AuthProtectedRoute
