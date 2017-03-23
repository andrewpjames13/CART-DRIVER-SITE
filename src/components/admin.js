import React, { Component } from 'react';
import firebase from 'firebase';
import Cms from '../containers/cms';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.renderContent = this.renderContent.bind(this);

    this.state = { loggedIn: null };
  }

  componentWillMount() {
    const email = 'andrewpjames87@gmail.com'
    const password = 'pass123'
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error, 'error');
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
        console.log(user, 'signed-in');
      } else {
        console.log('not logged in');
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Cms />
        );
      case false:
        // return <LoginForm />;
        return (
          <h1>LoginForm</h1>
        );
      default:
        return <h1>LoginForm</h1>;
    }
  }

  render() {
    return (
      <div style={{height: '100%'}}>
        {this.renderContent()}
      </div>
    );
  }
}

export default Admin;
