/*jshint esversion: 6 */
import React, { Component } from 'react';
import { Link } from 'react-scroll';
import NavBarItemIcon from './nav_bar_item_icon';

class NavBarItem extends Component {
  handleClick() {
    this.props.onClick(this.props.section.name);
  }

  render() {
    const section = this.props.section;
    let el = null;

    if (section.svgPath) {
      el = (
        <NavBarItemIcon section={section} onClick={this.handleClick.bind(this)} activeSection={this.props.activeSection} />
      );
    } else {
      el = (
        <Link
          className="tiny-33 nav-item border-top"
          to={section.name}
          spy={true}
          smooth={true}
          duration={500}
          >
          {section.name}
        </Link>
      );
    }

    return el
  }
}

export default NavBarItem;
