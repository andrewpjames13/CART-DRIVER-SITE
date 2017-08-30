/*jshint esversion: 6 */
import React, { Component } from 'react';

class CmsDrinkForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: (props.itemData && props.itemData.name) || '',
      price: (props.itemData && props.itemData.price) || '',
      description: (props.itemData && props.itemData.items) || '',
      disabled: true
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submit(
      this.props.selectedMenu,
      {
        index: this.props.itemIndex,
        name: this.state.name,
        price: this.state.price,
        items: this.state.description
      }
    )
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    if (name === 'name') {
      this.setState({
        name: value,
        disabled: (
          this.props.itemData &&
          this.props.itemData.name.toLowerCase() === value.toLowerCase()) ||
          (!this.props.itemData && value.length === 0)

      });
    } else if (name === 'price') {
      this.setState({
        price: value,
        disabled: (
          this.props.itemData &&
          this.props.itemData.price.toLowerCase() === value.toLowerCase()) ||
          (!this.props.itemData && value.length === 0)
      });
    } else {
      const test = this.state.description;
      test[name] = value;
      this.setState({
        description: test,
        disabled: (
          this.props.itemData &&
          this.props.itemData.items[0][0][0].toLowerCase() === value.toLowerCase()) ||
          (!this.props.itemData && value.length === 0)
      });
    }
  }

  render() {
    return (
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
        {
          this.props.itemData.items.map((item, index) => (
            <input
              key={`${item}_${index}`}
              className="tiny-100 item-inputs"
              type="text"
              name={index}
              value={this.state.description[index]}
              onChange={this.handleChange}
              placeholder="DESCRIPTION"
            />
          ))
        }
        <button type="submit" value="Submit" className="tiny-100 submit" disabled={this.state.disabled}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M14 3h2.997v5h-2.997v-5zm9 1v20h-22v-24h17.997l4.003 4zm-17 5h12v-7h-12v7zm14 4h-16v9h16v-9z"/>
          </svg>
        </button>
      </form>
    );
  }
}

export default CmsDrinkForm;
