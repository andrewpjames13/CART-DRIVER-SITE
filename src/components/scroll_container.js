/*jshint esversion: 6 */
import React, { Component } from 'react';
import { Element, scrollSpy } from 'react-scroll';

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
    // if (window.innerWidth <= 768) {
    //   this.setState({ containerWidth: 90 });
    // }

    window.addEventListener('scroll', this.handleScroll.bind(this), false);
    window.addEventListener('resize', this.handleResize.bind(this), false);
    scrollSpy.update();
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
      window.removeEventListener('resize', this.handleScroll.bind(this));
  }

  handleScroll(event) {
    const innerHeight = window.innerHeight-100;
    let currentLocation = window.pageYOffset || document.documentElement.scrollTop;

    // if (window.innerWidth >= 768) {
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
    //} else {
    //   this.setState({ containerWidth: 100 });
    // }
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

          <Element name="press" className="element press">
            <Press />
          </Element>

          <Element name="about" className="element about">
            <About />
          </Element>

          <Element name="contact" className="element contact">
            <Contact />
          </Element>
        </div>
      </div>
    );
  }
};

export default ScrollContainer;
