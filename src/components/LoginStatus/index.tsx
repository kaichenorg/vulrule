import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import styles from './styles.module.css';

export default function LoginStatus(): JSX.Element {
  const { currentUser, logout } = useAuth();

  return (
    <div className={styles.loginStatusContainer}>
      {currentUser ? (
        <div className={styles.userContainer}>
          <span className={styles.userEmail}>{currentUser.email}</span>
          <button 
            onClick={() => logout()} 
            className={styles.logoutButton}
            title="退出登录"
          >
            退出
          </button>
        </div>
      ) : (
        <a 
          href="/" 
          className={styles.loginButton}
          onClick={(e) => {
            // 阻止导航，而是显示登录模态框
            e.preventDefault();
            // 强制重新渲染以显示登录表单
            window.location.reload();
          }}
        >
          登录
        </a>
      )}
    </div>
  );
}