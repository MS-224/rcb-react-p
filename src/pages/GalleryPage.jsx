import Navigation from '@/components/Navigation';
import GallerySection from '@/components/GallerySection';

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <GallerySection />
      </div>
    </div>
  );
};

export default GalleryPage;