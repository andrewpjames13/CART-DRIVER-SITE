import React, { Component } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import withTheme from 'components/withTheme';

class NavBarItemIcon extends Component {
  handleClick(event) {
    event.preventDefault();
    this.props.onClick(this.props.section.name);
  }

  render() {
    const section = this.props.section;
    const StyledLink = styled(Link)`
      color: ${this.props.Theme.black};
      &.active {
        color: ${this.props.Theme.primary};
        fill: ${this.props.Theme.primary};
      }
    `;

    if (section.name === 'call' ) {
      return (
        <a href="tel:303.292.3553" className="tiny-20 nav-item">
          <div className="call-me">
            <img role="presentation" src="images/callCircle.png" />
            <div className="svg-container">
              <svg version="1.1" className={section.name+"-icon"} x="0px" y="0px" viewBox="0 0 24 24">
                <path d={section.svgPath}/>
              </svg>
            </div>
          </div>
        </a>
      );
    }
    return (
      <StyledLink
        className="tiny-20 nav-item"
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
      </StyledLink>
    );
  }
}

export default withTheme(NavBarItemIcon);
