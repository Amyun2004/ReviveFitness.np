import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../CSS/auth.css';
import logo from '../../assets/logo/RandHand.png';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use const for useNavigate

  // No need for backgroundPath if it's a dedicated page
  // const location = useLocation();
  // const backgroundPath = location.state?.backgroundPath;

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in as: ${email}`);
    // After successful login, you might want to navigate the user
    // navigate('/'); // Example: Go to home page after login
  };

  return (
    // REMOVE THE MODAL OVERLAY DIV. Replace it with a main container for the page.
    // <div className="modal-overlay" onClick={() => navigate(backgroundPath)}>
    <div className="auth-page-container"> {/* A new div to act as the main page container */}
      {/* Remove the onClick from the auth-modal as it's no longer a modal */}
      <div className="auth-modal">
        {/* The Link to="/" is correct for logo navigation */}
        <Link to="/" className="auth-logo-link">
          <img className="auth-logo" src={logo} alt="ReviveFitness_logo" />
        </Link>

        <form className="log-in" onSubmit={handleLogin}>
          <h2>Login</h2>
          <p>Email</p>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <button type="submit">Login</button>

          {/* These links are correct, but consider if `backgroundPath` is still needed for them */}
          {/* If backgroundPath is only for modal closing, you can simplify these links */}
          <Link to="/signup" className="other-page-link" /* state={{ backgroundPath }} */>
            Don't have an account?
          </Link>
          <Link to="/admin" className="other-page-link" /* state={{ backgroundPath }} */>
            Login as Admin
          </Link>
        </form>
      </div>
    </div> // Close the new container div
  );
}