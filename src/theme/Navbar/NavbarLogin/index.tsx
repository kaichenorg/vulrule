import React from 'react';
import { useAuth } from '@site/src/contexts/AuthContext';
import styles from './styles.module.css';

export default function NavbarLogin(): JSX.Element {
  const { currentUser, logout } = useAuth();

  return (
    <div className={styles.navbarLoginContainer}>
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
            e.preventDefault();
            window.location.reload();
          }}
        >
          登录
        </a>
      )}
    </div>
  );
}