/*jshint esversion: 6 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import CmsSection from '../components/cms_section';

class Cms extends Component {
  componentWillMount() {
    this.props.fetchData();
    this.openEditableSection = this.openEditableSection.bind(this);
    this.openEditableMenuSection = this.openEditableMenuSection.bind(this);

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
          <CmsSection
            sectionName="pizza"
            openEditableSection={this.openEditableMenuSection}
            activeSection={this.state.activeMenuSection}
          />
          <CmsSection
            sectionName="anti"
            openEditableSection={this.openEditableMenuSection}
            activeSection={this.state.activeMenuSection}
          />
          <CmsSection
            sectionName="drinks"
            openEditableSection={this.openEditableMenuSection}
            activeSection={this.state.activeMenuSection}
          />
          <CmsSection
            sectionName="happy"
            openEditableSection={this.openEditableMenuSection}
            activeSection={this.state.activeMenuSection}
          />
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

        {/* <CmsMenuList menuItems={this.props.menuItems} /> */}
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
