import React, { ReactNode } from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import ProtectedRoute from '../components/ProtectedRoute';
import { useLocation } from '@docusaurus/router';

interface RootProps {
  children: ReactNode;
}

// Root component to wrap the entire app with AuthProvider
export default function Root({ children }: RootProps): React.ReactElement {
  const location = useLocation();
  
  // List of paths that should be accessible without authentication
  const publicPaths = [
    // You can add public paths here if needed
    // For example: '/public-page', '/terms', etc.
  ];
  
  const isPublicPath = publicPaths.some(path => location.pathname === path);

  return (
    <AuthProvider>
      {isPublicPath ? (
        // Render children directly for public paths
        children
      ) : (
        // Wrap with ProtectedRoute for protected paths
        <ProtectedRoute>
          {children}
        </ProtectedRoute>
      )}
    </AuthProvider>
  );
}