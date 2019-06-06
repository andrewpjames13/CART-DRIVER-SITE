import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Element } from 'react-scroll';
import * as actions from 'actions';
import setTheme from 'actions/SetTheme';
import PhotoGrid from 'components/photo_grid';
import Press from 'components/press';
import About from 'components/about';
import Contact from 'components/contact';
import HeadLine from 'components/head_line';

class Content extends Component {
  constructor(props) {
    super(props);
    this.props.fetchData()
  }

  menuItems(data, classes = 'menu-item tiny-100') {
    const items = data.MenuItems.map(item => (
      <div key={item._uid} className={classes}>
        <div className="tiny-80">
          <h5 style={{ color: this.props.Theme.primary }}>{item.name}</h5>
          <ul>{item.descriptionItems.map(i => <li key={i._uid}>{i.item}</li>)}</ul>
        </div>
        <div className="tiny-20" style={{ color: this.props.Theme.primary }}>
          {item.price && <h5 className="item-price">{item.price}</h5>}
        </div>
      </div>
    ))
    return items;
  }

  menu(data) {
    return (
      <div className="tiny-100">
        <div className="menu-section">
          <HeadLine title={data.Title} />
          {this.menuItems(data)}
          {data.description && <p className="section-description" style={{ color: this.props.Theme.primary }}>{data.description}</p>}
        </div>
      </div>
    );
  }

  renderHappyHourMenu(data) {
    return (
      <div className="menu-section">
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
    const [about] = this.props.data.content.filter(item => item.component === 'About');
    const [press] = this.props.data.content.filter(item => item.component === 'Press');

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
                style={{ backgroundImage: `url('images/menu/pizza-menu-min.jpg')`}}
              />
            {menuTwo && this.menu(menuTwo)}
            </div>
            <div className="tiny-100 small-50">
              <div
                className="menu-image tiny-100"
                style={{ backgroundImage: `url('images/menu/antipasti-menu-min.jpg')`}}
              />
            {menuThree && this.menu(menuThree)}
              <div
                className="menu-image tiny-100"
                style={{ backgroundImage: `url('images/menu/cocktails-menu-min.jpg')`}}
              />
            </div>
            <div className="tiny-100">
              {menuFour && this.renderHappyHourMenu(menuFour)}
            </div>
          </Element>
          <Element name="photos" className="element">
            <PhotoGrid {...restaurant} />
          </Element>
          <Element name="about" className="element about">
            <About data={about} />
          </Element>
          <Element name="teamPhotos" className="element">
            <PhotoGrid {...team} />
          </Element>
          <Element name="press" className="element press">
            <Press title={press.title} pressItems={press.pressItems}/>
          </Element>
          <Element name="contact" className="element contact">
            <Contact />
            <iframe title="Rino Tour" width='100%' height='640' allowFullScreen src='https://tourmkr.com/G1UJ4bBgxl/7209046p,2738354m,62.99h,89.85t'></iframe>
          </Element>
        </div>
      </Fragment>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchData: actions.fetchData,
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
