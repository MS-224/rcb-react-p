import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Users, Calendar, ImageIcon, Newspaper, ShoppingBag, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import rcbLogo from "../assets/rcb-logo.png";

const Navigation = ({ onCartClick, cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', to: '/', icon: Home },
    { name: 'Team', to: '/team', icon: Users },
    { name: 'Fixtures', to: '/fixtures', icon: Calendar },
    { name: 'Gallery', to: '/gallery', icon: ImageIcon },
    { name: 'News', to: '/news', icon: Newspaper },
    { name: 'Shop', to: '/shop', icon: ShoppingBag },
  ];

  return (
    <nav className="fixed top-0 w-full bg-rcb-black/95 backdrop-blur-sm z-50 border-b border-rcb-red/20">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src={rcbLogo}
              alt="RCB Logo"
              style={{ width: 72, height: 36, objectFit: "contain" }}
              className="rounded"
            />
            <span className="text-white font-bold text-xl hidden sm:block">Royal Challengers Bangalore</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-white hover:text-rcb-gold transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 ml-4">
              <Link to="/signin">
                <Button variant="ghost" className="text-white hover:text-rcb-gold hover:bg-rcb-red/20">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-rcb-red hover:bg-rcb-red/90 text-white">
                  Sign Up
                </Button>
              </Link>
              {cartCount > 0 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative text-white hover:text-rcb-gold hover:bg-rcb-red/20 ml-2"
                  onClick={onCartClick}
                  aria-label="Open cart"
                >
                  <ShoppingCart className="h-6 w-6" />
                  <span className="absolute -top-2 -right-2 bg-black text-white rounded-full text-xs w-5 h-5 flex items-center justify-center border-2 border-white">{cartCount}</span>
                </Button>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-rcb-gold hover:bg-rcb-red/20"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-rcb-black/95 border-t border-rcb-red/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="flex items-center space-x-3 text-white hover:text-rcb-gold block px-3 py-2 rounded-md transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <IconComponent size={20} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;