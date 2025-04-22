import React, { ReactNode, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Login from '../Login/Login';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { currentUser } = useAuth();
  
  // Get the current path from window.location
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  
  // Check if the current path needs protection
  const isProtectedPath = 
    currentPath.includes('/libraries') || 
    currentPath.includes('/tools') || 
    currentPath.includes('/rules');
  
  // Only require authentication for protected paths
  if (isProtectedPath && !currentUser) {
    return (
      <>
        {/* Show the page content with blurred effect */}
        <div style={{ 
          filter: 'blur(4px)', 
          pointerEvents: 'none',
          userSelect: 'none',
        }}>
          {children}
        </div>
        
        {/* Overlay login modal */}
        <div style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          zIndex: 9999,
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}>
          <div style={{ 
            maxWidth: '400px', 
            width: '100%', 
            padding: '20px', 
            borderRadius: '8px', 
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'white' 
          }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>请登录以访问内容</h2>
            <Login />
          </div>
        </div>
      </>
    );
  }

  // If not a protected path or user is authenticated, render the children components
  return <>{children}</>;
};

export default ProtectedRoute;