/*jshint esversion: 6 */
import React, { Component } from 'react';
import classNames from 'classnames';
import CmsForm from './cms_form';

class CmsBottomNav extends Component {
  constructor(props) {
    super(props);
    this.openMenu = this.openMenu.bind(this);

    this.state = {
      open: false,
    };
  }

  openMenu() {
    this.setState({open: !this.state.open});
  }

  render() {
    let navClass = classNames({
      'bottom-nav': true,
      'open': this.state.open,
      'active': this.props.active
    });

    return (
      <div className={navClass}>
        <button className="tiny-100 cta new" onClick={() => this.openMenu()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/>
          </svg>
        </button>
        <CmsForm createMenuItem={this.props.createMenuItem}/>
      </div>
    );
  }
}

export default CmsBottomNav;
