import React from 'react';
import './Basket.css';

import poptarts from './img/poptarts.jpg';
import orangejuice from './img/orangejuice.jpg';
import pockysticks from './img/pockysticks.jpg';

function Basket() {
    const basket_items = [
        { id: 1, name: 'Blueberry Poptarts', price: '8.00', seller: 'Amina Farsi', distance: '0.6 miles', image: poptarts },
        { id: 4, name: 'Orange Juice', price: '$2.00', seller: 'Pavan Kunigiri', distance: '1.7 miles', image: orangejuice },
        { id: 9, name: 'Pocky  Sticks', price: '$4.99', seller: 'Karishma Arora', distance: '6.7 miles', image: pockysticks },
    ];

    const messages = [
      { from: 'user', text: 'Hello, are the poptarts still available?'},
      { from: 'seller', text: 'Amina: Yes, I have four unopened boxes left.' },
      { from: 'user', text: 'Okay I would like to buy them!' },
      { from: 'seller', text: 'Amina: Sure, when can you pick them up?' },
    ];

    return (
        <main className="store-content">
            <h1>Messages</h1>
            <div className="chatbot">
                <h2>Chat about Blueberry Poptarts</h2>
                <div className="chat-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`chat-message ${msg.from}`}>
                            {msg.text}
                        </div>
                    ))}
                </div>
                <div className="chat-input">
                    <input type="text" placeholder="Type your message..." />
                    <button>Send</button>
                </div>
            </div>
        </main>
    );
}

export default Basket;