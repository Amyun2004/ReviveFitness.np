// src/Pages/Home.jsx

import React from 'react'; // Don't forget to import React
// Import the new specific Home page sections
import HeroSection from '../components/HeroSection/HeroSection';
import AboutIntroSection from '../components/AboutIntroSection/AboutIntroSection';

// Keep these as they are already separate components
import TrainerSection from "../components/TrainerSection/TrainerSection"; // Ensure correct path
import ProgramGallery from "../components/GallerySection/ProgramsProvided"; // Ensure correct path (you named it ProgramsProvided earlier, but ProgramGallery is in your tree)
import LocationSection from "../components/LocationSection/LocationSection"; // Ensure correct path

// Import your global CSS file // Make sure this path is correct for your new global.css

export default function Home() {
    return(
        <div>
            {/* The Navbar and Footer are now outside of the Routes in App.jsx.
                So, you likely don't need them directly in Home.jsx anymore,
                unless you intend them to appear ONLY on the Home page.
                Based on typical app structure, they usually wrap <Routes> in App.jsx.
                I'm going to assume you want them to wrap ALL pages,
                so they should be in App.jsx and REMOVED from Home.jsx.
                I'll provide the corrected App.jsx below too. */}
            
            <HeroSection/>
            <AboutIntroSection/>
            <TrainerSection/>
            <ProgramGallery/>
            <LocationSection/>
        </div>
    );
}