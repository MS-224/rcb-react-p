import { useState } from 'react';
import { Calendar, MapPin, Clock, Ticket, Trophy, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const FixturesSection = () => {
  const [selectedTab, setSelectedTab] = useState('upcoming');
  const [bookingFixture, setBookingFixture] = useState(null);
  const [seatType, setSeatType] = useState('General');
  const [numPersons, setNumPersons] = useState(1);
  const { toast } = useToast();

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

  const allFixtures = [...fixtures.upcoming, ...fixtures.completed];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Add a mapping for team logos
  const teamLogos = {
    'RCB': '/placeholder.svg',
    'Mumbai Indians': '/placeholder.svg',
    'Chennai Super Kings': '/placeholder.svg',
    'Delhi Capitals': '/placeholder.svg',
    'Kolkata Knight Riders': '/placeholder.svg',
    'Punjab Kings': '/placeholder.svg',
    'Rajasthan Royals': '/placeholder.svg',
    'Sunrisers Hyderabad': '/placeholder.svg',
    'Lucknow Super Giants': '/placeholder.svg',
    'Gujarat Titans': '/placeholder.svg',
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
        {/* Toggle Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-background rounded-full p-1 flex shadow-lg">
            <Button
              variant={selectedTab === 'upcoming' ? 'default' : 'ghost'}
              className={`rounded-full px-8 py-2 ${selectedTab === 'upcoming' ? 'bg-rcb-red text-white hover:bg-rcb-red/90' : 'text-foreground hover:text-rcb-red'}`}
              onClick={() => setSelectedTab('upcoming')}
            >
              Upcoming Matches
            </Button>
            <Button
              variant={selectedTab === 'completed' ? 'default' : 'ghost'}
              className={`rounded-full px-8 py-2 ${selectedTab === 'completed' ? 'bg-rcb-gold text-rcb-black hover:bg-rcb-gold/90' : 'text-foreground hover:text-rcb-gold'}`}
              onClick={() => setSelectedTab('completed')}
            >
              Completed Matches
            </Button>
            <Button
              variant={selectedTab === 'full' ? 'default' : 'ghost'}
              className={`rounded-full px-8 py-2 ${selectedTab === 'full' ? 'bg-rcb-black text-white hover:bg-rcb-black/90' : 'text-foreground hover:text-rcb-black'}`}
              onClick={() => setSelectedTab('full')}
            >
              Full Schedule
            </Button>
          </div>
        </div>
        {/* Section Rendering */}
        {selectedTab === 'upcoming' && (
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-6 text-rcb-red text-center">Upcoming Matches</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {fixtures.upcoming.map((fixture) => (
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
                    <div className="flex items-center justify-center gap-6 mb-2">
                      <img src={teamLogos[fixture.opponent] || '/placeholder.svg'} alt={fixture.opponent} className="w-14 h-14 rounded-full bg-white object-contain border-2 border-rcb-gold" />
                      <span className="text-lg font-bold text-white bg-rcb-black px-2 py-1 rounded">vs</span>
                      <img src={teamLogos['RCB']} alt="RCB" className="w-14 h-14 rounded-full bg-white object-contain border-2 border-rcb-gold" />
                    </div>
                    <CardTitle className="text-2xl group-hover:text-rcb-red transition-colors text-center">
                      RCB vs {fixture.opponent}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
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
                        onClick={() => {
                          setBookingFixture(fixture);
                          setSeatType('General');
                          setNumPersons(1);
                        }}
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
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
        {selectedTab === 'completed' && (
          <div>
            <h3 className="text-2xl font-bold mb-6 text-rcb-gold text-center">Completed Matches</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {fixtures.completed.map((fixture) => (
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
                    <div className="flex items-center justify-center gap-6 mb-2">
                      <img src={teamLogos[fixture.opponent] || '/placeholder.svg'} alt={fixture.opponent} className="w-14 h-14 rounded-full bg-white object-contain border-2 border-rcb-gold" />
                      <span className="text-lg font-bold text-white bg-rcb-black px-2 py-1 rounded">vs</span>
                      <img src={teamLogos['RCB']} alt="RCB" className="w-14 h-14 rounded-full bg-white object-contain border-2 border-rcb-gold" />
                    </div>
                    <CardTitle className="text-2xl group-hover:text-rcb-red transition-colors text-center">
                      RCB vs {fixture.opponent}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
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
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
        {selectedTab === 'full' && (
          <>
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-6 text-rcb-red text-center">Upcoming Matches</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {fixtures.upcoming.map((fixture) => (
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
                      <div className="flex items-center justify-center gap-6 mb-2">
                        <img src={teamLogos[fixture.opponent] || '/placeholder.svg'} alt={fixture.opponent} className="w-14 h-14 rounded-full bg-white object-contain border-2 border-rcb-gold" />
                        <span className="text-lg font-bold text-white bg-rcb-black px-2 py-1 rounded">vs</span>
                        <img src={teamLogos['RCB']} alt="RCB" className="w-14 h-14 rounded-full bg-white object-contain border-2 border-rcb-gold" />
                      </div>
                      <CardTitle className="text-2xl group-hover:text-rcb-red transition-colors text-center">
                        RCB vs {fixture.opponent}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
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
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-rcb-gold text-center">Completed Matches</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {fixtures.completed.map((fixture) => (
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
                      <div className="flex items-center justify-center gap-6 mb-2">
                        <img src={teamLogos[fixture.opponent] || '/placeholder.svg'} alt={fixture.opponent} className="w-14 h-14 rounded-full bg-white object-contain border-2 border-rcb-gold" />
                        <span className="text-lg font-bold text-white bg-rcb-black px-2 py-1 rounded">vs</span>
                        <img src={teamLogos['RCB']} alt="RCB" className="w-14 h-14 rounded-full bg-white object-contain border-2 border-rcb-gold" />
                      </div>
                      <CardTitle className="text-2xl group-hover:text-rcb-red transition-colors text-center">
                        RCB vs {fixture.opponent}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
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
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      {/* Booking Modal */}
      <Dialog open={!!bookingFixture} onOpenChange={open => { if (!open) setBookingFixture(null); }}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Book Tickets</DialogTitle>
          </DialogHeader>
          {bookingFixture && (
            <div className="space-y-4">
              <div className="text-lg font-bold text-center mb-2">RCB vs {bookingFixture.opponent}</div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{bookingFixture.venue}</span>
                <span>{formatDate(bookingFixture.date)} | {bookingFixture.time} IST</span>
              </div>
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                <div className="flex-1">
                  <label className="block mb-1 font-medium">Seat Type</label>
                  <select
                    className="w-full border rounded-lg p-2"
                    value={seatType}
                    onChange={e => setSeatType(e.target.value)}
                  >
                    <option value="General">General</option>
                    <option value="Premium">Premium</option>
                    <option value="VIP">VIP</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block mb-1 font-medium">Number of Persons</label>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    value={numPersons}
                    onChange={e => setNumPersons(Number(e.target.value))}
                    className="w-full border rounded-lg p-2"
                  />
                </div>
              </div>
              <Button
                className="w-full bg-rcb-red hover:bg-rcb-red/90 text-white text-lg py-3 rounded-xl font-bold mt-4"
                onClick={() => {
                  setBookingFixture(null);
                  toast({
                    title: 'Booking Confirmed!',
                    description: `You have booked ${numPersons} ${seatType} ticket(s) for RCB vs ${bookingFixture.opponent}. Enjoy the match!`,
                  });
                }}
              >
                Confirm Booking
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FixturesSection;