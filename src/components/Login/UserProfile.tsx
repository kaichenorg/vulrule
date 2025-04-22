import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./UserProfile.module.css";

const UserProfile: React.FC = () => {
  const { currentUser, logout } = useAuth();

  async function handleLogout(): Promise<void> {
    try {
      await logout();
    } catch (error) {
      console.error("Failed to log out", error);
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
        <p className={styles.displayName}>{currentUser.displayName || "User"}</p>
        <p className={styles.email}>{currentUser.email}</p>
      </div>
      <button onClick={handleLogout} className={styles.logoutButton}>
        Logout
      </button>
    </div>
  );
};

export default UserProfile;