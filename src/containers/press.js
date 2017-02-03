/*jshint esversion: 6 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import HeadLine from '../components/head_line';

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
        <HeadLine title="Press"/>
        <div className="press-scroll">
          { this.renderPressItems() }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pressItems: state.pressItems
  }
}

export default connect(mapStateToProps, actions)(Press);
