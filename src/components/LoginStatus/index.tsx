import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Login from '../Login/Login';
import styles from './styles.module.css';

export default function LoginStatus(): JSX.Element {
  const { currentUser, logout } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

  // 处理登录模态框的显示和隐藏
  const handleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  // 处理登出操作
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <div className={styles.loginStatusContainer}>
      {currentUser ? (
        <button 
          onClick={handleLogout} 
          className={styles.authButton}
          title="退出登录"
        >
          退出
        </button>
      ) : (
        <>
          <button 
            className={styles.authButton}
            onClick={handleLoginClick}
          >
            登录
          </button>
          
          {/* 登录模态框 */}
          {showLoginModal && (
            <div className={styles.modalOverlay} onClick={closeLoginModal}>
              <div className={styles.loginModal} onClick={(e) => e.stopPropagation()}>
                <h2 className={styles.modalTitle}>请登录以访问内容</h2>
                <Login />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}