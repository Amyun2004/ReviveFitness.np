import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../CSS/auth.css';
import logo from '../../assets/logo/RandHand.png';

export default function SignUp() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState('');
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // The backgroundPath logic is less relevant if it's a dedicated page,
  // but if you want to keep it for other purposes (e.g., navigating back
  // to the specific page the user was on *before* landing on signup),
  // you can keep it, but it won't be used for closing the modal anymore.
  const backgroundPath = location.state?.backgroundPath || '/';


  const handleSignup = (e) => {
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

    // Example action (replace with backend call later)
    alert(
      isAdmin
        ? `Admin signed up with ID: ${adminId}`
        : `User signed up with email: ${email}`
    );
    // After successful signup, you might want to navigate
    // navigate('/login'); // e.g., to login page
    // navigate('/'); // e.g., back to home
  };

  return (
    // REMOVE THE MODAL OVERLAY DIV (it should not be here if it's a standalone page)
    // <div className="modal-overlay" onClick={() => navigate(backgroundPath)}>
    <div className="auth-page-container"> {/* Add a container div for styling the whole page */}
      <div className="auth-modal" /* onClick={(e) => e.stopPropagation()} */> {/* Remove stopPropagation if not a modal */}
          <img
            className="auth-logo"
            src={logo}
            alt="ReviveFitness_logo"
            onClick={(e) => {
              e.stopPropagation(); // Keep if you want to prevent bubbling to parent for some reason
              e.preventDefault(); // Prevent default link behavior if it were a link
              navigate('/', { replace: true }); // This will now work as intended
            }}
            style={{ cursor: 'pointer' }}
          />

        <form className="sign-in" onSubmit={handleSignup}>
          <h2>Sign Up</h2>

          {/* Toggle admin/member */}
          <label className="admin-toggle">
            <input
              type="checkbox"
              checked={isAdmin}
              onChange={() => setIsAdmin(!isAdmin)}
            />
            Sign up as Admin
          </label>

          {/* Show email or admin ID field */}
          {isAdmin ? (
            <>
              <p>Admin ID</p>
              <input
                type="text"
                placeholder="Enter your Admin ID"
                value={adminId}
                onChange={(e) => setAdminId(e.target.value)}
                required
              />
            </>
          ) : (
            <>
              <p>Email</p>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </>
          )}

          <p>Password</p>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <p>Confirm Password</p>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />

          {error && <div className="form-error">{error}</div>}

          <button type="submit">Sign Up</button>

          <Link to="/login" className="other-page-link" state={{ backgroundPath }}>
            Already a member?
          </Link>
          <Link to="/admin" className="other-page-link" state={{ backgroundPath }}>
            Login for Admin?
          </Link>
        </form>
      </div>
    </div> // Close the new container div
  );
}