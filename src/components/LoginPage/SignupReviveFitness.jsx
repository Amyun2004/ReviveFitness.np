import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css';
import logo from '../../assets/logo/RandHand.png';

export default function SignUp() {
  const [isAdmin, setIsAdmin]     = useState(false);
  const [email, setEmail]         = useState('');
  const [adminId, setAdminId]     = useState('');
  const [password, setPassword]   = useState('');
  const [confirm, setConfirm]     = useState('');
  const [error, setError]         = useState('');
  const navigate = useNavigate();

  const handleSignup = e => {
    e.preventDefault();
    setError('');

    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    if (isAdmin && !adminId.trim()) {
      setError("Admin ID is required.");
      return;
    }
    if (!isAdmin && !email.trim()) {
      setError("Email is required.");
      return;
    }

    // TODO: replace this with your API call
    alert(
      isAdmin
        ? `Admin signed up with ID: ${adminId}`
        : `User signed up with email: ${email}`
    );
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <div className="auth-modal">
        <img
          className="auth-logo"
          src={logo}
          alt="ReviveFitness logo"
          onClick={() => navigate('/', { replace: true })}
          style={{ cursor: 'pointer' }}
        />

        <form className="sign-in" onSubmit={handleSignup}>
          <h2>Sign Up</h2>

          {/* Admin toggle */}
          <div className="admin-toggle">
            <input
              type="checkbox"
              id="isAdmin"
              checked={isAdmin}
              onChange={() => setIsAdmin(!isAdmin)}
            />
            <label htmlFor="isAdmin">Sign up as Admin</label>
          </div>

          {/* Conditionally show the right field */}
          {isAdmin ? (
            <>
              <p>Admin ID</p>
              <input
                type="text"
                placeholder="Enter your Admin ID"
                value={adminId}
                onChange={e => setAdminId(e.target.value)}
              />
            </>
          ) : (
            <>
              <p>Email</p>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </>
          )}

          <p>Password</p>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <p>Confirm Password</p>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirm}
            onChange={e => setConfirm(e.target.value)}
          />

          {error && <div className="form-error">{error}</div>}

          <button type="submit">Sign Up</button>

          <Link to="/login"       className="other-page-link">Already a member?</Link>
          <Link to="/admin-login" className="other-page-link">Login for Admin?</Link>
        </form>
      </div>
    </div>
  );
}
