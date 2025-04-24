import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { 
  User,
  UserCredential,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail
} from "firebase/auth";
import { auth, firestore } from "../firebase";
import { 
  doc, 
  setDoc, 
  getDoc, 
  getDocs,
  updateDoc,
  deleteDoc,
  Timestamp, 
  collection,
  query,
  where,
  serverTimestamp
} from "firebase/firestore";

interface AuthContextType {
  currentUser: User | null;
  userStatus: UserStatus | null;
  isAdmin: boolean;
  isLoading: boolean;
  signInWithEmail: (email: string, password: string) => Promise<UserCredential>;
  signUpWithEmail: (email: string, password: string, organization: string) => Promise<UserCredential>;
  sendVerificationEmail: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  logout: () => Promise<void>;
  getPendingUsers: () => Promise<UserRegistration[]>;
  getAllUsers: () => Promise<UserRegistration[]>;
  approveUser: (userId: string, approve: boolean) => Promise<void>;
  setUserAdminStatus: (userId: string, isAdmin: boolean) => Promise<void>;
}

export interface UserStatus {
  organization: string;
  approvalStatus: 'pending' | 'approved' | 'rejected';
  registeredAt: Date;
  lastUpdatedAt: Date;
  isAdmin?: boolean;
}

export interface UserRegistration {
  id: string;
  email: string;
  organization: string;
  approvalStatus: 'pending' | 'approved' | 'rejected';
  registeredAt: Date;
  lastUpdatedAt: Date;
  emailVerified: boolean;
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
  const [userStatus, setUserStatus] = useState<UserStatus | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch user status from Firestore
  async function fetchUserStatus(user: User) {
    if (!user) return null;
    
    try {
      const userDocRef = doc(firestore, "users", user.uid);
      const userDoc = await getDoc(userDocRef);
      
      if (userDoc.exists()) {
        const userData = userDoc.data();
        return {
          ...userData,
          registeredAt: userData.registeredAt?.toDate() || new Date(),
          lastUpdatedAt: userData.lastUpdatedAt?.toDate() || new Date(),
          isAdmin: userData.isAdmin || false
        } as UserStatus;
      }
    } catch (error) {
      console.error("Error fetching user status:", error);
    }
    
    return null;
  }

  // Check if a user is the first one to register (make them admin)
  async function isFirstUser() {
    try {
      const usersRef = collection(firestore, "users");
      const querySnapshot = await getDocs(usersRef);
      return querySnapshot.empty; // If no users exist, this is the first user
    } catch (error) {
      console.error("Error checking if first user:", error);
      return false;
    }
  }

  // Auth methods
  const authMethods = {
    signInWithEmail: async (email: string, password: string) => {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const status = await fetchUserStatus(result.user);
      setUserStatus(status);
      setIsAdmin(status?.isAdmin || false);
      return result;
    },
    
    signUpWithEmail: async (email: string, password: string, organization: string) => {
      // Create the user with email and password
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const user = result.user;
      
      // Send verification email
      if (user) {
        await sendEmailVerification(user);
        
        // Check if this is the first user (make them admin if so)
        const firstUser = await isFirstUser();
        
        // Store additional user information in Firestore
        const userStatus: UserStatus = {
          organization,
          // If first user, auto-approve and make admin, otherwise set as pending
          approvalStatus: firstUser ? 'approved' : 'pending',
          registeredAt: new Date(),
          lastUpdatedAt: new Date(),
          isAdmin: firstUser // First user is automatically an admin
        };
        
        // Also store the email in Firestore for admin display purposes
        await setDoc(doc(firestore, "users", user.uid), {
          ...userStatus,
          email: user.email,
          registeredAt: Timestamp.fromDate(userStatus.registeredAt),
          lastUpdatedAt: Timestamp.fromDate(userStatus.lastUpdatedAt)
        });
        
        // Add to pending approvals collection if not first user
        if (!firstUser) {
          await setDoc(doc(firestore, "pendingApprovals", user.uid), {
            email: user.email,
            organization,
            registeredAt: Timestamp.fromDate(new Date())
          });
        }
        
        setUserStatus(userStatus);
        setIsAdmin(firstUser);
      }
      
      return result;
    },
    
    sendVerificationEmail: async () => {
      if (currentUser) {
        return await sendEmailVerification(currentUser);
      }
      throw new Error("No user logged in");
    },

    resetPassword: (email: string) => sendPasswordResetEmail(auth, email),
    
    logout: async () => {
      await signOut(auth);
      setUserStatus(null);
      setIsAdmin(false);
    },
    
    // Admin functionality to get pending users
    getPendingUsers: async () => {
      if (!isAdmin) {
        throw new Error("Insufficient permissions. Admin access required.");
      }
      
      try {
        // Query users with pending approval status
        const usersRef = collection(firestore, "users");
        const q = query(usersRef, where("approvalStatus", "==", "pending"));
        const querySnapshot = await getDocs(q);
        
        const users: UserRegistration[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          users.push({
            id: doc.id,
            email: data.email || "Unknown Email",
            organization: data.organization,
            approvalStatus: data.approvalStatus,
            registeredAt: data.registeredAt.toDate(),
            lastUpdatedAt: data.lastUpdatedAt.toDate(),
            emailVerified: false // We can't determine this client-side
          });
        });
        
        return users;
      } catch (error) {
        console.error("Error fetching pending users:", error);
        throw new Error("Failed to retrieve pending user list");
      }
    },

