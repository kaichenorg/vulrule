import React, { ReactNode } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Login from '../Login/Login';
import UserProfile from '../Login/UserProfile';
import styles from './ProtectedRoute.module.css';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { currentUser, userStatus } = useAuth();
  
  // Get the current path from window.location
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  
  // Check if the current path needs protection
  const isProtectedPath = 
    currentPath.includes('/libraries') || 
    currentPath.includes('/tools') || 
    currentPath.includes('/rules');

  // 检查当前路径是否需要保护
  if (isProtectedPath) {
    // 用户未登录
    if (!currentUser) {
      return (
        <div className={styles.protectedContainer}>
          <div className={styles.icon}>🔒</div>
          <h2 className={styles.title}>请登录以访问内容</h2>
          <p className={styles.description}>
            该内容仅对已登录用户开放，请登录后再访问。
          </p>
          <div className={styles.divider}></div>
          <Login />
        </div>
      );
    }
    
    // 用户已登录但邮箱未验证
    if (currentUser && !currentUser.emailVerified) {
      return (
        <div className={styles.protectedContainer}>
          <div className={styles.icon}>✉️</div>
          <h2 className={styles.title}>请验证您的邮箱</h2>
          <p className={styles.description}>
            我们已向您的邮箱发送了验证邮件，请验证后再访问该内容。
            如果您未收到验证邮件，可以点击下方按钮重新发送。
          </p>
          <div className={styles.divider}></div>
          <UserProfile />
        </div>
      );
    }
    
    // // 用户已登录、邮箱已验证，但尚未通过管理员审批
    // if (currentUser && currentUser.emailVerified && userStatus?.approvalStatus !== 'approved') {
    //   return (
    //     <div className={styles.protectedContainer}>
    //       <div className={styles.icon}>⏳</div>
    //       <h2 className={styles.title}>
    //         {userStatus?.approvalStatus === 'pending' 
    //           ? '您的账号正在等待审批' 
    //           : userStatus?.approvalStatus === 'rejected'
    //             ? '您的账号申请未获通过'
    //             : '账号状态异常'}
    //       </h2>
    //       <p className={styles.description}>
    //         {userStatus?.approvalStatus === 'pending' 
    //           ? '您的账号注册申请已提交，正在等待管理员审核。请耐心等待，审核通过后您将收到通知。' 
    //           : userStatus?.approvalStatus === 'rejected'
    //             ? '很抱歉，您的账号申请未获通过。如有疑问，请联系管理员。'
    //             : '您的账号状态异常，请联系管理员处理。'}
    //       </p>
    //       <div className={styles.divider}></div>
    //       <UserProfile />
    //     </div>
    //   );
    // }
  }

  // 如果不是受保护路径，或用户已通过身份验证且已验证邮箱并且已获得审批，则渲染子组件
  return <>{children}</>;
};

export default ProtectedRoute;