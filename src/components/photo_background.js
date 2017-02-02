/*jshint esversion: 6 */
import React, { PureComponent } from 'react';

class PhotoBackground extends PureComponent {
  render() {
    return(
      <div
        className="photo-section--background"
        style={{'backgroundImage': `url(${this.props.photoSrc})`}}
        >
      </div>
    );
  }
}

export default PhotoBackground;
