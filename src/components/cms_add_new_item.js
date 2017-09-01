/*jshint esversion: 6 */
import React, { Component } from 'react';
import CmsForm from './cms_form';

class CmsAddNewItem extends Component {
  render() {
    return (
      <div className="cms-new-item">
        <h2 className="bold">Create new menu item</h2>
        <CmsForm
          submit={this.props.createMenuItem}
          selectedMenu={this.props.selectedMenu}
        />
      </div>
    );
  }
}

export default CmsAddNewItem;
