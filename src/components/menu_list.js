/*jshint esversion: 6 */
import React, { Component } from 'react';
import HeadLine from './head_line';

class MenuList extends Component {
  renderDescriptionList(array) {
    return array.map((item) =>  (
      <li key={item} >
        { item }
      </li>
    ));
  }

  renderMenuItemsList(obj) {
    return Object.keys(obj).map((key) => (
      <div key={obj[key].name} className="menu-item tiny-100">
        <div className="tiny-80">
          <h5 className="red">{obj[key].name}</h5>
          <ul>
            { this.renderDescriptionList(obj[key].items) }
          </ul>
        </div>
        <div className="tiny-20 red">
          { obj[key].price && <h5 className="item-price">{ obj[key].price }</h5> }
        </div>
      </div>
    ));
  }

  renderHappyMenuItemsList(obj) {
    return Object.keys(obj).map((key) => (
      <div key={obj[key].name} className="menu-section tiny-100 small-50">
        <div className="menu-item tiny-100">
          <div className="tiny-80">
            <h5 className="red">{obj[key].name}</h5>
            <ul>
              { this.renderDescriptionList(obj[key].items) }
            </ul>
          </div>
          <div className="tiny-20 red">
            { obj[key].price && <h5 className="item-price">{ obj[key].price }</h5> }
          </div>
        </div>
      </div>
    ));
  }

  renderPhotos(index, photo) {
    if(index !== 0 && photo.length > 0) {
      return (
        <img className="menu-image" src={photo} alt={'image'+index}/>
      )
    }
  }

  renderMenus(section, menuSectionIndex) {
    return section.map((menuSection, index) => (
      <div key={menuSection.title+index}>
        { this.renderPhotos(index + menuSectionIndex, menuSection.sectionPhoto) }
        <div key={menuSection.title} className="menu-section">
          <HeadLine title={menuSection.title} />
          { this.renderMenuItemsList(menuSection.menuItems) }
          <p className="section-description red">{ menuSection.sectionDescription }</p>
        </div>
      </div>
    ));
  }

  renderHappyHourMenu(section, menuSectionIndex) {
    return section.map((menuSection, index) => (
      <div key={menuSection.title+index}>
        <div key={menuSection.title} className="menu-section">
          <HeadLine title={menuSection.title} />
          <div className="happyHourMenu">
            { this.renderHappyMenuItemsList(menuSection.menuItems) }
          </div>
          <p className="section-description red">{ menuSection.sectionDescription }</p>
          <p className="section-description red">
            {"* These items may be served raw or undercooked based on your specifications or contain raw or undercooked ingredients. Consuming raw or undercooked seafood or shellfish may increase your risk of foodborne illness, especially if you have certain medical conditions."}
          </p>
        </div>
      </div>
    ));
  }

  renderMenuSections() {
    return this.props.menuItems.map((section, index) => {
      if ( index === 2 ) {
        return (
          <div key={`${section.title}+${index}`}>
            <div className="tiny-100 small-50">
              <img className="menu-image" src={`/${section[0].sectionPhoto}`} alt={'image'+index}/>
            </div>
            <div className="tiny-100">
              { this.renderHappyHourMenu(section, index) }
            </div>
          </div>
        )
      } else {
        return (
          <div key={`${section.title}+${index}`} className="tiny-100 small-50">
            { this.renderMenus(section, index) }
          </div>
        )
      }
    });
  }

  render() {
    return (
      <div>
        { this.renderMenuSections() }
      </div>
    );
  }
}

export default MenuList;
