/*jshint esversion: 6 */
import React, { Component } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import withTheme from 'components/withTheme';
import NavBarItemIcon from './nav_bar_item_icon';

class NavBarItem extends Component {
  handleClick() {
    this.props.onClick(this.props.section.name);
  }

  render() {
    const section = this.props.section;
    let el = null;

    const StyledLink = styled(Link)`
      color: ${this.props.Theme.black};
      &.active {
        color: ${this.props.Theme.primary};
        fill: ${this.props.Theme.primary};
      }
    `;

    if (section.svgPath) {
      el = (
        <NavBarItemIcon section={section} onClick={this.handleClick.bind(this)} activeSection={this.props.activeSection} />
      );
    } else {
      el = (
        <StyledLink
          className="tiny-33 nav-item border-top"
          to={section.name}
          spy={true}
          smooth={true}
          duration={500}
          >
          {section.name}
        </StyledLink>
      );
    }

    return el
  }
}

export default withTheme(NavBarItem);
