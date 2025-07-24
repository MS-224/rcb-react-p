import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const NewsPreview = () => {
  // Show only latest 3 news articles
  const latestNews = [
    {
      id: 1,
      category: 'team-news',
      title: 'Virat Kohli Returns to Form with Magnificent Century',
      excerpt: 'The RCB star played a masterful innings, scoring his first century of the season against Mumbai Indians.',
      author: 'RCB Media Team',
      date: '2024-03-12',
      readTime: '3 min read',
      trending: true
    },
    {
      id: 2,
      category: 'match-reports',
      title: 'RCB Defeats Punjab Kings in Thrilling Last-Ball Finish',
      excerpt: 'A nail-biting encounter saw RCB chase down 181 runs with Glenn Maxwell hitting the winning six.',
      author: 'Sports Correspondent',
      date: '2024-03-10',
      readTime: '5 min read',
      trending: false
    },
    {
      id: 3,
      category: 'transfers',
      title: 'RCB Signs New Fast Bowler for Upcoming Season',
      excerpt: 'The franchise has announced the signing of promising young fast bowler from domestic cricket.',
      author: 'Transfer News',
      date: '2024-03-08',
      readTime: '2 min read',
      trending: true
    }
  ];

  const formatCategory = (category) => {
    return category.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <section id="news" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">
            LATEST NEWS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest happenings from the RCB camp
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {latestNews.map((article) => (
            <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-2 hover:border-rcb-red/50">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-rcb-gold text-rcb-black">
                    {formatCategory(article.category)}
                  </Badge>
                  {article.trending && (
                    <Badge variant="outline" className="border-rcb-red text-rcb-red">
                      <TrendingUp className="h-3 w-3 mr-1" />
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
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      <span className="line-clamp-1">{article.author}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-3 w-3" />
                    <span>{formatDate(article.date)}</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-rcb-gold text-rcb-gold hover:bg-rcb-gold hover:text-rcb-black"
                >
                  Read More
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/news">
            <Button
              size="lg"
              variant="outline"
              className="border-rcb-gold text-rcb-gold hover:bg-rcb-gold hover:text-rcb-black group"
            >
              View All News
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;