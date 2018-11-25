import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Element } from 'react-scroll';
import * as actions from 'actions';
import { Link } from 'react-router-dom';
import Press from 'components/press';
import About from 'components/about';
import Contact from 'components/contact';

class HomeContent extends Component {
  render() {
    return (
      <Fragment>
        <Element name="home" className="element">
          <div className="home-ph" style={{ height: '80vh' }}></div>
        </Element>
        <div className="scroll-body">
          <Element name="location" className="element about tiny-100">
            <div style={{padding: '30px'}}>
              <Link to="/rino" className="btn tiny-50" style={{padding: '30px'}}>
                Rino
              </Link>
              <Link to="/lohi" className="btn tiny-50" style={{padding: '30px'}}>
                LoHi
              </Link>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeContent);
