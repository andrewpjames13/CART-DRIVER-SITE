/*jshint esversion: 6 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Element } from 'react-scroll';
import * as actions from 'actions';
import MenuList from 'components/menu_list';
import PhotoGrid from 'components/photo_grid';
import Press from 'components/press';
import About from 'components/about';
import Contact from 'components/contact';

const photos = [
  { photoSrc: "images/grid/pizza_001.jpg" },
  { photoSrc: "images/grid/patio_002.jpg" },
  { photoSrc: "images/grid/Seafood_003.jpg" },
  { photoSrc: "images/grid/Cocktails_004.jpg" },
  { photoSrc: "images/grid/Antipasti_005.jpg" },
  { photoSrc: "images/grid/Pizza_006.jpg" },
  { photoSrc: "images/grid/Seafood_007.jpg" },
  { photoSrc: "images/grid/TableParty_008.jpg" },
  { photoSrc: "images/grid/HotSauce_009.jpg" },
  { photoSrc: "images/grid/Cart-Driver-Pizza-Restaurant-Denver_010.jpg" },
  { photoSrc: "images/grid/FoodSpread_011.jpg" },
  { photoSrc: "images/grid/Cart-Driver-Pizza-Restaurant-Denver_012.jpg" },
];

class Content extends Component {
  constructor(props) {
    super(props);
    this.props.fetchData()
  }

  render() {
    return (
      <Fragment>
        <Element name="home" className="element">
          <div className="home-ph"></div>
        </Element>
        <div className="scroll-body">
          <Element name="menu" className="element">
            <MenuList menuItems={this.props.menuItems}/>
          </Element>
          <Element name="photos" className="element">
            <PhotoGrid photos={photos}/>
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
      </Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(Content);
