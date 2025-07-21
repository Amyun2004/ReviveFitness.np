import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../CSS/auth.css'; // Assuming you have shared CSS for auth pages
import logo from '../../assets/logo/RandHand.png'; // Your logo asset

export default function AdminLoginPage() {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State for displaying login errors
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    // Basic validation (you'll replace this with actual backend authentication)
    if (!adminId.trim() || !password.trim()) {
      setError("Admin ID and password are required.");
      return;
    }

    // Example action (replace with actual backend API call for admin login)
    if (adminId === 'admin' && password === 'adminpass') { // Dummy credentials
      alert(`Admin logged in as: ${adminId}`);
      navigate('/admin-dashboard'); // Navigate to an admin dashboard or home after successful login
    } else {
      setError("Invalid Admin ID or password.");
    }
  };

  return (
    <div className="auth-page-container"> {/* Main container for the page */}
      <div className="auth-modal"> {/* This div can be styled to center the form */}
        {/* Logo to navigate back to the home page */}
        <Link to="/" className="auth-logo-link">
          <img className="auth-logo" src={logo} alt="ReviveFitness_logo" />
        </Link>

        <form className="log-in" onSubmit={handleAdminLogin}>
          <h2>Admin Login</h2>
          <p>Admin ID</p>
          <input
            type="text" // Use type="text" for admin ID
            placeholder="Enter your Admin ID"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
            required
          />
          <p>Password</p>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <div className="form-error">{error}</div>} {/* Display error message */}

          <button type="submit">Login as Admin</button>

          {/* Links to other authentication pages */}
          <Link to="/login" className="other-page-link">
            Login as Member
          </Link>
          <Link to="/signup" className="other-page-link">
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
}