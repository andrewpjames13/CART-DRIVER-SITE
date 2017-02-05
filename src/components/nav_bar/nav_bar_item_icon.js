/*jshint esversion: 6 */
import React, { Component } from 'react';
import { Link } from 'react-scroll';

class NavBarItemIcon extends Component {

  handleClick(event) {
    event.preventDefault();
    this.props.onClick(this.props.section.name);
  }

  render() {
    const section = this.props.section;
    const classNames = require('classnames');
    let el = null;
    let listClasses = classNames({
      'tiny-20': true,
      'nav-item': true,
    });

    if (section.name === 'call' ) {
      el = (
        <a href="tel:303.292.3553" className={listClasses}>
          <div className="call-me">
            <img role="presentation" src="images/callCircle.png"></img>
            <div className="svg-container">
              <svg version="1.1" className={section.name+"-icon"} x="0px" y="0px" viewBox="0 0 24 24">
                <path d={section.svgPath}/>
              </svg>
            </div>
          </div>
        </a>
      );
    } else {
      el = (
        <Link
          className={listClasses}
          onClick={this.handleClick.bind(this)}
          to={section.name}
          spy={true}
          smooth={true}
          duration={500}
          >
          <div className="svg-container">
            <svg version="1.1" className={section.name+"-icon"} x="0px" y="0px" viewBox="0 0 24 24">
              <path d={section.svgPath}/>
            </svg>
          </div>
        </Link>
      );
    }
    return el
  }
}

export default NavBarItemIcon;
