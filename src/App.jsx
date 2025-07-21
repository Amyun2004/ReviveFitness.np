// src/App.jsx
import './CSS/global.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; // Correct path
import Footer from './components/Footer/Footer'; // Correct path

import Home from './Pages/Home'; // Home now contains its specific sections
import About from './Pages/AboutPage';
import Programs from './Pages/Programs';
import Contact from './Pages/Contact';
import Login from './components/LoginPage/login';
import AdminLogin from './components/LoginPage/AdminLogin';
import SignupReviveFitness from './components/LoginPage/SignupReviveFitness';

// Import your global CSS file
// // This is where global styles are imported
import EmptySpace from './components/Navbar/EmptySpace';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/signup" element={<SignupReviveFitness />} />
      </Routes>
      
    </Router>
  );
}

export default App;