/*jshint esversion: 6 */
import React, { Component } from 'react';
import { Element, Events, scrollSpy } from 'react-scroll';

import MenuList from '../containers/menu_list';
import Photos from '../containers/photos';
import Press from '../containers/press';
import About from '../containers/about';
import Contact from '../containers/contact';

class ScrollContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      containerWidth: 90
    };
  }

  componentDidMount() {
    let scroll = new Event('scroll');
    window.addEventListener('scroll', this.handleScroll.bind(this), false);
    window.dispatchEvent(scroll);

    window.addEventListener('resize', this.handleResize.bind(this), false);

    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
  }

  handleScroll(event) {
    const innerHeight = window.innerHeight-100;
    let currentLocation = window.pageYOffset || document.documentElement.scrollTop;

    if (currentLocation === 0) {
      this.setState({
        containerWidth: 90
      });
    } else if (currentLocation >= innerHeight) {
      this.setState({
        containerWidth: 100
      });
    } else {
      let percent = (90 + (currentLocation / innerHeight) * 10);
      this.setState({
        containerWidth: percent
      });
    }
  }

  handleResize(event) {
    this.handleScroll();
  }

  render() {
    return (
      <div className="scroll-container" style={{'width': this.state.containerWidth + '%'}} >
        <Element name="home" className="element">
          <div className="home-ph"></div>
        </Element>

        <div className="scroll-body">
          <Element name="menu" className="element">
            <MenuList />
          </Element>

          <Element name="photos" className="element">
            <Photos />
          </Element>

          <Element name="press" className="element">
            <Press />
          </Element>

          <Element name="about" className="element">
            <About />
          </Element>

          <Element name="contact" className="element">
            <Contact />
          </Element>
        </div>
      </div>
    );
  }
};

export default ScrollContainer;
