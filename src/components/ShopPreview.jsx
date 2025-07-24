import { Link } from 'react-router-dom';
import { ShoppingCart, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ShopPreview = () => {
  // Show only featured/bestselling products
  const featuredProducts = [
    {
      id: 1,
      name: 'Official RCB Home Jersey 2024',
      price: 2499,
      originalPrice: 2999,
      image: '/placeholder.svg',
      rating: 4.8,
      reviews: 245,
      bestseller: true,
      discount: 17
    },
    {
      id: 2,
      name: 'Official RCB Cap',
      price: 899,
      originalPrice: 1199,
      image: '/placeholder.svg',
      rating: 4.6,
      reviews: 156,
      bestseller: true,
      discount: 25
    },
    {
      id: 3,
      name: 'Signed Cricket Bat',
      price: 8999,
      originalPrice: 12999,
      image: '/placeholder.svg',
      rating: 5.0,
      reviews: 23,
      bestseller: false,
      discount: 31,
      limited: true
    },
    {
      id: 4,
      name: 'RCB Championship Photo Frame',
      price: 1499,
      originalPrice: 1999,
      image: '/placeholder.svg',
      rating: 4.9,
      reviews: 45,
      bestseller: false,
      discount: 25
    }
  ];

  return (
    <section id="shop" className="shop-preview-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">
            RCB STORE
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Show your RCB pride with official merchandise and collectibles
          </p>
        </div>

        <div className="shop-preview-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="shop-preview-card group">
              <CardHeader className="p-0 relative">
                <div className="aspect-square bg-gradient-to-br from-rcb-red/10 to-rcb-gold/10 flex items-center justify-center rounded-t-lg relative overflow-hidden">
                  <ShoppingCart className="h-16 w-16 text-rcb-red/30" />

                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {product.bestseller && (
                      <Badge className="bg-rcb-red text-white text-xs">
                        Bestseller
                      </Badge>
                    )}
                    {product.limited && (
                      <Badge className="bg-rcb-gold text-rcb-black text-xs">
                        Limited
                      </Badge>
                    )}
                    {product.discount > 0 && (
                      <Badge variant="outline" className="border-green-500 text-green-500 text-xs">
                        {product.discount}% OFF
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-4 space-y-3">
                <div>
                  <h3 className="font-semibold text-sm group-hover:text-rcb-red transition-colors line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="flex items-center space-x-1 mt-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-rcb-red">
                    ₹{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                <Button
                  className="w-full bg-rcb-red hover:bg-rcb-red/90 text-white"
                  size="sm"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardContent>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/shop">
            <Button
              size="lg"
              className="bg-rcb-gold text-rcb-black hover:bg-rcb-gold/90 group"
            >
              Shop All Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShopPreview;