/*jshint esversion: 6 */
import React, { Component } from 'react';
import NavBarItem from './nav_bar_item';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSection: 'home',
      open: false
    };
  }

  handleClick(section) {
    if (section === 'nav-menu' && this.state.open) {
      this.setState({open: false});
    } else if (section === 'nav-menu') {
      this.setState({open: true});
    } else {
      this.setState({ activeSection: section });
    }
  }

  render() {
    const classNames = require('classnames');
    let listClasses = classNames({
      'nav-bar': true,
      'open': this.state.open
    });

    const navBarItems = this.props.sections.map((section) => {
      return <NavBarItem key={section.name} section={section} onClick={this.handleClick.bind(this)} activeSection={this.state.activeSection}/>
    });

    return (
      <div className={listClasses}>
        {navBarItems}
      </div>
    );
  }
};

export default NavBar;
