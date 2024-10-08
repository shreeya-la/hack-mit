import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Basket.css';

import poptarts from './img/poptarts.jpg';
import orangejuice from './img/orangejuice.jpg';
import pockysticks from './img/pockysticks.jpg';

function Basket() {
    const navigate = useNavigate();

    const basket_items = [
        { id: 1, name: 'Blueberry Poptarts', price: '8.00', seller: 'Amina Farsi', distance: '0.6 miles', image: poptarts },
        { id: 4, name: 'Orange Juice', price: '$2.00', seller: 'Pavan Kunigiri', distance: '1.7 miles', image: orangejuice },
        { id: 9, name: 'Pocky  Sticks', price: '$4.99', seller: 'Karishma Arora', distance: '6.7 miles', image: pockysticks },
    ];

    const handleGoToChat = () => {
        navigate('/chat');
    };


    const messages = [
      { from: 'user', text: 'Hello, are the poptarts still available?'},
      { from: 'seller', text: 'Amina: Yes, I have four unopened boxes left.' },
      { from: 'user', text: 'Okay I would like to buy them!' },
      { from: 'seller', text: 'Amina: Sure, when can you pick them up?' },
    ];

    return (
        <main className="store-content">
            <h1>Basket</h1>
            <div className="my_items">
                {basket_items.map(item => (
                    <div key={item.id} className="my_item">
                        <div className="item-image">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="item-details">
                            <div className="item-name">{item.name}</div>
                            <div className="item-price">{item.price}</div>
                            <div className="seller-distance">{item.distance} away</div>
                            <button className="chat-button" onClick={handleGoToChat}>Message Seller </button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Basket;