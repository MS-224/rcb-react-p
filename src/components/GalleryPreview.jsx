import { Link } from 'react-router-dom';
import { ImageIcon, Play, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import p1 from '@/assets/gallery/p1.jpg';
import p2 from '@/assets/gallery/p2.jpg';
import p3 from '@/assets/gallery/p3.jpeg';
import p4 from '@/assets/gallery/p4.png';
import celeb1 from '@/assets/gallery/celeb-1.jpg';
import celeb2 from '@/assets/gallery/celeb-2.jpg';

const GalleryPreview = () => {
  // Show only featured/recent gallery items
  const featuredItems = [
    {
      id: 1,
      type: 'image',
      title: 'Virat Kohli Century Celebration',
      url: p1,
      likes: 12500,
      date: '2024-03-10'
    },
    {
      id: 2,
      type: 'video',
      title: 'Match Winning Six by Maxwell',
      url: p2,
      likes: 8900,
      date: '2024-03-08',
      duration: '0:45'
    },
    {
      id: 3,
      type: 'image',
      title: 'Victory Lap at Chinnaswamy',
      url: p3,
      likes: 15200,
      date: '2024-03-03'
    },
    {
      id: 4,
      type: 'video',
      title: 'Dressing Room Celebrations',
      url: p4,
      likes: 9800,
      date: '2024-03-01',
      duration: '1:20'
    },
    {
      id: 5,
      type: 'image',
      title: 'Faf du Plessis Power Hitting',
      url: celeb1,
      likes: 7300,
      date: '2024-02-28'
    },
    {
      id: 6,
      type: 'image',
      title: 'Mohammed Siraj Bowling Action',
      url: celeb2,
      likes: 6100,
      date: '2024-02-25'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">
            GALLERY HIGHLIGHTS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Capture the magic moments and unforgettable victories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-rcb-red/50">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-rcb-red/20 to-rcb-gold/20 flex items-center justify-center">
                  {item.type === 'image' ? (
                    <ImageIcon className="h-16 w-16 text-rcb-red/50" />
                  ) : (
                    <Play className="h-16 w-16 text-rcb-red/50" />
                  )}

                  {item.type === 'video' && (
                    <Badge className="absolute top-2 left-2 bg-rcb-black/80 text-white">
                      {item.duration}
                    </Badge>
                  )}

                  <div className="absolute inset-0 bg-rcb-black/0 group-hover:bg-rcb-black/40 transition-all duration-300 flex items-center justify-center">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-rcb-black hover:bg-white"
                    >
                      {item.type === 'image' ? 'View' : 'Play'}
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-sm mb-2 group-hover:text-rcb-red transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <Heart className="h-3 w-3 mr-1 text-rcb-red" />
                    <span>{item.likes.toLocaleString()}</span>
                  </div>
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/gallery">
            <Button
              size="lg"
              variant="outline"
              className="border-rcb-gold text-rcb-gold hover:bg-rcb-gold hover:text-rcb-black group"
            >
              View All Media
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 p-8 bg-gradient-to-r from-rcb-red/10 to-rcb-gold/10 rounded-2xl">
          <div className="text-center">
            <div className="text-3xl font-bold text-rcb-red mb-2">2500+</div>
            <div className="text-sm text-muted-foreground">Photos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-rcb-red mb-2">450+</div>
            <div className="text-sm text-muted-foreground">Videos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-rcb-red mb-2">1.2M+</div>
            <div className="text-sm text-muted-foreground">Total Views</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-rcb-red mb-2">85K+</div>
            <div className="text-sm text-muted-foreground">Downloads</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;