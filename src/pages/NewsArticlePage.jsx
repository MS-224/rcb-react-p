import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Calendar, User, Share2, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Mock data (should be replaced with real data/fetch in production)
const newsArticles = [
    {
        id: '1',
        title: 'Clean Energy Revolution: Solar Power Becomes World\'s Cheapest Electricity Source',
        author: 'Sarah Thompson',
        date: 'July 18, 2024',
        readTime: '6 min read',
        image: '/placeholder.svg',
        content: `A new era of clean energy has officially begun as solar power has become the cheapest source of electricity in human history, according to the International Energy Agency\'s latest report.\n\nAdvanced photovoltaic technology, combined with massive improvements in manufacturing efficiency, has driven the cost of solar energy down by 80% over the past decade. The breakthrough comes as the world desperately seeks alternatives to fossil fuels to combat climate change.\n\n\"We\'ve reached a tipping point,\" said Jamie Rodriguez, Director of the Global Solar Alliance. \"Solar power is now not just environmentally responsible—it\'s an economically irresistible.\"\n\nThe latest generation of perovskite silicon tandem cells has achieved efficiency rates of over 45%, nearly double the efficiency of traditional silicon panels. The new cells can generate more electricity from the same amount of sunlight while requiring fewer materials to manufacture.\n\nMajor technological improvements include:\n- Ultra-thin double pane cells can be integrated as building materials.\n- Costs for solar farms have enabled rapid build-out.\n- Transparent solar panels are being used in windows and facades.\n- Recyclable end-of-life tech is replacing less sustainable old models.\n\nThe global market is responding with record new solar installations. China leads with over 300 GW of installations, while the United States, India, and European nations are investing heavily in solar infrastructure.\n\nGlobal demand for clean energy is skyrocketing. Solar installations now account for 4 million people globally, with job growth outpacing traditional energy sectors. Rural communities in developing countries are especially benefiting as decentralized solar microgrids bring reliable power to remote areas.\n\n\"This technology is democratizing energy access,\" explained James Park, a renewable energy economist. \"Communities that have had volatile electricity or no access at all are leapfrogging to robust infrastructure and job creation.\"\n\nThe environmental benefits are equally impressive. Solar installation completed in 2024 alone will prevent over 2 billion tons of CO2 emissions over the 25-year lifespan—equivalent to taking 450 million cars off the road permanently.\n\nLooking ahead, researchers are working on even more advanced technologies, including space-based solar power systems and perovskite paint that can generate electricity from any building or vehicle.\n\nThe solar revolution is reshaping the global energy landscape, offering hope for a sustainable future powered by clean, abundant solar energy.`,
        highlights: [
            'Ultra-thin double pane cells can be integrated as building materials.',
            'Costs for solar farms have enabled rapid build-out.',
            'Transparent solar panels are being used in windows and facades.',
            'Recyclable end-of-life tech is replacing less sustainable old models.'
        ]
    },
    // ...add more articles as needed
];

const NewsArticlePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const article = newsArticles.find(a => a.id === id) || newsArticles[0];

    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <div className="max-w-2xl mx-auto pt-20 pb-16 px-4">
                <Button variant="ghost" size="sm" className="mb-4" onClick={() => navigate(-1)}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to News
                </Button>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
                <div className="flex flex-wrap items-center gap-4 mb-4 text-muted-foreground text-sm">
                    <div className="flex items-center gap-2">
                        <User className="h-4 w-4" /> {article.author}
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" /> {article.date}
                    </div>
                    <span>{article.readTime}</span>
                    <Button variant="outline" size="icon" className="ml-auto">
                        <Share2 className="h-4 w-4" />
                    </Button>
                </div>
                {article.image && (
                    <img src={article.image} alt={article.title} className="w-full rounded-lg mb-6" />
                )}
                <div className="prose prose-lg max-w-none mb-6 whitespace-pre-line">
                    {article.content}
                </div>
                {article.highlights && article.highlights.length > 0 && (
                    <div className="mb-8">
                        <h3 className="font-semibold mb-2">Major technological improvements include:</h3>
                        <ul className="list-disc pl-6">
                            {article.highlights.map((h, i) => (
                                <li key={i}>{h}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="bg-muted/50 rounded-xl p-6 text-center mt-10">
                    <div className="font-semibold mb-2">Enjoyed this article?</div>
                    <div className="mb-4 text-muted-foreground">Stay updated with the latest RCB news and stories.</div>
                    <Button className="bg-rcb-red hover:bg-rcb-red/90 text-white">Read More Articles</Button>
                </div>
            </div>
        </div>
    );
};

export default NewsArticlePage; 