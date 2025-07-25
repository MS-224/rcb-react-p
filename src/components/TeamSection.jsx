import { useState } from 'react';
import { Search, Filter, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const TeamSection = () => {
  const [selectedTeam, setSelectedTeam] = useState('men');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [modalPlayer, setModalPlayer] = useState(null);

  // Add jersey numbers and detailed stats for all players
  const menPlayers = [
    { id: 1, name: 'Virat Kohli', role: 'Batter', image: '/placeholder.svg', jersey: 18, matches: 245, runs: 7263, avg: 37.25, highScore: 113, sr: 130.02, captain: true },
    { id: 2, name: 'Faf du Plessis', role: 'Batter', image: '/placeholder.svg', jersey: 18, matches: 124, runs: 3890, avg: 34.50, highScore: 96, sr: 131.22, captain: false },
    { id: 3, name: 'Glenn Maxwell', role: 'All-Rounder', image: '/placeholder.svg', jersey: 32, matches: 103, runs: 2771, avg: 25.10, highScore: 95, sr: 153.88, wickets: 30, economy: 7.8, bowlAvg: 25.2, bowlSR: 19.5, captain: false },
    { id: 4, name: 'Mohammed Siraj', role: 'Bowler', image: '/placeholder.svg', jersey: 13, matches: 93, wickets: 91, economy: 8.4, bowlAvg: 27.1, bowlSR: 19.2, captain: false },
    { id: 5, name: 'Wanindu Hasaranga', role: 'All-Rounder', image: '/placeholder.svg', jersey: 49, matches: 34, wickets: 43, economy: 7.7, bowlAvg: 20.5, bowlSR: 16.8, runs: 250, avg: 18.2, highScore: 37, sr: 120.1, captain: false },
    { id: 6, name: 'Josh Hazlewood', role: 'Bowler', image: '/placeholder.svg', jersey: 38, matches: 12, wickets: 12, economy: 7.9, bowlAvg: 23.4, bowlSR: 18.7, captain: false },
    { id: 7, name: 'Dinesh Karthik', role: 'Wicket-Keeper', image: '/placeholder.svg', jersey: 19, matches: 232, runs: 4127, avg: 26.5, highScore: 97, sr: 134.2, captain: false },
    { id: 8, name: 'Harshal Patel', role: 'Bowler', image: '/placeholder.svg', jersey: 9, matches: 67, wickets: 65, economy: 8.5, bowlAvg: 24.8, bowlSR: 17.9, captain: false },
  ];
  const womenPlayers = [
    { id: 1, name: 'Smriti Mandhana', role: 'Batter', image: '/placeholder.svg', jersey: 18, matches: 89, runs: 3267, avg: 28.5, highScore: 135, sr: 123.4, captain: true },
    { id: 2, name: 'Ellyse Perry', role: 'All-Rounder', image: '/placeholder.svg', jersey: 8, matches: 345, runs: 6453, avg: 34.2, highScore: 112, sr: 118.7, wickets: 297, economy: 6.2, bowlAvg: 21.3, bowlSR: 22.1, captain: false },
    { id: 3, name: 'Sophie Devine', role: 'All-Rounder', image: '/placeholder.svg', jersey: 77, matches: 298, runs: 5897, avg: 31.1, highScore: 99, sr: 129.5, wickets: 121, economy: 7.1, bowlAvg: 24.7, bowlSR: 20.5, captain: false },
    { id: 4, name: 'Richa Ghosh', role: 'Wicket-Keeper', image: '/placeholder.svg', jersey: 21, matches: 23, runs: 456, avg: 22.8, highScore: 44, sr: 110.2, captain: false },
    { id: 5, name: 'Poonam Yadav', role: 'Bowler', image: '/placeholder.svg', jersey: 24, matches: 123, wickets: 134, economy: 5.8, bowlAvg: 19.6, bowlSR: 18.2, captain: false },
    { id: 6, name: 'Shafali Verma', role: 'Batter', image: '/placeholder.svg', jersey: 17, matches: 67, runs: 1876, avg: 29.2, highScore: 89, sr: 132.7, captain: false },
  ];

  const currentPlayers = selectedTeam === 'men' ? menPlayers : womenPlayers;
  const roles = ['all', 'Batter', 'Bowler', 'All-Rounder', 'Wicket-Keeper'];

  const filteredPlayers = currentPlayers.filter(player => {
    const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === 'all' || player.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">
            OUR CHAMPIONS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the warriors who wear the RCB jersey with pride and passion
          </p>
        </div>

        {/* Team Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-muted rounded-full p-1 flex">
            <Button
              variant={selectedTeam === 'men' ? 'default' : 'ghost'}
              className={`rounded-full px-8 py-2 ${selectedTeam === 'men'
                ? 'bg-rcb-red text-white hover:bg-rcb-red/90'
                : 'text-foreground hover:text-rcb-red'}`}
              onClick={() => setSelectedTeam('men')}
            >
              <Users className="mr-2 h-4 w-4" />
              Men's Team
            </Button>
            <Button
              variant={selectedTeam === 'women' ? 'default' : 'ghost'}
              className={`rounded-full px-8 py-2 ${selectedTeam === 'women'
                ? 'bg-rcb-red text-white hover:bg-rcb-red/90'
                : 'text-foreground hover:text-rcb-red'}`}
              onClick={() => setSelectedTeam('women')}
            >
              <Users className="mr-2 h-4 w-4" />
              Women's Team
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search player name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {roles.map((role) => (
              <Button
                key={role}
                variant={selectedRole === role ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedRole(role)}
                className={selectedRole === role
                  ? 'bg-rcb-gold text-rcb-black hover:bg-rcb-gold/90'
                  : 'border-rcb-gold text-rcb-gold hover:bg-rcb-gold hover:text-rcb-black'}
              >
                <Filter className="mr-1 h-3 w-3" />
                {role === 'all' ? 'All Roles' : role}
              </Button>
            ))}
          </div>
        </div>

        {/* Players Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlayers.map((player) => (
            <Card key={player.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-rcb-red/50 cursor-pointer" onClick={() => setModalPlayer(player)}>
              <CardContent className="p-0 relative">
                {/* Jersey Number Top Left */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-rcb-black text-rcb-gold font-bold text-lg px-3 py-1 rounded-full shadow">{player.jersey}</span>
                </div>
                {/* Full Size Image */}
                <img src={player.image} alt={player.name} className="w-full h-64 object-cover rounded-t-lg" />
                {/* Name and Role Centered Below Image */}
                <div className="text-center py-6">
                  <h3 className="text-xl font-bold group-hover:text-rcb-red transition-colors mb-1">{player.name}</h3>
                  <span className="text-base text-rcb-gold font-semibold">{player.role}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPlayers.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-xl text-muted-foreground">No players found matching your search criteria</p>
          </div>
        )}

        {/* Player Stats Modal */}
        {modalPlayer && (
          <Dialog open={!!modalPlayer} onOpenChange={() => setModalPlayer(null)}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-center">IPL Career Stats</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col md:flex-row gap-6">
                {/* Left: Image, Name, Role */}
                <div className="flex-1 flex flex-col items-center border p-4 rounded-lg">
                  <div className="w-32 h-32 rounded-lg overflow-hidden mb-2 border-2 border-rcb-gold">
                    <img src={modalPlayer.image} alt={modalPlayer.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="font-bold text-lg mb-1">{modalPlayer.name}</div>
                  <div className="text-rcb-gold font-semibold mb-1">{modalPlayer.role}</div>
                  {modalPlayer.captain && <Badge className="bg-rcb-gold text-rcb-black">Captain</Badge>}
                </div>
                {/* Right: Stats */}
                <div className="flex-1 border p-4 rounded-lg">
                  <div className="font-semibold mb-2">IPL Career Stats</div>
                  <div className="border p-4 rounded-lg grid grid-cols-2 gap-4">
                    <div>Matches: <span className="font-bold">{modalPlayer.matches}</span></div>
                    {modalPlayer.role.includes('Bowler') || modalPlayer.wickets ? (
                      <>
                        <div>Wickets: <span className="font-bold text-rcb-red">{modalPlayer.wickets ?? '-'}</span></div>
                        <div>Economy: <span className="font-bold text-rcb-gold">{modalPlayer.economy ?? '-'}</span></div>
                        <div>Avg: <span className="font-bold text-rcb-gold">{modalPlayer.bowlAvg ?? '-'}</span></div>
                        <div>SR: <span className="font-bold text-rcb-gold">{modalPlayer.bowlSR ?? '-'}</span></div>
                      </>
                    ) : null}
                    {modalPlayer.role.includes('Batter') || modalPlayer.runs ? (
                      <>
                        <div>Runs: <span className="font-bold text-rcb-red">{modalPlayer.runs ?? '-'}</span></div>
                        <div>Avg: <span className="font-bold text-rcb-gold">{modalPlayer.avg ?? '-'}</span></div>
                        <div>High Score: <span className="font-bold text-rcb-gold">{modalPlayer.highScore ?? '-'}</span></div>
                        <div>SR: <span className="font-bold text-rcb-gold">{modalPlayer.sr ?? '-'}</span></div>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
};

export default TeamSection;