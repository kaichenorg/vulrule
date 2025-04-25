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

    // 查找导航栏中的登录按钮
    const navbarLoginButton = document.querySelector('.navbar-login-button');
    if (navbarLoginButton) {
      try {
        // 创建登录状态容器
        const loginStatusContainer = document.createElement('div');
        loginStatusContainer.id = 'login-status-container';
        loginStatusContainer.style.display = 'inline-block';
        
        // 替换导航栏中的登录按钮
        navbarLoginButton.parentNode.replaceChild(loginStatusContainer, navbarLoginButton);
        
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
    } else {
      // 如果找不到登录按钮，等待一下再尝试
      setTimeout(renderLoginStatus, 100);
    }
  };

  // Mount LoginStatus component to replace the navbar login button
  useEffect(() => {
    // 初始渲染
    const initialRenderTimer = setTimeout(() => {
      renderLoginStatus();
    }, 300); // 给页面足够的时间加载导航栏
    
    // 清理函数
    return () => {
      clearTimeout(initialRenderTimer);
    };
  }, []);

  // 监听路由变化，确保在导航时重新检查登录状态组件
  useEffect(() => {
    // 路由变化后，重置登录状态渲染标志
    loginStatusRendered.current = false;
    
    // 当路由变化时，给DOM一点时间来更新
    const routeChangeTimer = setTimeout(() => {
      renderLoginStatus();
    }, 300);
    
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