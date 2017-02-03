/*jshint esversion: 6 */
import React, { Component } from 'react';
import HeadLine from '../components/head_line';

class About extends Component {
  render() {
    return (
      <div className="about-section">
        <HeadLine title="About"/>
        <p>
          Tucked in a 640 square foot shipping container space in the heart of Denver's RiNo neighborhood, you'll find Cart Driver. Here, our team serves premium wood fired pizzas, freshly flown in oysters, prosecco on tap, seasonal market plates, Italian style spritzes, local brews and craft cocktails.
        </p>
        <p>
          Inspired by the Carrettiera, or Cart-Driver, who brought goods from Southern Italy’s farms to its villages via horse-drawn cart, stopping along the way to serve dishes to the people he met, sharing is at the heart of the Cart-Driver experience. Here, you might share your food, share your table or share your life story, and you’ll do it in a warm, inviting atmosphere. Open for lunch, dinner, community hour and late night seven days a week, Cart-Driver is here for you, with fresh, domestically sourced ingredients, and above all, hospitality.
        </p>
        <p>
          Cart Driver has been recognized locally, regionally, and nationally.
        </p>
      </div>
    );
  }
}

export default About;
