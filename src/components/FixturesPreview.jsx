import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Ticket, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FixturesPreview = () => {
  // Show only next 3 upcoming fixtures
  const upcomingFixtures = [
    {
      id: 1,
      opponent: 'Mumbai Indians',
      date: '2024-03-15',
      time: '19:30',
      venue: 'M. Chinnaswamy Stadium, Bangalore',
      matchType: 'IPL 2024',
      ticketsAvailable: true,
      ticketPrice: '₹500 - ₹5000'
    },
    {
      id: 2,
      opponent: 'Chennai Super Kings',
      date: '2024-03-20',
      time: '15:30',
      venue: 'M. A. Chidambaram Stadium, Chennai',
      matchType: 'IPL 2024',
      ticketsAvailable: true,
      ticketPrice: '₹400 - ₹4500'
    },
    {
      id: 3,
      opponent: 'Delhi Capitals',
      date: '2024-03-25',
      time: '19:30',
      venue: 'M. Chinnaswamy Stadium, Bangalore',
      matchType: 'IPL 2024',
      ticketsAvailable: false,
      ticketPrice: 'Sold Out'
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <section id="fixtures" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">
            UPCOMING MATCHES
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't miss the action! Get your tickets for the next RCB matches
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {upcomingFixtures.map((fixture) => (
            <Card key={fixture.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-rcb-red/50">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-rcb-gold text-rcb-black">
                    {fixture.matchType}
                  </Badge>
                  <div className="text-sm text-muted-foreground">
                    {formatDate(fixture.date)}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-rcb-red transition-colors">
                  RCB vs {fixture.opponent}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-muted-foreground text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-rcb-red" />
                    <span className="line-clamp-1">{fixture.venue}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Clock className="h-4 w-4 mr-2 text-rcb-red" />
                    <span>{fixture.time} IST</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <Ticket className="h-4 w-4 mr-2 text-rcb-gold" />
                      <span className="text-sm font-medium">{fixture.ticketPrice}</span>
                    </div>
                    {fixture.ticketsAvailable ? (
                      <Badge variant="outline" className="border-green-500 text-green-500">
                        Available
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="border-red-500 text-red-500">
                        Sold Out
                      </Badge>
                    )}
                  </div>
                  
                  <Button 
                    className={`w-full ${fixture.ticketsAvailable 
                      ? 'bg-rcb-red hover:bg-rcb-red/90 text-white' 
                      : 'bg-muted text-muted-foreground cursor-not-allowed'}`}
                    disabled={!fixture.ticketsAvailable}
                  >
                    {fixture.ticketsAvailable ? (
                      <>
                        <Ticket className="mr-2 h-4 w-4" />
                        Book Tickets
                      </>
                    ) : (
                      'Sold Out'
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/fixtures">
            <Button
              size="lg"
              className="bg-rcb-gold text-rcb-black hover:bg-rcb-gold/90 group"
            >
              View Full Schedule
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FixturesPreview;