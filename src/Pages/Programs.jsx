
import ProgramGallery from '../components/GallerySection/ProgramsProvided.jsx';
import ProgramPricingSection from '../components/PricingSection/PricingSection.jsx';
import CurrentChallenge from '../components/CurrentChallangesSection/CurrentChallenge.jsx';
import challangePng from '../assets/img_gym/90-day-transformation.png'
import EmptySpace from '../components/Navbar/EmptySpace.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';

export default function Programs() {

  const current = {
    imageUrl: challangePng,
    title: "90-day-challange",
    description: "Join us for 30 days of leg‑burning, strength‑building squats!",
  };
  return (
    
    <div>
      <EmptySpace/>
      <Navbar/>
      <CurrentChallenge{...current}/>
      <ProgramGallery/>
      <ProgramPricingSection/>
      <Footer/>
    </div>
  );
}
