import React from 'react';
import './MyStore.css';

import goldfish from './img/goldfish.jpg';
import sprite from './img/sprite.jpeg';
import junkless from './img/junkless.jpeg';

function MyStore() {
    const my_items = [
        { id: 1, name: 'Goldfish Boxes', price: 'FREE', numCarts: 28, image: goldfish },
        { id: 2, name: 'Sprite Bottles', price: '$2.00', numCarts: 2,  image: sprite },
        { id: 3, name: 'Junkless Bars', price: '$6.30', numCarts: 14, image: junkless },
    ];
      
    return (
        <main className="store-content">
            <h1>My Store</h1>
            <div className="my_items">
                {my_items.map(item => (
                    <div key={item.id} className="my_item">
                        <div className="item-image">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="item-details">
                            <div className="item-name">{item.name}</div>
                            <div className="item-price">{item.price}</div>
                            <div className="num-carts">In {item.numCarts} Carts</div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="add-item-button">Add New Item</button>
        </main>
    );
}

export default MyStore;