/*jshint esversion: 6 */
import React from 'react';
import CountDown from './count_down';

const HomeScreen = (props) => {
    let backgroundImage;
    if (window.innerWidth >= 768) {
      backgroundImage = 'url(images/cart-driver-oven-pizza.jpg)';
    } else {
      backgroundImage = '';
    }

  return (
    <div className="home-container" style={{"backgroundImage" : backgroundImage}}>
      <img className="home-img" src="images/cart-driver-oven-pizza-mobile.jpg" role="presentation"/>
      <div className="tiny-100 home-content">
        <h1 className="bold home-title">CART-DRIVER</h1>
        <CountDown />
      </div>
    </div>
  );
};

export default HomeScreen;
