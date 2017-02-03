/*jshint esversion: 6 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import HeadLine from '../components/head_line';
import PhotoBox from '../components/photo_box';
import PhotoBackground from '../components/photo_background';

class Photos extends PureComponent {
  constructor(props) {
    super(props);
    this.leftClick = this.leftClick.bind(this);
    this.rightClick = this.rightClick.bind(this);

    this.state = {
      activePhotoIndex: 0
    };
  }

  leftClick() {
    if (this.state.activePhotoIndex > 0) {
      this.setState({
        activePhotoIndex: this.state.activePhotoIndex - 1
      });
    }

    if (this.state.activePhotoIndex === 0) {
      this.setState({
        activePhotoIndex: this.props.photos.length-1
      });
    }
  }

  rightClick() {
    if (this.state.activePhotoIndex < this.props.photos.length-1 ) {
      this.setState({
        activePhotoIndex: this.state.activePhotoIndex + 1
      });
    }

    if (this.state.activePhotoIndex === this.props.photos.length-1) {
      this.setState({
        activePhotoIndex: 0
      });
    }
  }

  render() {
    return (
      <div className="photo-section">
        <ReactCSSTransitionGroup
          transitionName="cross-fade"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
          <PhotoBackground
            photoSrc={this.props.photos[this.state.activePhotoIndex].photoSrc}
            key={this.props.photos[this.state.activePhotoIndex].photoSrc}
          />
        </ReactCSSTransitionGroup>

        <div className="photo-section--content">
          <HeadLine title="Photos" />
          <ReactCSSTransitionGroup
            transitionName="tile"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}>
              <PhotoBox
                photoSrc={this.props.photos[this.state.activePhotoIndex].photoSrc}
                key={this.props.photos[this.state.activePhotoIndex].photoSrc}
              />
            </ReactCSSTransitionGroup>
          <button className="arrow left" onClick={this.leftClick}>
            <svg x="0px" y="0px" viewBox="0 0 24 24">
              <path d="M5,3l3.1-3L20,12L8.1,24L5,21l9-9L5,3z"/>
            </svg>
          </button>
          <button className="arrow right" onClick={this.rightClick}>
            <svg x="0px" y="0px" viewBox="0 0 24 24">
              <path d="M5,3l3.1-3L20,12L8.1,24L5,21l9-9L5,3z"/>
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos
  }
}

export default connect(mapStateToProps, actions)(Photos);
