import Navigation from '@/components/Navigation';
import FixturesSection from '@/components/FixturesSection';

const FixturesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <FixturesSection />
      </div>
    </div>
  );
};

export default FixturesPage;