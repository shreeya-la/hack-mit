import React from 'react';
import './MyStore.css';

import poptartsImage from './img/poptarts.jpeg';


function MyStore() {
    const my_items = [
        { id: 1, name: 'Frosted Flakes', price: '$2.00', numCarts: 28, image: poptartsImage },
        { id: 2, name: 'Salt', price: 'FREE', numCarts: 14,  image: poptartsImage },
        { id: 3, name: 'Granola Bars', price: '$3.30', numCarts: 2, image: poptartsImage },
      ];

      
    return (
        <main className="store-content">
            <h1>My Store</h1>
            <div className="my_items">
            {my_items.map(item => (
                <div className="my_item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name}/>
                  </div>
                  <div className="item-details">
                    <div className="item-name">{item.name}</div>
                    <div className="item-price">{item.price}</div>
                    <div className="num-carts">In {item.numCarts} Carts</div>
                  </div>
                </div>
            ))}
            </div>
        </main>
    );
}

export default MyStore;