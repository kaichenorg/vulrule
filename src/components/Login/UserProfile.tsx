import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./UserProfile.module.css";

const UserProfile: React.FC = () => {
  const { currentUser, logout, sendVerificationEmail } = useAuth();
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function handleLogout(): Promise<void> {
    try {
      await logout();
    } catch (error) {
      console.error("Failed to log out", error);
    }
  }

  async function handleSendVerificationEmail(): Promise<void> {
    try {
      setError("");
      setMessage("");
      setLoading(true);
      await sendVerificationEmail();
      setMessage("验证邮件已发送，请查看您的邮箱");
    } catch (error: any) {
      console.error("Failed to send verification email", error);
      setError("发送验证邮件失败，请稍后重试");
    } finally {
      setLoading(false);
    }
  }

  if (!currentUser) {
    return null;
  }

  return (
    <div className={styles.profileContainer}>
      {currentUser.photoURL && (
        <img 
          src={currentUser.photoURL} 
          alt="Profile" 
          className={styles.profilePicture} 
        />
      )}
      <div className={styles.userInfo}>
        <p className={styles.displayName}>{currentUser.displayName || "用户"}</p>
        <p className={styles.email}>{currentUser.email}</p>
        <p className={styles.verificationStatus}>
          邮箱状态: {currentUser.emailVerified ? 
            <span className={styles.verified}>已验证</span> : 
            <span className={styles.unverified}>未验证</span>}
        </p>
        
        {!currentUser.emailVerified && (
          <button 
            onClick={handleSendVerificationEmail} 
            className={styles.verifyButton}
            disabled={loading}
          >
            {loading ? "发送中..." : "重新发送验证邮件"}
          </button>
        )}
        
        {message && <p className={styles.message}>{message}</p>}
        {error && <p className={styles.error}>{error}</p>}
      </div>
      <button onClick={handleLogout} className={styles.logoutButton}>
        退出登录
      </button>
    </div>
  );
};

export default UserProfile;