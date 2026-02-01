import { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/config";
import AdminDashboard from "../components/Admin/AdminDashboard";
import "./AdminPanel.css";

export default function AdminPanel() {
  console.log('🔐 [AdminPanel] Component initializing...');
  
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log('🔐 [AdminPanel] Setting up auth state listener...');
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('🔐 [AdminPanel] Auth state changed:', currentUser ? 'User logged in' : 'No user');
      
      if (currentUser) {
        console.log('🔐 [AdminPanel] User details:');
        console.log('   - Email:', currentUser.email);
        console.log('   - UID:', currentUser.uid);
        console.log('   - Email verified:', currentUser.emailVerified);
      }
      
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      console.log('🔐 [AdminPanel] Cleaning up auth listener');
      unsubscribe();
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('🔐 [AdminPanel] Login attempt started');
    console.log('🔐 [AdminPanel] Email:', email);
    
    setError("");
    setLoading(true);

    try {
      console.log('🔐 [AdminPanel] Calling signInWithEmailAndPassword...');
      const result = await signInWithEmailAndPassword(auth, email, password);
      
      console.log('🔐 [AdminPanel] Login successful!');
      console.log('🔐 [AdminPanel] User:', result.user.email);
      
      // User will be set automatically by onAuthStateChanged
    } catch (error) {
      console.error('🔐 [AdminPanel] Login error:', error);
      console.error('🔐 [AdminPanel] Error code:', error.code);
      console.error('🔐 [AdminPanel] Error message:', error.message);
      
      setError('Invalid email or password. Access denied.');
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    console.log('🔐 [AdminPanel] Logout initiated');
    
    try {
      await signOut(auth);
      console.log('🔐 [AdminPanel] Logout successful');
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error('🔐 [AdminPanel] Logout error:', error);
    }
  };

  if (loading) {
    console.log('⏳ [AdminPanel] Still loading - showing loading state');
    return (
      <div className="admin-loading">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) {
    console.log('🚫 [AdminPanel] No user logged in - showing login form');
    return (
      <div className="admin-login">
        <div className="login-container">
          <h1>Admin Access</h1>
          <p>Authorized personnel only</p>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  console.log('✅ [AdminPanel] User authenticated - showing admin dashboard');
  console.log('🔐 [AdminPanel] Logged in as:', user.email);

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h1>Portfolio Admin Panel</h1>
        <div className="admin-user-info">
          <span>Welcome, {user.email}</span>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </div>

      <AdminDashboard />
    </div>
  );
}
