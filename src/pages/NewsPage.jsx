import Navigation from '@/components/Navigation';
import NewsSection from '@/components/NewsSection';

const NewsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <NewsSection />
      </div>
    </div>
  );
};

export default NewsPage;