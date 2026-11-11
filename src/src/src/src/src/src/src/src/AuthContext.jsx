
import React, {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

import {
  loginWithGoogle,
  logoutUser,
  listenToAuth
} from "./auth.js";

import { saveUserProfile } from "./profile.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profileError, setProfileError] = useState(null);

  useEffect(() => {
    const unsubscribe = listenToAuth(async (currentUser) => {
      setUser(currentUser);
      setProfileError(null);

      if (currentUser) {
        try {
          await saveUserProfile(currentUser);
        } catch (error) {
          console.error("Profile Error:", error);
          setProfileError(error.message);
        }
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    loading,
    profileError,
    loginWithGoogle,
    logoutUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
            }
