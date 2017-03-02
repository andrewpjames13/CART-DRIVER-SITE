/*jshint esversion: 6 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import CmsSection from '../components/cms_section';
import CmsItem from '../components/cms_item';

class Cms extends Component {
  componentWillMount() {
    this.props.fetchData();
    this.openEditableSection = this.openEditableSection.bind(this);
    this.openEditableMenuSection = this.openEditableMenuSection.bind(this);
    this.renderMenuSections = this.renderMenuSections.bind(this);
    this.renderMenus = this.renderMenus.bind(this);
    this.renderMenuItemsList = this.renderMenuItemsList.bind(this);

    this.state = {
      activeSection: '',
      activeMenuSection: ''
    };
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

  renderMenuItemsList(array) {
    return array.map((item) => {
      return (
        <CmsItem item={item} />
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
        >
          {this.renderMenuItemsList(menuSection.menuItems)}
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
        {/* <div>
          <button
            style={{"width": "100px", "height": "100px", "backgroundColor": "green"}}
            onClick={() => this.props.createMenuItem(this.props.menuItems)}/>
          <button
            style={{"width": "100px", "height": "100px", "backgroundColor": "red"}}
            onClick={() => this.props.deleteMenuItem('8')}/>
          <button
            style={{"width": "100px", "height": "100px", "backgroundColor": "purple"}}
            onClick={() => this.props.updateMenuItem('8')}/>
        </div> */}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchData: actions.fetchData,
    createMenuItem: actions.createMenuItem,
    deleteMenuItem: actions.deleteMenuItem,
    updateMenuItem: actions.updateMenuItem
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
