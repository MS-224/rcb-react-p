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
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navigation />
      <HeroSection />
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
