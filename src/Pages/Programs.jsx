
import ProgramGallery from '../components/GallerySection/ProgramsProvided.jsx';
import ProgramPricingSection from '../components/PricingSection/PricingSection.jsx';
import CurrentChallenge from '../components/CurrentChallangesSection/CurrentChallenge.jsx';
import challangePng from '../assets/img_gym/90-day-transformation.png'


export default function Programs() {

  const current = {
    imageUrl: challangePng,
    title: "90-day-challange",
    description: "Join us for 30 days of leg‑burning, strength‑building squats!",
  };
  return (
    
    <div>
      <CurrentChallenge{...current}/>
      <ProgramGallery/>
      <ProgramPricingSection/>
    </div>
  );
}
