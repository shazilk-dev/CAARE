
import Navbar from "./Navbar";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <section className="relative h-screen bg-gradient-to-br from-[#2cb5e8] to-[#7d2ae8]">
            <Navbar />
      <HeroContent />
    </section>
  );
};

export default Hero;
