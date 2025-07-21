import React from "react";
import RandHandLogo from "../../assets/logo/RandHand.png";
import ReviveLogo from "../../assets/logo/Revivefitness.png";
import model from '../../assets/img_gym/sreejandaiback2a.png';
// REMOVE THIS LINE: import Signup from '../LoginPage/SignupReviveFitness';
// REMOVE THIS LINE: import {useState} from 'react';
import { Link } from 'react-router-dom'; // Import Link

export default function Intro() {
  // REMOVE THIS LINE: const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <section id="home" style={{backgroundImage: `url(${model})`}}>
        <div className="about-content">
          <img src={ReviveLogo} alt="ReviveFitness.np" id="logo" />
          <p className="quote">“Unleash your true self”</p>
          <p className="about-trainers">with Nepal's Best Trainer(s)</p>
          <div className="nav-btn">
            {/* Change this to Link */}
            <Link to="/signup">Join Us</Link>
          </div>
        </div>
      </section>

      <section className="section-about">
        <h1>
          About <span>ReviveFitness</span>
        </h1>
        <div className="content-about">
          <img
            src={RandHandLogo}
            alt="ReviveFitness Logo"
            className="logo-about"
          />
          <div className="text-about">
            <h2>Our Story</h2>
            <p>
              ReviveFitness.np was founded with a simple vision: to make fitness
              accessible, enjoyable, and sustainable for everyone in Nepal. We
              believe in a holistic approach to health—where mind, body, and
              community thrive together.
            </p>
          </div>
        </div>
      </section>

      {/* REMOVE THE ENTIRE MODAL RENDERING BLOCK */}
      {/*
      {showSignup && (
          <div
            className="modal-overlay"
            onClick={() => setShowSignup(false)}
            // ... rest of the style and content
          >
            <div
              className="modal-content"
              onClick={e => e.stopPropagation()}
              // ... rest of the style and content
            >
              <button
                className="modal-close"
                onClick={() => setShowSignup(false)}
                // ... rest of the style
              >
                ✖
              </button>
              <Signup />
            </div>
          </div>
      )}
      */}
    </>
  );
}