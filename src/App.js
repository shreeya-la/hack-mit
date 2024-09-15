import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';  // For CSS styling

import logo from './img/logo.png';
import Market from './Market';
import Account from './Account';
import MyStore from './MyStore';
import Basket from './Basket';

function App() {
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
          <Link to="/basket">Basket</Link>
        </nav>

        <Routes>
          <Route index element={<Market />} />
          <Route path="account" element={<Account />} />
          <Route path="store" element={<MyStore />} />
          <Route path="basket" element={<Basket />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;