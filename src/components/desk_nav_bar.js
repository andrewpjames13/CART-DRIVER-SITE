/*jshint esversion: 6 */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

class DeskNavBar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      activeSection: 'home',
      open: false
    };
  }

  handleClick(section) {
    this.setState({ open: !this.state.open });
  }

  render() {
    const classNames = require('classnames');
    let listClasses = classNames({
      'desk-nav': true,
      'open': this.state.open
    });

    return (
      <Fragment>
        { this.props.home ?
          <Fragment>
            <RouterLink to="/rino" className={`one ${listClasses}`}>
              RiNo
            </RouterLink>
            <RouterLink to="/lohi" className={`two ${listClasses}`}>
              LoHi
            </RouterLink>
            <Link
              className={`three ${listClasses}`}
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              >
              About
            </Link>
            <Link
              className={`four ${listClasses}`}
              to="press"
              spy={true}
              smooth={true}
              duration={500}
              >
              Press
            </Link>
            <Link
              className={`five ${listClasses}`}
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              >
              Contact
            </Link>
          </Fragment>
          :
          <Fragment>
            <Link
              className={`six ${listClasses}`}
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              >
              Contact
            </Link>
            <Link
              className={`five ${listClasses}`}
              to="press"
              spy={true}
              smooth={true}
              duration={500}
              >
              Press
            </Link>
            <Link
              className={`four ${listClasses}`}
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              >
              About
            </Link>
            <Link
              className={`three ${listClasses}`}
              to="photos"
              spy={true}
              smooth={true}
              duration={500}
              >
              Photos
            </Link>
            <Link
              className={`two ${listClasses}`}
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              >
              Menu
            </Link>
            <RouterLink
              className={`one ${listClasses}`}
              to="/"
              >
              Home
            </RouterLink>
          </Fragment>
        }
        <button className={`desk-svg-container ${this.state.open ? 'open' : ''}`} onClick={this.handleClick}>
          <svg className="deskNavHam" x="0px" y="0px" viewBox="0 0 24 24">
            <rect className="rects" y="2" width="24" height="4"/>
            <rect className="rects" y="10" width="24" height="4"/>
            <rect className="rects" y="18" width="24" height="4"/>
          </svg>
          <svg className="deskNavX"x="0px" y="0px" viewBox="0 0 24 24">
            <path d="M24,20.2L15.7,12l8.2-8.3L20.2,0L12,8.3L3.7,0.1L0,3.8L8.3,12l-8.2,8.3L3.8,24l8.2-8.3l8.3,8.2L24,20.2z"/>
          </svg>
        </button>
      </Fragment>
    );
  }
};

export default DeskNavBar;
