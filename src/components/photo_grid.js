/*jshint esversion: 6 */
import React, { PureComponent } from 'react';
import HeadLine from './head_line';
import classNames from 'classnames';

class PhotoGrid extends PureComponent {
  state = { selectedImage: '' };

  handlePhotoClick = (selectedImage) => this.setState({selectedImage});

  closePhotoLightBox = () => this.setState({selectedImage: ''});

  render() {
    let classes = classNames({
      'photo-light-box': true,
      'show': this.state.selectedImage.length > 0,
    });
    return(
      <div className="photo-grid-section">
        <HeadLine title={this.props.title}/>
        <div className="photo-scroll">
          {this.props.photos.map((photo, index) => (
            <button
              className="photo-button"
              key={index}
              onClick={ () => {this.handlePhotoClick(photo.photoSrc)}}
              style={{ backgroundImage: `url(${photo.photoSrc})`}}
            />
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

export default PhotoGrid;

PhotoGrid.defaultProps = {
  title: 'Photos',
};
