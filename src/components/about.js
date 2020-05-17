/*jshint esversion: 6 */
import React from 'react';
import withTheme from 'components/withTheme';
import NewsletterSignUp from 'components/NewsletterSignUp';
import HeadLine from './head_line';

const About = ({ data, Theme }) => (
  <div
    className="about-section"
    style={{ color: Theme.black }}
  >
    <div className="hidden-tiny small-50 about-image">
      <div className="image-container">
        {data.image && <img src={data.image} alt="cart-driver-hand" />}
      </div>
    </div>
    <div className="tiny-100 small-50">
      <HeadLine title={data.title} noBorder />
      {data.copy.map(c => (<p key={c._uid}>{c.item}</p>))}
      <NewsletterSignUp />
    </div>
  </div>
);

export default withTheme(About);
