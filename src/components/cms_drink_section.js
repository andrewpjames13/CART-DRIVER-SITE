/*jshint esversion: 6 */
import React, { Component } from 'react';

class CmsDrinkSection extends Component {
  render() {
    return (
      <div
        className={`section ${this.props.sectionName}
          ${this.props.activeSection === `${this.props.sectionName}` ? 'active' : ''}
          ${this.props.activeSection.length > 0 && this.props.activeSection !== `${this.props.sectionName}` ? 'inactive' : ''}
        `}>
        <div className="section-content">
          <button onClick={() => this.props.openEditableSection(this.props.sectionName)}>
            <h1 className="bold title">{this.props.sectionName}</h1>
          </button>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default CmsDrinkSection;
