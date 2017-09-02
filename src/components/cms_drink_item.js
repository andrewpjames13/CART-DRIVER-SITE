/*jshint esversion: 6 */
import React, { Component } from 'react';
import CmsDrinkForm from './cms_drink_form';
import ReactConfirmAlert from 'react-confirm-alert';
import classNames from 'classnames';

class CmsDrinkItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openUpdate: false,
      showDialog: false,
    };
  }

  openUpdateItem() {
    this.setState({
      openUpdate: !this.state.openUpdate
    });
  }

  render() {
    const styles = classNames({
      "form-container": true,
      open: this.state.openUpdate
    });

    return (
      <div className={this.props.index}>
        {
          this.state.showDialog &&
          <ReactConfirmAlert
            title="Delete Item"
            message="Are you sure to do this?"
            confirmLabel="Yes"
            cancelLabel="No"
            onConfirm={() => this.props.deleteMenuItem(this.props.selectedMenu, this.props.index)}
            onCancel={() => this.setState({ showDialog: false })}
          />
        }
        <div className="cms-item" style={{transform: `${this.props.isOpen ? 'translateX(-225px)' : 'translateX(0)'}`}}>
          <h2 className="bold" key={this.props.item.name}>
            {this.props.item.name}
          </h2>
          <div className="more-menu">
            <button className="cta more" onClick={() => {
              this.setState({ openUpdate: false });
              this.props.openItem(this.props.item.name);
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"/>
              </svg>
            </button>
            <button className="cta edit" onClick={() => this.openUpdateItem()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z"/>
              </svg>
            </button>
            <button className="cta delete" onClick={() => {
              this.setState({ showDialog: true });
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z"/>
              </svg>
            </button>
            <div className="cta move">
              <button
                className="up"
                onClick={() => {
                  this.props.moveMenuItem(this.props.index, 'up')
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M1,11l2.8,2.8L10,7.6V24h4V7.6l6.2,6.2L23,11L12,0L1,11z"/>
                </svg>
              </button>
              <button
                className="down"
                onClick={() => {
                  this.props.moveMenuItem(this.props.index, 'down')
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M23,13l-2.8-2.8L14,16.4V0h-4v16.4l-6.2-6.2L1,13l11,11L23,13z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={styles}>
          <CmsDrinkForm
            itemData={this.props.item}
            itemIndex={this.props.index}
            submit={this.props.updateMenuItem}
            selectedMenu={this.props.selectedMenu}
            load={this.props.load}
          />
        </div>
      </div>
    );
  }
}

export default CmsDrinkItem;
