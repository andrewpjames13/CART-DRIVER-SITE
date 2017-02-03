/*jshint esversion: 6 */
import React from 'react';
import CountDown from './count_down';

const HomeScreen = (props) => {
  return (
    <div className="home-container" style={{'backgroundImage': 'url(images/cart-driver-oven-pizza.jpg)'}}>
      <div className="tiny-100 home-content">
        <h1 className="bold home-title">CART-DRIVER</h1>
        <CountDown />
      </div>
    </div>
  );
};

export default HomeScreen;
