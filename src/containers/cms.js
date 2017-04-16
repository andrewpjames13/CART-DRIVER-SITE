/*jshint esversion: 6 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import CmsSection from '../components/cms_section';
import CmsItem from '../components/cms_item';
import CmsBottomNav from '../components/cms_bottom_nav';
import CmsAddNewItem from '../components/cms_add_new_item';
import Dragula from 'react-dragula';

class Cms extends Component {
  constructor(props) {
    super(props);
    this.openEditableSection = this.openEditableSection.bind(this);
    this.openEditableMenuSection = this.openEditableMenuSection.bind(this);
    this.sortAndSave = this.sortAndSave.bind(this);
    this.renderMenuSections = this.renderMenuSections.bind(this);
    this.renderMenus = this.renderMenus.bind(this);
    this.renderMenuItemsList = this.renderMenuItemsList.bind(this);
    this.dragulaDecorator = this.dragulaDecorator.bind(this);
    this.resetItems = this.resetItems.bind(this);
    this.currentMenuItems = this.currentMenuItems.bind(this);

    this.state = {
      activeSection: '',
      activeMenuSection: '',
      sortAndSave: false
    };
  }

  componentWillMount() {
    this.props.fetchData();
    window.addEventListener("mouseup", () => {
      const menuArray = document.getElementsByClassName(`moving ${this.state.activeMenuSection}`)[0].childNodes;
      const menuItems = this.currentMenuItems();

      Object.keys(menuItems).map((key, index) => {
        if (key !== menuArray[index].className) {
          this.setState({ sortAndSave: true });
        }
      });
    });
  }
  componentShouldUpdate() {
    console.log(this.props.menuItems, 'update');
  }

  dragulaDecorator(componentBackingInstance) {
    if (componentBackingInstance) {
      let options = { };
      Dragula([componentBackingInstance], options);
    }
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
    console.log(section);
    this.setState({ activeMenuSection: section });
  }

  sortAndSave() {
    const menuArray = document.getElementsByClassName(`moving ${this.state.activeMenuSection}`)[0].childNodes;
    const menuItems = this.currentMenuItems();
    let newMenuOrder = [];

    menuArray.forEach(menu => {
      newMenuOrder.push(menuItems[menu.className]);
    });

    this.props.updateMenuItemPositions(`${this.state.activeMenuSection.toLowerCase()}Menu`, newMenuOrder);
    this.setState({ sortAndSave: false });
  }

  renderMenuItemsList(obj) {
    return Object.keys(obj).map((key, index) => {
      return (
        <CmsItem
          key={index}
          item={obj[key]}
          index={key}
          selectedMenu='pizzaMenu'
          deleteMenuItem={this.props.deleteMenuItem}
          updateMenuItem={this.props.updateMenuItem}
        />
      );
    });
  }

  renderMenus(section, menuSectionIndex) {
    return section.map((menuSection, index) => {
      return (
        <CmsSection
          sectionName={menuSection.title}
          activeSection={this.state.activeMenuSection}
          openEditableSection={this.openEditableMenuSection}
          key={menuSection.title+index}
          sortAndSave={this.sortAndSave}
        >
          <div className={`moving ${menuSection.title}`} ref={this.dragulaDecorator}>
            {this.renderMenuItemsList(menuSection.menuItems)}
          </div>
          <CmsAddNewItem
            createMenuItem={this.props.createMenuItem}
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
          sectionName="menu"
          openEditableSection={this.openEditableSection}
          activeSection={this.state.activeSection}
        >
          { this.renderMenuSections() }
        </CmsSection>
        <CmsSection
          sectionName="photos"
          openEditableSection={this.openEditableSection}
          activeSection={this.state.activeSection}
        />
        <CmsSection
          sectionName="press"
          openEditableSection={this.openEditableSection}
          activeSection={this.state.activeSection}
        />
        <CmsBottomNav
          active={this.state.sortAndSave}
          sortAndSave={this.sortAndSave}
          reset={this.resetItems}
        />
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
    updateMenuItemPositions: actions.updateMenuItemPositions
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
