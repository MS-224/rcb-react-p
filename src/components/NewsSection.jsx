import { useState } from 'react';
import { Calendar, User, ArrowRight, TrendingUp, MessageSquare, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';
import news0 from '@/assets/news/news-0.jpg';
import news1 from '@/assets/news/news-1.jpg';
import news3 from '@/assets/news/news-3.jpg';
import news4 from '@/assets/news/news-4.png';

const NewsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedArticle, setExpandedArticle] = useState(null); // For modal
  const [articlesToShow, setArticlesToShow] = useState(6); // Show 6 by default
  const [allLoaded, setAllLoaded] = useState(false);
  const navigate = useNavigate();

  const categories = ['all', 'team-news', 'match-reports', 'transfers', 'interviews'];

  // Mock news data
  const newsArticles = [
    {
      id: 1,
      category: 'team-news',
      title: 'Virat Kohli Returns to Form with Magnificent Century',
      excerpt: 'The RCB captain played a masterful innings, scoring his first century of the season against Mumbai Indians at the Chinnaswamy Stadium.',
      author: 'RCB Media Team',
      date: '2024-03-12',
      readTime: '3 min read',
      trending: true,
      comments: 245,
      shares: 1200,
      image: news0
    },
    {
      id: 2,
      category: 'match-reports',
      title: 'RCB Defeats Punjab Kings in Thrilling Last-Ball Finish',
      excerpt: 'A nail-biting encounter saw RCB chase down 181 runs with Glenn Maxwell hitting the winning six off the last ball of the match.',
      author: 'Sports Correspondent',
      date: '2024-03-10',
      readTime: '5 min read',
      trending: false,
      comments: 189,
      shares: 850,
      image: news1
    },
    {
      id: 3,
      category: 'transfers',
      title: 'RCB Signs New Fast Bowler for Upcoming Season',
      excerpt: 'The franchise has announced the signing of promising young fast bowler who impressed in domestic cricket this year.',
      author: 'Transfer News',
      date: '2024-03-08',
      readTime: '2 min read',
      trending: true,
      comments: 156,
      shares: 620,
      image: news3
    },
    {
      id: 4,
      category: 'interviews',
      title: 'Faf du Plessis Talks About Team Strategy and Leadership',
      excerpt: 'In an exclusive interview, the RCB opener discusses the teams preparation and his role as a senior player in the squad.',
      author: 'RCB Insider',
      date: '2024-03-06',
      readTime: '4 min read',
      trending: false,
      comments: 98,
      shares: 420,
      image: news4
    },
    {
      id: 5,
      category: 'team-news',
      title: 'Chinnaswamy Stadium Gets Major Upgrades for New Season',
      excerpt: 'The iconic venue has undergone significant improvements including new facilities for fans and enhanced player amenities.',
      author: 'Stadium Management',
      date: '2024-03-04',
      readTime: '3 min read',
      trending: false,
      comments: 134,
      shares: 380,
      image: news0
    },
    {
      id: 6,
      category: 'match-reports',
      title: 'Mohammed Siraj Destroys Opposition with Five-Wicket Haul',
      excerpt: 'The pace spearhead delivered a devastating bowling performance, taking 5 wickets for just 25 runs in his four overs.',
      author: 'Match Reporter',
      date: '2024-03-02',
      readTime: '4 min read',
      trending: true,
      comments: 278,
      shares: 950,
      image: news1
    }
  ];

  const filteredNews = newsArticles.filter(article =>
    selectedCategory === 'all' || article.category === selectedCategory
  );

  const visibleNews = filteredNews.slice(0, articlesToShow);

  const formatCategory = (category) => {
    return category.split('-').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="news" className="py-20 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">
            LATEST NEWS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest happenings from the RCB camp
          </p>
        </div>
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category
                ? 'bg-rcb-red text-white hover:bg-rcb-red/90'
                : 'bg-transparent text-rcb-red hover:bg-rcb-red/10'
              }
            >
              {formatCategory(category)}
            </Button>
          ))}
        </div>
        {/* Featured Article */}
        {visibleNews.length > 0 && (
          <Card className="overflow-hidden border-2 border-rcb-red/20 hover:border-rcb-red/50 transition-all">
            <div className="flex flex-col md:flex-row">
              {/* Left: Icon/Badge/Image */}
              <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-rcb-red/10 to-rcb-gold/10 p-8">
                <div className="text-center">
                  <TrendingUp className="w-16 h-16 text-rcb-red mx-auto mb-4" />
                  <Badge className="bg-rcb-red text-white">Featured Story</Badge>
                </div>
              </div>
              {/* Right: Content */}
              <div className="flex-1 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-rcb-gold text-rcb-black">
                    {formatCategory(visibleNews[0].category)}
                  </Badge>
                  {visibleNews[0].trending && (
                    <Badge variant="outline" className="border-rcb-red text-rcb-red flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      Trending
                    </Badge>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-2">{visibleNews[0].title}</h3>
                <p className="text-muted-foreground mb-4">{visibleNews[0].excerpt}</p>
                <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {visibleNews[0].author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {formatDate(visibleNews[0].date)}
                  </div>
                  <span>{visibleNews[0].readTime}</span>
                </div>
                <Button className="bg-rcb-red text-white hover:bg-rcb-red/90 font-semibold" onClick={() => navigate(`/news/${visibleNews[0].id}`)}>
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        )}
        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleNews.slice(1).map((article) => (
            <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-2 hover:border-rcb-red/50">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-rcb-gold text-rcb-black">
                    {formatCategory(article.category)}
                  </Badge>
                  {article.trending && (
                    <Badge variant="outline" className="border-rcb-red text-rcb-red">
                      Hot
                    </Badge>
                  )}
                </div>
                <h3 className="text-lg font-bold group-hover:text-rcb-red transition-colors cursor-pointer line-clamp-2">
                  {article.title}
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <MessageSquare className="h-3 w-3 mr-1" />
                    <span>{article.comments}</span>
                  </div>
                  <div className="flex items-center">
                    <Share2 className="h-3 w-3 mr-1" />
                    <span>{article.shares}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="news-card-date">
                    <Calendar className="h-3 w-3" />
                    {formatDate(article.date)}
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full border-rcb-gold text-rcb-gold hover:bg-rcb-gold hover:text-rcb-black" onClick={() => navigate(`/news/${article.id}`)}>
                  Read Full Article
                  <ArrowRight className="news-card-readmore-icon" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Load More and Newsletter Signup */}
        <div className="mt-12 flex flex-col gap-8">
          <div className="text-center">
            {!allLoaded ? (
              <Button
                size="lg"
                variant="outline"
                className="border-rcb-gold text-rcb-gold hover:bg-rcb-gold hover:text-rcb-black px-8 py-6 text-lg font-semibold"
                onClick={() => {
                  if (articlesToShow >= filteredNews.length) {
                    setAllLoaded(true);
                  } else {
                    setArticlesToShow((prev) => {
                      const next = prev + 3;
                      if (next >= filteredNews.length) {
                        setAllLoaded(true);
                        return filteredNews.length;
                      }
                      return next;
                    });
                  }
                }}
              >
                Load More Articles
              </Button>
            ) : (
              <div className="text-rcb-gold font-semibold text-lg mt-4">All articles loaded.</div>
            )}
          </div>
          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-rcb-red/10 to-rcb-gold/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Never Miss an Update</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Subscribe to our newsletter and get the latest RCB news delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-base focus:border-rcb-red focus:ring-2 focus:ring-rcb-red/20 outline-none" />
              <Button className="bg-rcb-red text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-rcb-red/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;