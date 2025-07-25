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
      image: '/placeholder.svg',
      bg: '/placeholder.svg',
      jersey: 18,
      team: 'Men',
    },
    {
      id: 2,
      name: 'Smriti Mandhana',
      image: '/placeholder.svg',
      bg: '/placeholder.svg',
      jersey: 18,
      team: 'Women',
    }
  ];

  return (
    <section id="team" className="py-20 bg-[linear-gradient(to_bottom,_#000000,_#ff0000)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">
            OUR CAPTAINS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the leaders who inspire our teams with their passion and dedication
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {captains.map((captain, idx) => (
            <Card key={captain.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-rcb-red/50 max-w-[480px] mx-auto">
              <CardContent className="p-0 relative">
                {/* Background Image */}
                <img src={captain.bg} alt="bg" className={`absolute top-0 left-0 w-full h-[28rem] object-cover z-0 ${idx === 0 ? 'object-left' : 'object-right'}`} style={{ pointerEvents: 'none' }} />
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
                {/* Captain Image */}
                <img src={captain.image} alt={captain.name} className="relative w-full h-[28rem] object-contain object-center z-10" />
                {/* Name Bar */}
                <div className="absolute bottom-0 left-0 w-full bg-black/60 py-4 text-center z-20 rounded-b-lg">
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