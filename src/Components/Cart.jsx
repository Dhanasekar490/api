// src/Cart.js
import React, { useState } from 'react';
import '../App.css'; // Importing the CSS file for styling

const Cart = () => {
  
  const [items, setItems] = useState([
    { id: 1, name: 'tometo 1', price: 10, quantity: 2 },
    { id: 2, name: 'milk 1', price: 15, quantity: 1 },
    { id: 3, name: 'butter 1', price: 20, quantity: 3 },
    { id: 4, name: 'potato ships 1', price: 5,  quantity: 1},
  ]);

  const getTotalQuantity = () => {
  
    return items.reduce((total, item) => total + item.quantity, 0);
    
  };

  const getTotalAmount = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleQuantityChange = (id, newQuantity) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };
  


  return (
    <div className='box1'>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  min="1"
                />
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h2>Total Quantity: {getTotalQuantity()}</h2>
        <h2>Total Amount: ${getTotalAmount()}</h2>
      </div>
    </div>
  );
};

export default Cart;
