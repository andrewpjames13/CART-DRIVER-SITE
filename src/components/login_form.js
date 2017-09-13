/*jshint esversion: 6 */
import React, { Component } from 'react';
import firebase from 'firebase';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
      this.props.errorMessageHandler(error.message);
    });
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    if (name === 'email') {
      this.setState({
        email: value
      });
    } else if (name === 'password') {
      this.setState({
        password: value
      });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label
            style={this.state.email.length > 0 ? {opacity: 1} : {opacity:0}}
            htmlFor="email"
            className="tiny-100 label">
            Email
          </label>
          <input
            className="tiny-100"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="EMAIL"
          />
          <label
            style={this.state.password.length > 0 ? {opacity: 1} : {opacity:0}}
            htmlFor="password"
            className="tiny-100 label">
            Email
          </label>
          <input
            className="tiny-100"
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="PASSWORD"
          />
          <button type="submit" value="Submit" className="tiny-100 submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
