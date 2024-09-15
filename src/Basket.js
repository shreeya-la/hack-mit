import React from 'react';
import './Basket.css';

import poptartsImage from './img/poptarts.jpeg';


function Basket() {
    const basket_items = [
        { id: 1, name: 'Blueberry Poptarts', price: '$10.00', seller: 'Amina Farsi', distance: '0.6 miles', image: poptartsImage },
        { id: 4, name: 'Orange Juice', price: '$2.00', seller: 'Pavan Kunigiri', distance: '1.7 miles', image: poptartsImage },
        { id: 9, name: 'Pocky  Sticks', price: '$4.99', seller: 'Karishma Arora', distance: '6.7 miles', image: poptartsImage },
      ];
      
    return (
        <main className="store-content">
            <h1>Basket</h1>
            <div className="my_items">
            {basket_items.map(item => (
                <div className="my_item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name}/>
                  </div>
                  <div className="item-details">
                    <div className="item-name">{item.name}</div>
                    <div className="item-price">{item.price}</div>
                    <div className="seller-distance">{item.distance} away</div>

                    <button className="chat-button">Message Seller</button>
                  </div>
                </div>
            ))}
            </div>


        </main>
    );
}

export default Basket;