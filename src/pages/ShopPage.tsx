import Navigation from '@/components/Navigation';
import ShopSection from '@/components/ShopSection';
import { useState } from 'react';

const ShopPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantities, setCartQuantities] = useState({});
  const [showCart, setShowCart] = useState(false);

  // Calculate cartCount as the number of unique items in cart
  const cartCount = cartItems.length;

  return (
    <div className="min-h-screen bg-background">
      <Navigation onCartClick={() => setShowCart(true)} cartCount={cartCount} />
      <div className="pt-16">
        <ShopSection
          cartItems={cartItems}
          setCartItems={setCartItems}
          cartQuantities={cartQuantities}
          setCartQuantities={setCartQuantities}
          showCart={showCart}
          setShowCart={setShowCart}
        />
      </div>
    </div>
  );
};

export default ShopPage;