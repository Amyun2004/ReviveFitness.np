// src/Pages/AboutPage.jsx

import React from 'react';
import AboutSection from '../components/AboutSection/AboutSection'; // New modularized About section
import TrainerSection from '../components/TrainerSection/TrainerSection'; // Updated Trainer section
import LocationSection from '../components/LocationSection/LocationSection'; // Ensure correct path for LocationSection
import Navbar from '../components/Navbar/Navbar';
import EmptySpace from '../components/Navbar/EmptySpace';
import Footer from '../components/Footer/Footer';


export default function About() {
  return (
    <>
      <EmptySpace/>
      <Navbar />
      <AboutSection />
      <TrainerSection />
      <LocationSection />
      <Footer />
    </>
  );
}