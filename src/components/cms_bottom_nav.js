/*jshint esversion: 6 */
import React, { Component } from 'react';
import classNames from 'classnames';

class CmsBottomNav extends Component {
  constructor(props) {
    super(props);
    this.openMenu = this.openMenu.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      open: false,
      name: '',
      price: '',
      description: ''
    };
  }

  openMenu() {
    console.log('hie', this.state.open);
    this.setState({open: !this.state.open});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createMenuItem(
      'pizzaMenu',
      {
        name: this.state.name,
        price: this.state.price,
        items:[this.state.description]
      }
    )
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    if (name === 'name') {
      this.setState({name: value});
    } else if (name === 'price') {
      this.setState({price: value});
    } else if (name === 'description') {
      this.setState({description: value});
    }
  }

  render() {
    let navClass = classNames({
      'bottom-nav': true,
      'open': this.state.open,
      'active': this.props.active
    });
    console.log(this.state.description > 0);
    return (
      <div className={navClass}>
        <button className="tiny-100 cta new" onClick={() => this.openMenu()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/>
          </svg>
        </button>
        <form onSubmit={this.handleSubmit}>
          <label
            style={this.state.name.length > 0 ? {opacity: 1} : {opacity:0}}
            htmlFor="name"
            className="tiny-100 label">
            Name
          </label>
          <input
            className="tiny-100"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="NAME"
          />
          <label
            style={this.state.price.length > 0 ? {opacity: 1} : {opacity:0}}
            htmlFor="price"
            className="tiny-100 label">
            Price
          </label>
          <input
            className="tiny-100"
            type="text"
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
            placeholder="PRICE"
          />
          <label
            style={this.state.description.length > 0 ? {opacity: 1} : {opacity:0}}
            htmlFor="description"
            className="tiny-100 label">description
          </label>
          <input
            className="tiny-100"
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            placeholder="DESCRIPTION"
          />
          <button type="submit" value="Submit" className="tiny-100 submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M14 3h2.997v5h-2.997v-5zm9 1v20h-22v-24h17.997l4.003 4zm-17 5h12v-7h-12v7zm14 4h-16v9h16v-9z"/>
            </svg>
          </button>
        </form>
      </div>
    );
  }
}

export default CmsBottomNav;
