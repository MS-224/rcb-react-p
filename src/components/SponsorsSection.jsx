import { Building2, Handshake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import s1 from '@/assets/sponsers/s1.jpeg';
import s2 from '@/assets/sponsers/s2.png';
import s3 from '@/assets/sponsers/s3.png';
import s4 from '@/assets/sponsers/s4.png';
import s5 from '@/assets/sponsers/s5.png';
import s6 from '@/assets/sponsers/s6.png';

const SponsorsSection = () => {
  const sponsors = [
    {
      id: 1,
      name: 'Myntra',
      category: 'Official Partner',
      logo: s1,
      description: 'Fashion & Lifestyle Partner',
      tier: 'primary'
    },
    {
      id: 2,
      name: 'UB Group',
      category: 'Title Sponsor',
      logo: s2,
      description: 'Strategic Business Partner',
      tier: 'primary'
    },
    {
      id: 3,
      name: 'Muthoot FinCorp',
      category: 'Associate Partner',
      logo: s3,
      description: 'Financial Services Partner',
      tier: 'secondary'
    },
    {
      id: 4,
      name: 'Zomato',
      category: 'Official Partner',
      logo: s4,
      description: 'Food Delivery Partner',
      tier: 'secondary'
    },
    {
      id: 5,
      name: 'Gulf Oil',
      category: 'Associate Partner',
      logo: s5,
      description: 'Lubricants Partner',
      tier: 'secondary'
    },
    {
      id: 6,
      name: 'Puma',
      category: 'Kit Partner',
      logo: s6,
      description: 'Official Kit & Merchandise',
      tier: 'secondary'
    }
  ];

  const primarySponsors = sponsors.filter(s => s.tier === 'primary');
  const secondarySponsors = sponsors.filter(s => s.tier === 'secondary');

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">
            OUR PARTNERS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proud to partner with leading brands who share our passion for excellence
          </p>
        </div>

        {/* Primary Sponsors */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <Handshake className="h-6 w-6 text-rcb-red mr-2" />
            <h3 className="text-2xl font-bold text-rcb-red">Principal Partners</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {primarySponsors.map((sponsor) => (
              <Card key={sponsor.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-rcb-red/50">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-rcb-red to-rcb-gold flex items-center justify-center">
                    <img src={sponsor.logo} alt={sponsor.name} className="w-16 h-16 object-contain" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-rcb-red transition-colors">
                    {sponsor.name}
                  </h4>
                  <Badge className="bg-rcb-gold text-rcb-black mb-3">
                    {sponsor.category}
                  </Badge>
                  <p className="text-muted-foreground">{sponsor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Secondary Sponsors */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <Building2 className="h-6 w-6 text-rcb-gold mr-2" />
            <h3 className="text-2xl font-bold text-rcb-gold">Associate Partners</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondarySponsors.map((sponsor) => (
              <Card key={sponsor.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r from-rcb-gold to-rcb-red flex items-center justify-center">
                    <img src={sponsor.logo} alt={sponsor.name} className="w-12 h-12 object-contain" />
                  </div>
                  <h5 className="font-bold mb-1 group-hover:text-rcb-gold transition-colors">
                    {sponsor.name}
                  </h5>
                  <Badge variant="outline" className="border-rcb-gold text-rcb-gold text-xs mb-2">
                    {sponsor.category}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{sponsor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 p-8 bg-gradient-to-r from-rcb-red/10 to-rcb-gold/10 rounded-lg">
          <h4 className="text-xl font-bold mb-2">Interested in Partnering with RCB?</h4>
          <p className="text-muted-foreground mb-4">
            Join our family of partners and be part of the RCB legacy
          </p>
          <button className="bg-rcb-red hover:bg-rcb-red/90 text-white px-6 py-2 rounded-lg transition-colors">
            Contact Partnership Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;