    // Admin functionality to get all users
    getAllUsers: async () => {
      if (!isAdmin) {
        throw new Error("Insufficient permissions. Admin access required.");
      }
      
      try {
        // Query all users
        const usersRef = collection(firestore, "users");
        const querySnapshot = await getDocs(usersRef);
        
        const users: UserRegistration[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          users.push({
            id: doc.id,
            email: data.email || "Unknown Email",
            organization: data.organization,
            approvalStatus: data.approvalStatus,
            registeredAt: data.registeredAt.toDate(),
            lastUpdatedAt: data.lastUpdatedAt.toDate(),
            emailVerified: false, // We can't determine this client-side
            isAdmin: data.isAdmin || false // 确保包含管理员状态
          });
        });
        
        return users;
      } catch (error) {
        console.error("Error fetching all users:", error);
        throw new Error("Failed to retrieve user list");
      }
    },
    
    // Admin functionality to approve or reject users (client-side implementation)
    approveUser: async (userId: string, approve: boolean) => {
      if (!isAdmin) {
        throw new Error("Insufficient permissions. Admin access required.");
      }
      
      try {
        // Update user approval status
        const userRef = doc(firestore, "users", userId);
        await updateDoc(userRef, {
          approvalStatus: approve ? "approved" : "rejected",
          lastUpdatedAt: serverTimestamp()
        });
        
        // Remove from pending approvals collection
        try {
          await deleteDoc(doc(firestore, "pendingApprovals", userId));
        } catch (e) {
          console.log("No pending approval document to delete");
        }
        
        // We would need a server-side function for email notifications
        // This is where we would normally notify the user via email
        console.log(`User ${userId} ${approve ? 'approved' : 'rejected'}`);
        
      } catch (error) {
        console.error("Error approving/rejecting user:", error);
        throw new Error("Failed to update user approval status");
      }
    },

    // Admin functionality to set user admin status
    setUserAdminStatus: async (userId: string, isAdmin: boolean) => {
      if (!isAdmin) {
        throw new Error("Insufficient permissions. Admin access required.");
      }
      
      try {
        // Update user admin status
        const userRef = doc(firestore, "users", userId);
        await updateDoc(userRef, {
          isAdmin,
          lastUpdatedAt: serverTimestamp()
        });
        
        console.log(`User ${userId} admin status set to ${isAdmin}`);
        
      } catch (error) {
        console.error("Error setting user admin status:", error);
        throw new Error("Failed to update user admin status");
      }
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      
      if (user) {
        try {
          const status = await fetchUserStatus(user);
          setUserStatus(status);
          setIsAdmin(status?.isAdmin || false);
        } catch (error) {
          console.error("Error in auth state change:", error);
        }
      } else {
        setUserStatus(null);
        setIsAdmin(false);
      }
      
      setIsLoading(false);
    });
    
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userStatus,
    isAdmin,
    isLoading,
    ...authMethods
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}