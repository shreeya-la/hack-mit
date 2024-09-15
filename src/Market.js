import React from 'react';
import './App.css';  // For CSS styling

// Images
import poptartsImage from './img/poptarts.jpeg';

function Market() {
  const items = [
    { id: 1, name: 'Blueberry Poptarts', price: '$10.00', seller: 'Amina Farsi', distance: '0.6 miles', image: poptartsImage },
    { id: 2, name: 'Bottled Water', price: 'FREE', seller: 'Kofi Osei', distance: '0.8 miles', image: poptartsImage },
    { id: 3, name: 'Granola Bars', price: '$3.30', seller: 'Fatima Sayed', distance: '1.3 miles', image: poptartsImage },
    { id: 4, name: 'Orange Juice', price: '$2.00', seller: 'Pavan Kunigiri', distance: '1.7 miles', image: poptartsImage },
    { id: 5, name: 'Frozen Peas', price: '$1.99', seller: 'Santiago Torres', distance: '2.4 miles', image: poptartsImage },
    { id: 7, name: 'Rice', price: 'FREE', seller: 'Kai Hoang', distance: '4.7 miles', image: poptartsImage },
    { id: 8, name: 'Tomato Soup', price: '$3.65', seller: 'Luka Petrovic', distance: '6.6 miles', image: poptartsImage },
    { id: 9, name: 'Pocky  Sticks', price: '$4.99', seller: 'Karishma Arora', distance: '6.7 miles', image: poptartsImage },
    { id: 10, name: 'Instant Noodles', price: '$2.75', seller: 'Kaylin Yeoh', distance: '7.1 miles', image: poptartsImage },
    { id: 11, name: 'Almonds', price: '$1.50', seller: 'Marta Kowalska', distance: '12.1 miles', image: poptartsImage },
    { id: 12, name: 'Frosted Flakes', price: 'FREE', seller: 'Kofi Osei', distance: '13.4 miles', image: poptartsImage },
    { id: 13, name: 'Pasta', price: '$2.50', seller: 'Jason Li', distance: '15 miles', image: poptartsImage },
    { id: 14, name: 'Salt', price:'$1.75', seller: 'Zola Tshabalala', distance: '20.5 miles', image: poptartsImage },
    { id: 15, name: 'Diet Pepsi', price: 'FREE', seller: 'Nia Mensah', distance: '27 miles', image: poptartsImage }
  ];

  return (
      <div className="marketplace">
      <div className="market-header">
          <h1>The Marketplace</h1>
          <p className="filtered">Sorted by distance</p>
        </div>
        <div className="market-container">
          {items.map(item => (
            <div key={item.id} className="market-column">
              <div className="market-item">
                <div className="item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name}/>
                  </div>
                  <div className="item-details">
                    <div className="item-name">{item.name}</div>
                    <div className="item-price">{item.price}</div>
                  </div>
                </div>
                <div className="seller">
                  <div className="seller-details">
                    <div className="seller-name">{item.seller}</div>
                    <div className="seller-distance">{item.distance} away</div>
                  </div>
                  <button className="add-to-basket">+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default Market;