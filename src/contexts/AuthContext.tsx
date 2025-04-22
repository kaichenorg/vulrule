import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { 
  User,
  UserCredential,
  onAuthStateChanged, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../firebase";

interface AuthContextType {
  currentUser: User | null;
  signInWithGoogle: () => Promise<UserCredential>;
  signInWithEmail: (email: string, password: string) => Promise<UserCredential>;
  signUpWithEmail: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Auth methods
  const authMethods = {
    signInWithGoogle: () => {
      const provider = new GoogleAuthProvider();
      return signInWithPopup(auth, provider);
    },
    
    signInWithEmail: (email: string, password: string) => 
      signInWithEmailAndPassword(auth, email, password),
    
    signUpWithEmail: (email: string, password: string) => 
      createUserWithEmailAndPassword(auth, email, password),
    
    logout: () => signOut(auth)
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    ...authMethods
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}