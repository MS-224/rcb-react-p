import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const TeamPreview = () => {
  // Captain data
  const captains = [
    {
      id: 1,
      name: 'Virat Kohli',
      image: '/placeholder.svg', // Replace with real image if available
      jersey: 18,
      team: 'Men',
    },
    {
      id: 2,
      name: 'Smriti Mandhana',
      image: '/placeholder.svg', // Replace with real image if available
      jersey: 18,
      team: 'Women',
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">
            OUR CAPTAINS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the leaders who inspire our teams with their passion and dedication
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {captains.map((captain) => (
            <Card key={captain.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-rcb-red/50">
              <CardContent className="p-0 relative">
                {/* Jersey Number Top Left */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-rcb-black text-rcb-gold font-bold text-lg px-3 py-1 rounded-full shadow">{captain.jersey}</span>
                </div>
                {/* Team Badge Top Right */}
                <div className="absolute top-3 right-3 z-10">
                  <span className={`bg-rcb-gold text-rcb-black font-bold text-xs px-3 py-1 rounded-full shadow`}>
                    {captain.team === 'Men' ? '#mens' : '#woment'}
                  </span>
                </div>
                {/* Full Size Image */}
                <img src={captain.image} alt={captain.name} className="w-full h-80 object-cover rounded-t-lg" />
                {/* Name Centered Below Image */}
                <div className="text-center py-6">
                  <h3 className="text-2xl font-bold group-hover:text-rcb-red transition-colors">
                    {captain.name}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/team">
            <Button
              size="lg"
              className="bg-rcb-red hover:bg-rcb-red/90 text-white group"
            >
              Explore Full Team
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;