import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Login from './Login';
import UserProfile from './UserProfile';
import styles from './AuthNavbarItem.module.css';

const AuthNavbarItem: React.FC = () => {
  const { currentUser } = useAuth();

  return (
    <div className={styles.authNavbarContainer}>
      {currentUser ? <UserProfile /> : <Login />}
    </div>
  );
};

export default AuthNavbarItem;