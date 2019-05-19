/*jshint esversion: 6 */
import React, { Component } from 'react';
import HeadLine from './head_line';

class Press extends Component {
  renderPressItems() {
    return this.props.pressItems.map((pressItem, index) => {
      return (
        <a href={ pressItem.link } target="_blank" className="press-item" key={index}>
          <div className="press-content">
            <h4>{ pressItem.headLine }</h4>
            <p className="bold">{ pressItem.description }</p>
          </div>
        </a>
      );
    });
  }

  render() {
    return (
      <div className="press-section">
        <HeadLine title={this.props.title}/>
        <div className="press-scroll">
          { this.renderPressItems() }
        </div>
      </div>
    );
  }
}

export default Press;
