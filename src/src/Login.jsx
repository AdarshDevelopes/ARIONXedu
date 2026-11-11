import React, { useState } from "react";
import { useAuth } from "./AuthContext.jsx";

export default function Login() {
  const { user, loading, loginWithGoogle, logoutUser } = useAuth();

  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleLogin() {
    try {
      setBusy(true);
      setError("");
      await loginWithGoogle();
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  async function handleLogout() {
    try {
      setError("");
      await logoutUser();
    } catch (err) {
      setError(err.message || "Logout failed.");
    }
  }

  if (loading) {
    return <p>Loading ARIONXedu...</p>;
  }

  if (user) {
    return (
      <div className="login-panel">
        <h2>Welcome to ARIONXedu!</h2>

        <p>{user.displayName}</p>
        <p>{user.email}</p>

        <button onClick={handleLogout}>
          Sign Out
        </button>

        {error && <p role="alert">{error}</p>}
      </div>
    );
  }

  return (
    <div className="login-panel">
      <h2>Welcome to ARIONXedu</h2>
      <p>Sign in to continue learning.</p>

      <button
        onClick={handleLogin}
        disabled={busy}
      >
        {busy ? "Signing in..." : "Continue with Google"}
      </button>

      {error && <p role="alert">{error}</p>}
    </div>
  );
             }
