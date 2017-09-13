import React, { Component } from 'react';
import firebase from 'firebase';
import classNames from 'classnames';
import Cms from '../containers/cms';
import LoginForm from './login_form';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.renderContent = this.renderContent.bind(this);
    this.errorMessageHandler = this.errorMessageHandler.bind(this);

    this.state = {
      loggedIn: false,
      errorMessage: ''
     };
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  errorMessageHandler(message) {
    this.setState({ errorMessage: message });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Cms />
        );
      default:
        return (
          <div className="tiny-100 login-container">
            <h2>Welcome to the CART-DRIVER CMS</h2>
            <LoginForm errorMessageHandler={this.errorMessageHandler}/>
          </div>
        );
    }
  }

  render() {
    const errorStyles = classNames({
      'error': true,
      'active': this.state.errorMessage.length > 0
    });
    return (
      <div className="admin">
        <div className={errorStyles}>{this.state.errorMessage}</div>
        {this.renderContent()}
      </div>
    );
  }
}

export default Admin;
