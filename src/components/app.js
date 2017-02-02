/*jshint esversion: 6 */
import React, { Component } from 'react';
import NavBar from './nav_bar/nav_bar';
import HomeScreen from './home_screen';
import ScrollContainer from './scroll_container';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      sections: [
        {
          name: 'home',
          active: true,
          svgPath: 'M24,12.1l-1.4,1.5L12,3.7L1.4,13.6L0,12.1L12,1C12,1,24,12.1,24,12.1z M20,13.9L18,24H6L4,13.9l8-7.4C12,6.5,20,13.9,20,13.9z M13,20c0-0.6-0.4-1-1-1s-1,0.4-1,1s0.4,1,1,1S13,20.6,13,20z M14,15c0-1.1-0.9-2-2-2s-2,0.9-2,2s0.9,2,2,2S14,16.1,14,15z'
        }, {
          name: 'menu',
          active: false,
          svgPath: 'M20.1,4.6c-0.2-0.2-4-3.8-8.1-3.8c-4,0-7.9,3.6-8.1,3.8L3.5,5l2.8,6.1l2.4,5.3l3.3,7.2l4.3-9.4l2.3-5L20.5,5L20.1,4.6z M17.1,8.4c-0.2,0-0.4-0.1-0.5-0.1c-1.6,0-2.9,1.3-2.9,2.9c0,0.9,0.4,1.8,1.1,2.3l-2.8,6l-2-4.4c0.2-0.4,0.4-0.9,0.4-1.4c0-1.4-1-2.6-2.3-2.9L6.4,7.3C6.9,6.9,9.6,5,12,5c2.4,0,5.1,1.9,5.6,2.3L17.1,8.4z M18.4,5.7c-1-0.7-3.7-2.4-6.4-2.4S6.7,5,5.6,5.7L5.5,5.4C6.6,4.6,9.3,2.5,12,2.5c2.7,0,5.4,2.1,6.5,2.9L18.4,5.7z'
        }, {
          name: 'call',
          active: false,
          svgPath: 'M2.8,20.2l-0.9-1c-5-6,13-22.4,18.4-16.6l0.9,1l-5.5,5l-0.9-1c-1.7-1.8-8.9,4.8-7.3,6.6l0.9,1C8.3,15.2,2.8,20.2,2.8,20.2zM23.1,5.7l-1.3-1.4l-5.5,5l1.3,1.4L23.1,5.7z M10.3,17.4L9,15.9l-5.5,5l1.3,1.4C4.8,22.4,10.3,17.4,10.3,17.4z'
        }, {
          name: 'photos',
          active: false,
          svgPath: 'M18,5l-2-3H8L6,5H0v17h24V5H18z M22,12h-4.1c0.6,3.8-2.3,7-5.9,7c-3.6,0-6.5-3.2-5.9-7H2V7h5.1l2-3h5.9l2,3H22V12z M12,9c-2.2,0-4,1.7-4,3.9c0,2.2,1.8,4.1,4,4.1s4-1.8,4-4.1C16,10.7,14.2,9,12,9z M11.6,12.6c-0.6,0.5-1.5,0.5-1.9,0c-0.4-0.5-0.2-1.3,0.4-1.8c0.6-0.5,1.5-0.5,1.9,0C12.4,11.2,12.2,12.1,11.6,12.6z',
        }, {
          name: 'nav-menu',
          active: false,
          svgPath: 'M24,6H0V2h24V6z M24,10H0v4h24V10z M24,18H0v4h24V18z'
        }, {
          name: 'press',
          active: false
        }, {
          name:'about',
          active: false
        }, {
          name: 'contact',
          active: false
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <HomeScreen />
        <ScrollContainer />
        <NavBar sections={this.state.sections} activeSection={this.state.activeSection} />
      </div>
    );
  }
}
