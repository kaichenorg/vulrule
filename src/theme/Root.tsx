import React, { ReactNode, useEffect, useRef } from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import ProtectedRoute from '../components/ProtectedRoute';
import { useLocation } from '@docusaurus/router';
import { createRoot } from 'react-dom/client';
import LoginStatus from '@site/src/components/LoginStatus';

interface RootProps {
  children: ReactNode;
}

// Root component to wrap the entire app with AuthProvider
export default function Root({ children }: RootProps): React.ReactElement {
  const location = useLocation();
  const loginStatusRendered = useRef(false);
  
  // List of paths that should be accessible without authentication
  const publicPaths = [
    // You can add public paths here if needed
    // For example: '/public-page', '/terms', etc.
  ];
  
  const isPublicPath = publicPaths.some(path => location.pathname === path);

  // 尝试渲染登录状态组件
  const renderLoginStatus = () => {
    // 如果已经渲染过，则跳过
    if (loginStatusRendered.current) {
      return;
    }

    const loginStatusContainer = document.getElementById('login-status-container');
    if (loginStatusContainer && !loginStatusContainer.hasChildNodes()) {
      try {
        const root = createRoot(loginStatusContainer);
        root.render(
          <AuthProvider>
            <LoginStatus />
          </AuthProvider>
        );
        // 标记为已渲染过
        loginStatusRendered.current = true;
        console.log('登录状态组件已渲染');
      } catch (error) {
        console.error('渲染登录状态组件时出错:', error);
      }
    } else if (!loginStatusContainer) {
      console.warn('找不到登录状态容器元素');
    }
  };

  // Mount LoginStatus component to the navbar container
  useEffect(() => {
    // 初始渲染
    const initialRenderTimer = setTimeout(() => {
      renderLoginStatus();
    }, 100);
    
    // 监听路由变化，确保在页面导航时登录状态组件存在
    const observer = new MutationObserver(() => {
      const container = document.getElementById('login-status-container');
      if (container && !container.hasChildNodes() && !loginStatusRendered.current) {
        renderLoginStatus();
      }
    });
    
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });
    
    // 清理函数
    return () => {
      clearTimeout(initialRenderTimer);
      observer.disconnect();
    };
  }, []);

  // 监听路由变化，确保在导航时重新检查登录状态组件
  useEffect(() => {
    // 路由变化后，检查登录状态组件是否存在
    const checkLoginStatusOnRouteChange = () => {
      const container = document.getElementById('login-status-container');
      if (container && !container.hasChildNodes()) {
        loginStatusRendered.current = false; // 重置标记，允许重新渲染
        renderLoginStatus();
      }
    };
    
    // 当路由变化时，给DOM一点时间来更新
    const routeChangeTimer = setTimeout(() => {
      checkLoginStatusOnRouteChange();
    }, 100);
    
    return () => {
      clearTimeout(routeChangeTimer);
    };
  }, [location.pathname]);

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