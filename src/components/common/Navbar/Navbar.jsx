import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../../../assets/logo/RandHand.png';
import menuIcon from '../../../assets/button_imgs/menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
import closeIcon from '../../../assets/button_imgs/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';

// Import the CSS Module
import styles from './Navbar.module.css'; // <--- THIS IS THE NEW IMPORT


export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Apply styles.header to the header tag */}
      <header className={styles.header}>
        {/* Apply styles.navbar to the nav tag */}
        <nav className={styles.navbar}>
          {/* Apply styles.logo to the Link, not the img */}
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="ReviveFitness.np" />
          </Link>
          {/* Apply styles.navbarNav to the ul with current class "navbar" */}
          <ul className={styles.navbarNav}>
            {/* Apply styles.hideOnMobile to each Link where it's currently present */}
            <li><Link to="/" className={styles.hideOnMobile}>Home</Link></li>
            <li><Link to="/about" className={styles.hideOnMobile}>About</Link></li>
            <li><Link to="/programs" className={styles.hideOnMobile}>Programs</Link></li>
            <li><Link to="/contact" className={styles.hideOnMobile}>Contact</Link></li>
            <li><a href="#Products" className={styles.hideOnMobile}>Membership</a></li>
          </ul>

          {/* Apply styles.menuButton to the div */}
          <div className={styles.menuButton}>
            <a href="#" onClick={e => {
              e.preventDefault();
              setSidebarOpen(true);
            }}>
              <img src={menuIcon} alt="sidebar" />
            </a>
          </div>

          {/* This "Join Us" button is for desktop/large screens */}
          {/* Apply styles.navBtnDesktop and also global 'nav-btn' */}
          <div className={`${styles.navBtnDesktop} nav-btn`}> {/* Keeping 'nav-btn' from global.css for shared styling */}
            <Link to="/signup">Join Us</Link>
          </div>

          {sidebarOpen && (
            // The overlay for the sidebar to cover the screen
            // Apply styles.sidebarOverlay
            <div className={styles.sidebarOverlay} onClick={() => setSidebarOpen(false)}>
              {/* Apply styles.sidebar and styles.active conditionally */}
              <ul className={`${styles.sidebar} ${sidebarOpen ? styles.active : ''}`} onClick={e => e.stopPropagation()}> {/* Prevent clicks inside sidebar from closing it */}
                {/* Apply styles.sidebarLogo to the Link */}
                <Link to="/" className={styles.sidebarLogo} onClick={() => setSidebarOpen(false)}>
                  <img src={logo} alt="ReviveFitness.np" />
                </Link>
                <li>
                  {/* Close button for sidebar - apply styles.hideButton */}
                  <a className={styles.hideButton} href="#" onClick={e => {
                    e.preventDefault();
                    setSidebarOpen(false);
                  }}>
                    {/* The image inside hideButton doesn't need its own class in JSX if it's styled via parent in CSS */}
                    <img src={closeIcon} alt="close" />
                  </a>
                </li>
                {/* Apply styles.sidebarLink to each Link */}
                <li><Link to="/" className={styles.sidebarLink} onClick={() => setSidebarOpen(false)}>Home</Link></li>
                <li><Link to="/about" className={styles.sidebarLink} onClick={() => setSidebarOpen(false)}>About</Link></li>
                <li><Link to="/programs" className={styles.sidebarLink} onClick={() => setSidebarOpen(false)}>Programs</Link></li>
                <li><Link to="/contact" className={styles.sidebarLink} onClick={() => setSidebarOpen(false)}>Contact</Link></li>
                <li><Link to="#Products" className={styles.sidebarLink} onClick={() => setSidebarOpen(false)}>Membership</Link></li>

                {/* Apply styles.navBtnSidebar */}
                <Link to="/signup" className={styles.navBtnSidebar} onClick={() => setSidebarOpen(false)}>
                  Join Us
                </Link>
              </ul>
            </div> // Close sidebar-overlay
          )}
        </nav>
      </header>
    </>
  );
}