import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import setTheme from 'actions/SetTheme';
import PhotoGrid from 'components/photo_grid';
import Press from 'components/press';
import About from 'components/about';
import Contact from 'components/contact';
import HeadLine from 'components/head_line';
import Map from 'components/Map';

class Content extends Component {
  menuItems = (data, classes = 'menu-item tiny-100') => {
    const Price = styled.h5`
      &:after { color: ${this.props.Theme.black} }
    `;
    const items = data.MenuItems.map(item => (
      <div key={item._uid} className={classes}>
        <div className="tiny-80">
          <h5 style={{ color: this.props.Theme.primary }}>{item.name}</h5>
          <ul>{item.descriptionItems.map(i => <li key={i._uid}>{i.item}</li>)}</ul>
        </div>
        <div className="tiny-20" style={{ color: this.props.Theme.primary }}>
          {item.price && <Price className="item-price">{item.price}</Price>}
        </div>
      </div>
    ))
    return items;
  }

  menu = (data) => {
    return (
      <div className="tiny-100">
        <div
          className="menu-section"
          style={{ color: this.props.Theme.black }}
        >
          <HeadLine title={data.Title} />
          {this.menuItems(data)}
          {data.description && <p className="section-description" style={{ color: this.props.Theme.primary }}>{data.description}</p>}
        </div>
      </div>
    );
  }

  renderHappyHourMenu = (data) => {
    return (
      <div
        className="menu-section"
        style={{ color: this.props.Theme.black }}
      >
        <HeadLine title={data.Title} />
        {this.menuItems(data, ' menu-section tiny-100 small-50')}
        <div className="tiny-100">
          {data.description && <p className="section-description" style={{ color: this.props.Theme.primary }}>{data.description}</p>}
          <p className="section-description" style={{ color: this.props.Theme.primary }}>
            {"* These items may be served raw or undercooked based on your specifications or contain raw or undercooked ingredients. Consuming raw or undercooked seafood or shellfish may increase your risk of foodborne illness, especially if you have certain medical conditions."}
          </p>
        </div>
      </div>
    );
  }

  componentDidUpdate() {
    if(this.props.Theme.loading && !this.props.data.loading) {
      const [data] = this.props.data.content.filter(item => item.component === 'Theme');
      this.props.setTheme(data);
    }
  }

  render() {
    if (!this.props.data || this.props.data.loading) return null;
    if (this.props.Theme.loading) return null;
    const [team] = this.props.data.content.filter(item => item.context === 'team' && item.component === 'PhotoGrid');
    const [restaurant] = this.props.data.content.filter(item => item.context === 'restaurant' && item.component === 'PhotoGrid');
    const [menuOne] = this.props.data.content.filter(item => item.context === 'menu-1');
    const [menuTwo] = this.props.data.content.filter(item => item.context === 'menu-2');
    const [menuThree] = this.props.data.content.filter(item => item.context === 'menu-3');
    const [menuFour] = this.props.data.content.filter(item => item.context === 'menu-4');
    const [menuFive] = this.props.data.content.filter(item => item.context === 'menu-5');
    const [about] = this.props.data.content.filter(item => item.component === 'About');
    const [press] = this.props.data.content.filter(item => item.component === 'Press');
    const [Tour] = this.props.data.content.filter(item => item.component === '3D Tour');
    const [MapComp] = this.props.data.content.filter(item => item.component === 'Map');

    return (
      <Fragment>
        <Element name="home" className="element">
          <div className="home-ph"></div>
        </Element>
        <div className="scroll-body">
          <Element name="menu" className="element">
            <div className="tiny-100 small-50">
              {menuOne && this.menu(menuOne)}
              <div
                className="menu-image tiny-100"
                style={{ backgroundImage: `url(${this.props.menuPhotos[0]})`}}
              />
              {menuTwo && this.menu(menuTwo)}
            </div>
            <div className="tiny-100 small-50">
              <div
                className="menu-image tiny-100"
                style={{ backgroundImage: `url(${this.props.menuPhotos[1]})`}}
              />
              {menuThree && this.menu(menuThree)}
              <div
                className="menu-image tiny-100"
                style={{ backgroundImage: `url(${this.props.menuPhotos[2]})`}}
              />
              {menuFive && this.menu(menuFive)}
            </div>
            <div className="tiny-100">
              {menuFour && this.renderHappyHourMenu(menuFour)}
            </div>
          </Element>
          <Element name="photos" className="element">
            {restaurant && <PhotoGrid {...restaurant} />}
          </Element>
          <Element name="about" className="element about">
            {about && <About data={about} />}
          </Element>
          <Element name="teamPhotos" className="element">
            {team && <PhotoGrid {...team} />}
          </Element>
          {press && (
            <Element name="press" className="element press">
              <Press title={press.title} pressItems={press.pressItems}/>
            </Element>
          )}
          <Element name="contact" className="element contact">
            <Contact {...this.props.contactProps} />
            <div className="contact-section">
              <Map
                containerElement={ <div style={{height: '70vh', width: '100%'}} /> }
                mapElement={ <div style={{height: '70vh', width: '100%'}} /> }
                lat={parseFloat(MapComp.latitude)}
                lng={parseFloat(MapComp.longitude)}
              />
            </div>
            {Tour && Tour.url && (
              <iframe title="Rino Tour" width='100%' height='640' allowFullScreen src={Tour.url}></iframe>
            )}
          </Element>
        </div>
      </Fragment>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setTheme: setTheme,
  }, dispatch)
}

function mapStateToProps(state) {
  return {
    pressItems: state.pressItems,
    photos: state.photos,
    menuItems: state.menuItems,
    Theme: state.Theme,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
