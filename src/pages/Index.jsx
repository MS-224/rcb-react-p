import { useRef, useState } from 'react';
import { Play, Pause, VolumeX, Volume2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TeamPreview from '@/components/TeamPreview';
import FixturesPreview from '@/components/FixturesPreview';
import GalleryPreview from '@/components/GalleryPreview';
import NewsPreview from '@/components/NewsPreview';
import ShopPreview from '@/components/ShopPreview';
import SponsorsSection from '@/components/SponsorsSection';
import Footer from '@/components/Footer';

const Index = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleMuteUnmute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navigation />
      <div className="relative">
        <HeroSection
          videoRef={videoRef}
          isMuted={isMuted}
          isPlaying={isPlaying}
          handlePlayPause={handlePlayPause}
          handleMuteToggle={handleMuteUnmute}
        />
      </div>
      <TeamPreview />
      <FixturesPreview />
      <GalleryPreview />
      <NewsPreview />
      <ShopPreview />
      <SponsorsSection />
      <Footer />
    </div>
  );
};

export default Index;
