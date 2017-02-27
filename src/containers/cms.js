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
    this.setState({ activeSection: section, activeMenuSection: '' });
  }

  openEditableMenuSection(section) {
    this.setState({ activeMenuSection: section });
  }

  render() {
    return (
      <div className="cms-container">
        <div
          className={`section home ${this.state.activeSection.length > 0 ? 'inactive' : ''}`}
          onClick={() => this.openEditableSection('')}
          >
            <div className="section-content">
              <button onClick={() => this.openEditableSection('')}>
                <h1 className="bold title white">CART-DRIVER</h1>
              </button>
            </div>
        </div>
        <CmsSection
          sectionName="menu"
          openEditableSection={this.openEditableSection}
          activeSection={this.state.activeSection}
          inactiveWithMenuSection={this.state.activeMenuSection.length > 0}
        >
          <div className={`section pizza
              ${this.state.activeMenuSection === 'pizza' ? 'activeMenuSection' : ''}
              ${this.state.activeMenuSection.length > 0 && this.state.activeMenuSection !== 'pizza' ? 'inactive' : ''}
            `}>
            <button onClick={() => this.openEditableMenuSection('pizza')}>
              <h1 className="bold title">Pizza</h1>
            </button>
          </div>
          <div className={`section anti
              ${this.state.activeMenuSection === 'anti' ? 'activeMenuSection' : ''}
              ${this.state.activeMenuSection.length > 0 && this.state.activeMenuSection !== 'anti' ? 'inactive' : ''}
            `}>
            <button onClick={() => this.openEditableMenuSection('anti')}>
              <h1 className="bold title">Antipasta</h1>
            </button>
          </div>
          <div className={`section drinks
              ${this.state.activeMenuSection === 'drinks' ? 'activeMenuSection' : ''}
              ${this.state.activeMenuSection.length > 0 && this.state.activeMenuSection !== 'drinks' ? 'inactive' : ''}
            `}>
            <button onClick={() => this.openEditableMenuSection('drinks')}>
              <h1 className="bold title">Drinks</h1>
            </button>
          </div>
          <div className={`section happy
              ${this.state.activeMenuSection === 'happy' ? 'activeMenuSection' : ''}
              ${this.state.activeMenuSection.length > 0 && this.state.activeMenuSection !== 'happy' ? 'inactive' : ''}
            `}>
            <button onClick={() => this.openEditableMenuSection('happy')}>
              <h1 className="bold title">Happy Hour</h1>
            </button>
          </div>
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
