import { useState } from 'react';
import { Calendar, MapPin, Clock, Ticket, Trophy, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FixturesSection = () => {
  const [selectedTab, setSelectedTab] = useState('upcoming');

  // Mock fixture data
  const fixtures = {
    upcoming: [
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
      },
      {
        id: 4,
        opponent: 'Kolkata Knight Riders',
        date: '2024-04-02',
        time: '19:30',
        venue: 'Eden Gardens, Kolkata',
        matchType: 'IPL 2024',
        ticketsAvailable: true,
        ticketPrice: '₹600 - ₹6000'
      }
    ],
    completed: [
      {
        id: 5,
        opponent: 'Punjab Kings',
        date: '2024-03-08',
        time: '19:30',
        venue: 'M. Chinnaswamy Stadium, Bangalore',
        matchType: 'IPL 2024',
        result: 'Won by 6 wickets',
        scoreRCB: '180/4 (20)',
        scoreOpp: '176/8 (20)'
      },
      {
        id: 6,
        opponent: 'Rajasthan Royals',
        date: '2024-03-03',
        time: '15:30',
        venue: 'Sawai Mansingh Stadium, Jaipur',
        matchType: 'IPL 2024',
        result: 'Lost by 4 runs',
        scoreRCB: '165/9 (20)',
        scoreOpp: '169/7 (20)'
      }
    ]
  };

  const currentFixtures = fixtures[selectedTab as keyof typeof fixtures];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="fixtures" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">
            FIXTURES & RESULTS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't miss a single moment of RCB action. Book your tickets now!
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-background rounded-full p-1 flex shadow-lg">
            <Button
              variant={selectedTab === 'upcoming' ? 'default' : 'ghost'}
              className={`rounded-full px-8 py-2 ${selectedTab === 'upcoming' 
                ? 'bg-rcb-red text-white hover:bg-rcb-red/90' 
                : 'text-foreground hover:text-rcb-red'}`}
              onClick={() => setSelectedTab('upcoming')}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Upcoming Matches
            </Button>
            <Button
              variant={selectedTab === 'completed' ? 'default' : 'ghost'}
              className={`rounded-full px-8 py-2 ${selectedTab === 'completed' 
                ? 'bg-rcb-red text-white hover:bg-rcb-red/90' 
                : 'text-foreground hover:text-rcb-red'}`}
              onClick={() => setSelectedTab('completed')}
            >
              <Trophy className="mr-2 h-4 w-4" />
              Recent Results
            </Button>
          </div>
        </div>

        {/* Fixtures Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {currentFixtures.map((fixture) => (
            <Card key={fixture.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-2 hover:border-rcb-red/50">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <Badge className="bg-rcb-gold text-rcb-black">
                    {fixture.matchType}
                  </Badge>
                  <div className="text-right text-sm text-muted-foreground">
                    {formatDate(fixture.date)}
                  </div>
                </div>
                <CardTitle className="text-2xl group-hover:text-rcb-red transition-colors">
                  RCB vs {fixture.opponent}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Match Details */}
                <div className="space-y-3">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-rcb-red" />
                    <span className="text-sm">{fixture.venue}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 text-rcb-red" />
                    <span className="text-sm">{fixture.time} IST</span>
                  </div>
                </div>

                {/* Upcoming Match Actions */}
                {selectedTab === 'upcoming' && (
                  <div className="pt-4 border-t border-border">
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
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      ) : (
                        'Tickets Sold Out'
                      )}
                    </Button>
                  </div>
                )}

                {/* Completed Match Results */}
                {selectedTab === 'completed' && 'result' in fixture && (
                  <div className="pt-4 border-t border-border">
                    <div className="text-center mb-3">
                      <Badge 
                        className={`${fixture.result.includes('Won') 
                          ? 'bg-green-500 text-white' 
                          : 'bg-red-500 text-white'}`}
                      >
                        {fixture.result}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-3 bg-rcb-red/10 rounded-lg">
                        <div className="text-sm font-medium text-rcb-red mb-1">RCB</div>
                        <div className="text-lg font-bold">{fixture.scoreRCB}</div>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="text-sm font-medium mb-1">{fixture.opponent}</div>
                        <div className="text-lg font-bold">{fixture.scoreOpp}</div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-rcb-gold text-rcb-black hover:bg-rcb-gold/90 px-8 py-6 text-lg font-semibold"
          >
            View Full Schedule
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FixturesSection;