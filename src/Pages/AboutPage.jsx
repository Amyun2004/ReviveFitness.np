// src/Pages/AboutPage.jsx

import React from 'react';
import AboutSection from '../components/AboutPage/AboutSection/AboutSection'; // New modularized About section
import TrainerSection from '../components/AboutPage/TrainerSection/TrainerSection'; // Updated Trainer section
import LocationSection from '../components/AboutPage/LocationSection'; // Ensure correct path for LocationSection



export default function About() {
  return (
    <>
      <AboutSection />
      <TrainerSection />
      <LocationSection />
    </>
  );
}