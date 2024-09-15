import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';  // For CSS styling

import logo from './img/logo.png';
import Market from './Market';
import Account from './Account';
import MyStore from './MyStore';
import Basket from './Basket';
import Chat from './Chat';

function App() {
  // State to keep track of the number of items in the basket
  const [basketCount, setBasketCount] = useState(0);

  // Function to add items to the basket
  const addToBasket = () => {
    setBasketCount(basketCount + 1);
  };
  
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <div className="logo">
            <img src={logo} alt="EcoEats Logo "/>
          </div>
        </header>

        <nav className="nav-buttons">
          <Link to="/">The Marketplace</Link>
          <Link to="/store">My Store</Link>
          <Link to="/account">My Account</Link>
          <Link to="/basket">Basket <span className="basket-count">({basketCount})</span></Link>
          <Link to="/chat">Messages (1)</Link>
        </nav>

        <Routes>
          <Route index element={<Market addToBasket={addToBasket} />} />
          <Route path="account" element={<Account />} />
          <Route path="store" element={<MyStore />} />
          <Route path="basket" element={<Basket />} />
          <Route path="chat" element={<Chat />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;