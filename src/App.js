import React, { Fragment, PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'actions';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import withTheme from 'components/withTheme';
import NavBar from './components/nav_bar/nav_bar';
import DeskNavBar from './components/desk_nav_bar';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Rino from 'components/Rino/Rino';
import Highlands from 'components/Highlands/Highlands';
import HomeScreen from 'components/home_screen';
import CountDown from 'components/count_down';
import ScrollContainer from 'containers/scroll_container';

const sections = [
  {
    name: 'home',
    active: true,
    svgPath: 'M24,12.1l-1.4,1.5L12,3.7L1.4,13.6L0,12.1L12,1C12,1,24,12.1,24,12.1z M20,13.9L18,24H6L4,13.9l8-7.4C12,6.5,20,13.9,20,13.9z M13,20c0-0.6-0.4-1-1-1s-1,0.4-1,1s0.4,1,1,1S13,20.6,13,20z M14,15c0-1.1-0.9-2-2-2s-2,0.9-2,2s0.9,2,2,2S14,16.1,14,15z'
  }, {
    name: 'menu',
    active: false,
    svgPath: 'M20.1,4.6c-0.2-0.2-4-3.8-8.1-3.8c-4,0-7.9,3.6-8.1,3.8L3.5,5l2.8,6.1l2.4,5.3l3.3,7.2l4.3-9.4l2.3-5L20.5,5L20.1,4.6z M17.1,8.4c-0.2,0-0.4-0.1-0.5-0.1c-1.6,0-2.9,1.3-2.9,2.9c0,0.9,0.4,1.8,1.1,2.3l-2.8,6l-2-4.4c0.2-0.4,0.4-0.9,0.4-1.4c0-1.4-1-2.6-2.3-2.9L6.4,7.3C6.9,6.9,9.6,5,12,5c2.4,0,5.1,1.9,5.6,2.3L17.1,8.4z M18.4,5.7c-1-0.7-3.7-2.4-6.4-2.4S6.7,5,5.6,5.7L5.5,5.4C6.6,4.6,9.3,2.5,12,2.5c2.7,0,5.4,2.1,6.5,2.9L18.4,5.7z'
  }, {
    name: 'call',
    active: false,
    svgPath: 'M2.8,20.2l-0.9-1c-5-6,13-22.4,18.4-16.6l0.9,1l-5.5,5l-0.9-1c-1.7-1.8-8.9,4.8-7.3,6.6l0.9,1C8.3,15.2,2.8,20.2,2.8,20.2zM23.1,5.7l-1.3-1.4l-5.5,5l1.3,1.4L23.1,5.7z M10.3,17.4L9,15.9l-5.5,5l1.3,1.4C4.8,22.4,10.3,17.4,10.3,17.4z'
  }, {
    name: 'photos',
    active: false,
    svgPath: 'M18,5l-2-3H8L6,5H0v17h24V5H18z M22,12h-4.1c0.6,3.8-2.3,7-5.9,7c-3.6,0-6.5-3.2-5.9-7H2V7h5.1l2-3h5.9l2,3H22V12z M12,9c-2.2,0-4,1.7-4,3.9c0,2.2,1.8,4.1,4,4.1s4-1.8,4-4.1C16,10.7,14.2,9,12,9z M11.6,12.6c-0.6,0.5-1.5,0.5-1.9,0c-0.4-0.5-0.2-1.3,0.4-1.8c0.6-0.5,1.5-0.5,1.9,0C12.4,11.2,12.2,12.1,11.6,12.6z',
  }, {
    name: 'nav-menu',
    active: false,
    svgPath: 'M24,6H0V2h24V6z M24,10H0v4h24V10z M24,18H0v4h24V18z'
  }, {
    name: 'press',
    active: false
  }, {
    name:'about',
    active: false
  }, {
    name: 'contact',
    active: false
  }
];

class App extends PureComponent {
  constructor(props) {
    super(props);
    props.fetchData();
  }

  render() {
    const H6 = styled.h6`
      text-shadow: 2px 2px 8px ${this.props.Theme.black};
    `;
    const H5 = styled.h5`
      text-shadow: 2px 2px 8px ${this.props.Theme.black};
    `;

    return (
      <Fragment>
        <HomeScreen
          topContent={(
            <Switch key={this.props.location.pathname}>
              <Route
                exact
                path="/lohi"
                render={() => (
                  <h2 className="bold comingSoon">COMING SOON</h2>
                )}
              />
              <Route
                exact
                path="/rino"
                render={() => (
                  <Fragment>
                    <CountDown />
                    <H6 className="bold open-times">OPEN 12PM - 12AM SEVEN DAYS A WEEK</H6>
                  </Fragment>
                )}
              />
              <Route
                exact
                path="/"
                render={() => (
                  <Fragment>
                    <CountDown />
                    <H6 className="bold open-times">OPEN 12PM - 12AM SEVEN DAYS A WEEK</H6>
                  </Fragment>
                )}
              />
              <Route
                exact
                path="/home"
                render={() => (
                  <H5 className="homeText">Denver's home for sharing wood-fired pizzas, fresh oysters, seasonal market plates, cocktails, and conversation.</H5>
                )}
              />
            </Switch>
          )}
        >
          <Switch>
            <Route
              exact
              path="/lohi"
              render={() => (
                <H5 className="homeText">LoHi's home for sharing wood-fired pizzas, fresh oysters, seasonal market plates, cocktails, and conversation.</H5>
              )}
            />
            <Route
              exact
              path="/rino"
              render={() => (
                <H5 className="homeText">RiNo's home for sharing wood-fired pizzas, fresh oysters, seasonal market plates, cocktails, and conversation.</H5>
              )}
            />
            <Route
              exact
              path="/"
              render={() => (
                <H5 className="homeText">RiNo's home for sharing wood-fired pizzas, fresh oysters, seasonal market plates, cocktails, and conversation.</H5>
              )}
            />
            <Route
              exact
              path="/home"
              render={() => (
                <Fragment>
                  <H5 className="homeText">Select your location</H5>
                  <div className="home-btn-container">
                    <Link to="/rino" className="btn">
                      Rino
                    </Link>
                    <Link to="/lohi" className="btn">
                      LoHi
                    </Link>
                  </div>
                </Fragment>
              )}
            />
          </Switch>
        </HomeScreen>
        <ScrollContainer>
          <Switch>
            <Route exact path="/lohi" component={Highlands} />
            <Route exact path="/rino" component={Rino} />
            <Route exact path="/" component={Rino} />
          </Switch>
        </ScrollContainer>
        <Switch>
          <Route exact path="/lohi" component={DeskNavBar} />
          <Route exact path="/rino" component={DeskNavBar} />
          <Route exact path="/" component={DeskNavBar} />
          <Route exact path="/home" render={() => <DeskNavBar home />} />
        </Switch>
        <NavBar sections={sections} />
      </Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchData: actions.fetchData }, dispatch)
}

function mapStateToProps() {
  return {}
}

export default withTheme(connect(mapStateToProps, mapDispatchToProps)(App));
