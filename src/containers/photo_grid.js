/*jshint esversion: 6 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import classNames from 'classnames';

class PhotoGrid extends PureComponent {
  constructor(props) {
    super(props);
    this.handlePhotoClick = this.handlePhotoClick.bind(this);
    this.closePhotoLightBox = this.closePhotoLightBox.bind(this);
    this.state = {
      selectedImage: ''
    };
  }

  handlePhotoClick(selectedImage) {
    this.setState({selectedImage});
  }

  closePhotoLightBox() {
    this.setState({selectedImage: ''});
  }

  render() {
    let classes = classNames({
      'photo-light-box': true,
      'show': this.state.selectedImage.length > 0,
    });
    return(
      <div className="tiny-100 photo-grid-section">
        {this.props.photos.map((photo, index) => (
          <button
            className="tiny-100 small-25 photo-button"
            key={index}
            onClick={ () => {this.handlePhotoClick(photo.photoSrc)}}
          >
            <img className="tiny-100 photo" src={photo.photoSrc} role="presentation"/>
          </button>
        ))}
        <button className={classes} onClick={this.closePhotoLightBox}>
          <button className="close">X</button>
          <img className="display-photo" src={this.state.selectedImage} role="presentation" />
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos
  }
}

export default connect(mapStateToProps, actions)(PhotoGrid);
