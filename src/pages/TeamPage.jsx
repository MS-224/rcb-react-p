import Navigation from '@/components/Navigation';
import TeamSection from '@/components/TeamSection';

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <TeamSection />
      </div>
    </div>
  );
};

export default TeamPage;