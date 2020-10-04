/*jshint esversion: 6 */
import React, { PureComponent } from 'react';
import withTheme from 'components/withTheme';
import HeadLine from './head_line';
import transformImage from 'helpers/transformImage';
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
    console.log(this.state.selectedImage)
    console.log(this.props.photos)
    const [accessability] = this.props.photos.filter((photo) => transformImage(photo.image, 'filters:quality(100)') === this.state.selectedImage)
    console.log(accessability)
    return(
      <div className="photo-grid-section">
        <HeadLine title={this.props.title} noBorder />
        <div className="photo-scroll">
          {this.props.photos.map((photo, index) => (
            <button
              aria-label={photo.ariaLabel}
              className="photo-button"
              key={index}
              onClick={ () => {this.handlePhotoClick(transformImage(photo.image, 'filters:quality(100)'))}}
              style={{ backgroundImage: `url("${transformImage(photo.image, '800x0/filters:quality(100)')}")`}}
            />
          ))}
        </div>
        <button className={classes} onClick={this.closePhotoLightBox}>
          <img alt={accessability && accessability.alt} className="display-photo" src={this.state.selectedImage} role="presentation" />
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
