
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import {
  auth,
  googleProvider
} from "./firebase.js";

// Google Login
export async function loginWithGoogle() {
  try {
    const result = await signInWithPopup(
      auth,
      googleProvider
    );

    return result.user;
  } catch (error) {
    console.error("Google Login Error:", error);
    throw error;
  }
}

// Logout
export async function logoutUser() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout Error:", error);
    throw error;
  }
}

// Check Login Status
export function listenToAuth(callback) {
  return onAuthStateChanged(auth, callback);
}
