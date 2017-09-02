/*jshint esversion: 6 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import CmsSection from '../components/cms_section';
import CmsItem from '../components/cms_item';
import CmsDrinkItem from '../components/cms_drink_item';
import CmsAddNewItem from '../components/cms_add_new_item';

class Cms extends Component {
  constructor(props) {
    super(props);
    this.openEditableSection = this.openEditableSection.bind(this);
    this.openEditableMenuSection = this.openEditableMenuSection.bind(this);
    this.sortAndSave = this.sortAndSave.bind(this);
    this.renderMenuSections = this.renderMenuSections.bind(this);
    this.renderMenus = this.renderMenus.bind(this);
    this.renderMenuItemsList = this.renderMenuItemsList.bind(this);
    this.renderDrinkMenuItemsList = this.renderDrinkMenuItemsList.bind(this);
    this.resetItems = this.resetItems.bind(this);
    this.currentMenuItems = this.currentMenuItems.bind(this);
    this.move = this.move.bind(this);
    this.openItem = this.openItem.bind(this);

    this.state = {
      activeSection: 'Menu',
      activeMenuSection: '',
      activeItem: null
    };
  }

  componentWillMount() {
    this.props.fetchData();
  }

  resetItems() {
    this.props.fetchData();
  }

  currentMenuItems() {
    let currentMenuItems = [];
    if (this.state.activeMenuSection === 'Pizza') {currentMenuItems = this.props.menuItems[0][0].menuItems;}
    if (this.state.activeMenuSection === 'Antipasti') {currentMenuItems = this.props.menuItems[0][1].menuItems;}
    if (this.state.activeMenuSection === 'Drinks') {currentMenuItems = this.props.menuItems[1][0].menuItems;}
    if (this.state.activeMenuSection === 'After') {currentMenuItems = this.props.menuItems[1][1].menuItems;}
    return currentMenuItems;
  }

  openEditableSection(section, e) {
    if (section === 'home') {
      this.setState({ activeSection: '', activeMenuSection: '' });
    } else {
      this.setState({ activeSection: section, activeMenuSection: '' });
    }
  }

  openEditableMenuSection(section) {
    this.setState({ activeMenuSection: section });
  }

  move(array, oldIndex, newIndex) {
      while (oldIndex < 0) { oldIndex += array.length; }
      while (newIndex < 0) { newIndex += array.length; }
      if (newIndex >= array.length) {
          var k = newIndex - array.length;
          while ((k--) + 1) {
              array.push(undefined);
          }
      }
      array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
      return array;
  }

  sortAndSave(key, direction) {
    const oldIndex = parseInt(key, 10);
    const currentArray = this.currentMenuItems();
    let newMenuOrder = [];

    if (direction === 'down' && oldIndex !== currentArray.length - 1) {
      newMenuOrder = this.move(currentArray, oldIndex, oldIndex+1);
    }

    if (direction === 'up' && oldIndex !== 0) {
      newMenuOrder = this.move(currentArray, oldIndex, oldIndex-1);
    }

    this.props.updateMenuItemPositions(`${this.state.activeMenuSection.toLowerCase()}Menu`, newMenuOrder);
  }

  openItem(openItem) {
    if (this.state.activeItem === openItem) {
      this.setState({activeItem: null});
    } else {
      this.setState({activeItem: openItem});
    }
  }

  renderMenuItemsList(obj, menu) {
    return Object.keys(obj).map((key, index) => {
      return (
        <CmsItem
          key={obj[key].name}
          item={obj[key]}
          index={key}
          selectedMenu={menu}
          deleteMenuItem={this.props.deleteMenuItem}
          updateMenuItem={this.props.updateMenuItem}
          moveMenuItem={this.sortAndSave}
          openItem={this.openItem}
          isOpen={this.state.activeItem === obj[key].name}
          load={this.props.load}
        />
      );
    });
  }

  renderDrinkMenuItemsList(obj, menu) {
    return Object.keys(obj).map((key, index) => {
      return (
        <CmsDrinkItem
          key={obj[key].name}
          item={obj[key]}
          index={key}
          selectedMenu={menu}
          deleteMenuItem={this.props.deleteMenuItem}
          updateMenuItem={this.props.updateMenuItem}
          moveMenuItem={this.sortAndSave}
          openItem={this.openItem}
          isOpen={this.state.activeItem === obj[key].name}
          load={this.props.load}
        />
      );
    });
  }

  renderMenus(section, menuSectionIndex) {
    return section.map((menuSection, index) => {
      let menu = menuSection.title === 'Pizza' ? 'pizzaMenu' : 'antipastiMenu';
      if(menuSection.title === 'Happy Hour' || menuSection.title === 'Drinks') {
        menu = menuSection.title === 'Happy Hour' ? 'happyHourMenu' : 'drinksMenu';
        return (
          <CmsSection
            sectionName={menuSection.title}
            activeSection={this.state.activeMenuSection}
            openEditableSection={this.openEditableMenuSection}
            key={menuSection.title+index}
            >
              <div className={`moving ${menuSection.title}`} >
                {this.renderDrinkMenuItemsList(menuSection.menuItems, menu)}
              </div>
            </CmsSection>
          );
        }

        return (
          <CmsSection
            sectionName={menuSection.title}
            activeSection={this.state.activeMenuSection}
            openEditableSection={this.openEditableMenuSection}
            key={menuSection.title+index}
            >
              <div className={`moving ${menuSection.title}`} >
                {this.renderMenuItemsList(menuSection.menuItems, menu)}
              </div>
              <CmsAddNewItem
                createMenuItem={this.props.createMenuItem}
                selectedMenu={menu}
                load={this.props.load}
              />
            </CmsSection>
          );
    });
  }

  renderMenuSections() {
    return this.props.menuItems.map((section, index) => {
      return (
        <div key={`${section.title}+${index}`} >
          { this.renderMenus(section, index) }
        </div>
      )
    });
  }

  render() {
    return (
      <div className="cms-container">
        <div
          className={`section home ${this.state.activeSection.length > 0 ? 'inactive' : ''}`}
          onClick={() => this.openEditableSection('home')}
          >
            <div className="section-content">
              <button onClick={() => this.openEditableSection('home')}>
                <h1 className="bold title white">CART-DRIVER</h1>
              </button>
            </div>
        </div>
        <CmsSection
          sectionName="Menu"
          openEditableSection={this.openEditableSection}
          activeSection={this.state.activeSection}
        >
          { this.renderMenuSections() }
        </CmsSection>
{/* {        <CmsSection
          sectionName="photos"
          openEditableSection={this.openEditableSection}
          activeSection={this.state.activeSection}
        />
        <CmsSection
          sectionName="press"
          openEditableSection={this.openEditableSection}
          activeSection={this.state.activeSection}
        />} */}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchData: actions.fetchData,
    createMenuItem: actions.createMenuItem,
    deleteMenuItem: actions.deleteMenuItem,
    updateMenuItem: actions.updateMenuItem,
    updateMenuItemPositions: actions.updateMenuItemPositions,
    load: actions.load,
   }, dispatch)
}

function mapStateToProps(state) {
  return {
    pressItems: state.pressItems,
    photos: state.photos,
    menuItems: state.menuItems
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cms);
