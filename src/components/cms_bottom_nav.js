/*jshint esversion: 6 */
import React, { Component } from 'react';
import classNames from 'classnames';

class CmsBottomNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let navClass = classNames({
      'bottom-nav': true,
      'active': this.props.active
    });

    return (
      <div className={navClass}>
        <button className="tiny-50 cta submit" onClick={() => this.props.sortAndSave()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M14 3h2.997v5h-2.997v-5zm9 1v20h-22v-24h17.997l4.003 4zm-17 5h12v-7h-12v7zm14 4h-16v9h16v-9z"/>
          </svg>
        </button>
        <button className="tiny-50 cta reset" onClick={() => this.props.reset()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/>          </svg>
        </button>
      </div>
    );
  }
}

export default CmsBottomNav;
