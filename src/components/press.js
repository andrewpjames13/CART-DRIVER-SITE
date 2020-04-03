/*jshint esversion: 6 */
import React, { Component } from 'react';
import styled from 'styled-components';
import withTheme from 'components/withTheme';
import HeadLine from './head_line';

class Press extends Component {
  renderPressItems() {
    const Link = styled.a`
      background-color: ${this.props.Theme.black}
      color: ${this.props.Theme.white};
      &:hover { color: ${this.props.Theme.primary }}
    `;
    return this.props.pressItems.map((pressItem, index) => {
      return (
        <Link href={ pressItem.link } target="_blank" className="press-item" key={index}>
          <div className="press-content">
            <h4>{ pressItem.headLine }</h4>
            <p className="bold">{ pressItem.description }</p>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className="press-section">
        <HeadLine title={this.props.title} noBorder />
        <div className="press-scroll">
          { this.renderPressItems() }
        </div>
      </div>
    );
  }
}

export default withTheme(Press);
