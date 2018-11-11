/*jshint esversion: 6 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Element, scrollSpy } from 'react-scroll';
import * as actions from '../actions';
import MenuList from '../components/menu_list';
import PhotoGrid from '../components/photo_grid';
import Press from '../components/press';
import About from '../components/about';
import Contact from '../components/contact';

class ScrollContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      containerWidth: 90
    };
  }

  componentWillMount() {
    this.props.fetchData()
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this), false);
    scrollSpy.update();
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
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

  render() {
    return (
      <div className="scroll-container" style={{'width': this.state.containerWidth + '%'}} >
        <Element name="home" className="element">
          <div className="home-ph"></div>
        </Element>

        <div className="scroll-body">
          <Element name="menu" className="element">
            <MenuList menuItems={this.props.menuItems}/>
          </Element>

          <Element name="photos" className="element">
            <PhotoGrid photos={this.props.photos}/>
          </Element>

          <Element name="about" className="element about">
            <About />
          </Element>

          <Element name="press" className="element press">
            <Press pressItems={this.props.pressItems}/>
          </Element>

          <Element name="contact" className="element contact">
            <Contact />
          </Element>
        </div>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchData: actions.fetchData }, dispatch)
}

function mapStateToProps(state) {
  return {
    pressItems: state.pressItems,
    photos: state.photos,
    menuItems: state.menuItems
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScrollContainer);
