/*jshint esversion: 6 */
import React, { Component } from 'react';
import HeadLine from './head_line';

class MenuList extends Component {
  renderDescriptionList(array) {
    return array.map((item) => {
      return (
        <li key={item} >
          { item }
        </li>
      );
    });
  }

  renderMenuItemsList(array) {
    let itemPrice = null;

    return array.map((item) => {
      if (item.price) {
        itemPrice = (
          <h2 className="item-price">{ item.price }</h2>
        )
      } else {
        itemPrice = ''
      }
      return (
        <div key={item.name} className="menu-item tiny-100">
          <div className="tiny-80">
            <h4 className="bold">{item.name}</h4>
            <ul>
              { this.renderDescriptionList(item.items) }
            </ul>
          </div>
          <div className="tiny-20">
            { itemPrice }
          </div>
        </div>
      );
    });
  }

  renderPhotos(index, photo) {
    if(index !== 0 && photo.length > 0) {
      return (
        <img className="menu-image" src={photo} alt={'image'+index}/>
      )
    }
  }

  renderMenus(section, menuSectionIndex) {
    return section.map((menuSection, index) => {
      return (
        <div key={menuSection.title+index}>
          { this.renderPhotos(index + menuSectionIndex, menuSection.sectionPhoto) }
          <div key={menuSection.title} className="menu-section">
            <HeadLine title={menuSection.title} />
            <p className="section-description">{ menuSection.sectionDescription }</p>
            { this.renderMenuItemsList(menuSection.menuItems) }
          </div>
        </div>
      );
    });
  }

  renderMenuSections() {
    return this.props.menuItems.map((section, index) => {
      return (
        <div key={`${section.title}+${index}`} className="tiny-100 small-50">
          { this.renderMenus(section, index) }
        </div>
      )
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
