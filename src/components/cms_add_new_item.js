/*jshint esversion: 6 */
import React, { Component } from 'react';
import CmsFormCreate from './cms_form_create';

class CmsAddNewItem extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    this.props.createMenuItem(
      this.props.selectedMenu,
      {
        name: data.name,
        price: data.price ? data.price : '',
        items:[data.description]
      }
    )
  }

  render() {
    return (
      <div className="cms-new-item">
        <h2 className="bold">Create new menu item</h2>
        <CmsFormCreate
          onSubmit={this.handleSubmit}
          selectedMenu={this.props.selectedMenu}
          load={this.props.load}
        />
      </div>
    );
  }
}

export default CmsAddNewItem;
