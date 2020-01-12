/*jshint esversion: 6 */
import React, { PureComponent } from 'react';
import withTheme from 'components/withTheme';
import HeadLine from './head_line';
import classNames from 'classnames';

function transformImage(image, option) {
  var imageService = '//img2.storyblok.com/'
  var path = image.replace('//a.storyblok.com', '')
  return imageService + option + path
}

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
        <HeadLine title={this.props.title} noBorder />
        <div className="photo-scroll">
          {this.props.photos.map((photo, index) => (
            <button
              className="photo-button"
              key={index}
              onClick={ () => {this.handlePhotoClick(transformImage(photo.image, 'filters:quality(70)'))}}
              style={{ backgroundImage: `url("${transformImage(photo.image, 'filters:quality(30)')}")`}}
            />
          ))}
        </div>
        <button className={classes} onClick={this.closePhotoLightBox}>
          <img className="display-photo" src={this.state.selectedImage} role="presentation" />
          <p className="close bold" style={{ color: this.props.Theme.primary }}>CLICK ON PHOTO TO CLOSE</p>
        </button>
      </div>
    );
  }
}

export default withTheme(PhotoGrid);

PhotoGrid.defaultProps = {
  title: 'Photos',
};
