/*jshint esversion: 6 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import HeadLine from '../components/head_line';
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
      <div className="photo-grid-section">
        <HeadLine title="Photos"/>
        <div className="photo-scroll">
          {this.props.photos.map((photo, index) => (
            <button
              className="photo-button"
              key={index}
              onClick={ () => {this.handlePhotoClick(photo.photoSrc)}}
            >
              <img className="photo" src={photo.photoSrc} role="presentation"/>
            </button>
          ))}
        </div>
        <button className={classes} onClick={this.closePhotoLightBox}>
          <img className="display-photo" src={this.state.selectedImage} role="presentation" />
          <p className="close bold">CLICK ON PHOTO TO CLOSE</p>
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
