import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';

const App = () => {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
  };

  const handleHome = () => {
    setShowProductList(false);
    setShowCart(false);
  };

  const handleCartClick = () => {
    setShowCart(true);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
    setShowProductList(true);
  };

  if (!showProductList && !showCart) {
    return (
      <div className="landing-page">
        <h1>Paradise Nursery</h1>
        <p>Where green meets serenity</p>
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
        <div style={{ marginTop: '40px' }}>
          <AboutUs />
        </div>
      </div>
    );
  }

  return (
    <div>
      <nav className="navbar">
        <a href="#" onClick={handleHome}>Paradise Nursery</a>
        <div>
          <a href="#" onClick={handleHome}>Home</a>
          <a href="#" onClick={handleGetStarted}>Plants</a>
          <a href="#" onClick={handleCartClick} className="cart-icon">
            Cart
          </a>
        </div>
      </nav>

      {showCart ? (
        <CartItem onContinueShopping={handleContinueShopping} />
      ) : (
        <ProductList onCartClick={handleCartClick} />
      )}
    </div>
  );
};

export default App;
