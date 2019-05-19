/*jshint esversion: 6 */
import React from 'react';
import HeadLine from './head_line';

const About = ({ data }) => (
  <div className="about-section">
    <div className="hidden-tiny small-50 about-image">
      <div className="image-container">
        <img src="images/cart-driver-hand.svg" alt="cart-driver-hand" />
      </div>
    </div>
    <div className="tiny-100 small-50">
      <HeadLine title={data.title}/>
      {data.copy.map(c => (<p key={c._uid}>{c.item}</p>))}
    </div>
  </div>
);

export default About;
