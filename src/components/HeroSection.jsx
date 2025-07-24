import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';
import rcbHero from '@/assets/rcb-hero.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${rcbHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-rcb-red/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent leading-tight">
          ROYAL CHALLENGERS
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          BANGALORE
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Ee Sala Cup Namde! Join the RCB family and experience the passion, power, and pride of Bangalore.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Button
            size="lg"
            className="hero-btn-primary group"
          >
            Explore Team
            <ArrowRight className="hero-btn-arrow group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="hero-btn-outline group"
          >
            <Play className="hero-btn-play group-hover:scale-110 transition-transform" />
            Watch Highlights
          </Button>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="hero-scroll-wrap">
        <div className="hero-scroll">
          <div className="hero-scroll-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;