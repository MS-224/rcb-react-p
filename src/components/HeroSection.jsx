import { Button } from '@/components/ui/button';
import { Play, Pause, VolumeX, Volume2, ArrowRight } from 'lucide-react';
import heroVid from '@/assets/hero-vid.mp4';
import { Link } from 'react-router-dom';

const HeroSection = ({ videoRef, isMuted, isPlaying, handlePlayPause, handleMuteToggle }) => {
  return (
    <section id="home" className="relative h-screen flex items-end justify-center overflow-hidden pb-16">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVid}
        autoPlay
        loop
        muted={isMuted}
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-rcb-red/30 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center pb-32">
        <h1 className="text-3xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent leading-tight">
          ROYAL CHALLENGERS
        </h1>
        <h2 className="text-xl md:text-2xl font-bold mb-2">
          BANGALORE
        </h2>
        <p className="text-base md:text-lg mb-4 max-w-2xl mx-auto">
          Ee Sala Cup Namde! Join the RCB family and experience the passion, power, and pride of Bangalore.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <Link to="/team">
            <Button size="sm" className="bg-rcb-red hover:bg-rcb-red/90 text-white group">
              Explore Team
              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <a
            href="https://www.iplt20.com/video/63894/ipl-2025-final-rcb-vs-pbks---match-highlights"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" className="bg-gradient-to-r from-rcb-gold to-rcb-red text-white font-bold border-none group hover:from-yellow-400 hover:to-rcb-red/80">
              <Play className="mr-1 h-4 w-4 group-hover:scale-110 transition-transform" />
              Watch Highlights
            </Button>
          </a>
        </div>
      </div>

      {/* Bottom-right control buttons */}
      <div className="absolute bottom-4 right-4 z-20 flex gap-3">
        <button
          onClick={handlePlayPause}
          className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition"
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </button>
        <button
          onClick={handleMuteToggle}
          className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition"
        >
          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
