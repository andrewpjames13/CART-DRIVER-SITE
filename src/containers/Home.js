import React, { Fragment, PureComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchStoryblok from 'actions/FetchStoryblok';
import { bindActionCreators } from 'redux';
import withTheme from 'components/withTheme';
import DeskNavBar from 'components/desk_nav_bar';
import HomeScreen from 'components/home_screen';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    if (
      !props.data
      || !props.data.content
      || (props.data.content.length === 0 && !props.data.loading)
    ) props.fetchStoryblok('home');
  }

  render() {
    const H5 = styled.h5`
      text-shadow: 2px 2px 8px ${this.props.Theme.black};
    `;

    return (
      <Fragment>
        <HomeScreen data={this.props.data}>
          <div style={{ marginTop: '20px' }}>
            <H5 className="homeText">Select your location</H5>
            <div className="home-btn-container">
              <Link to="/rino" className="btn">Rino</Link>
              <Link to="/lohi" className="btn">LoHi</Link>
            </div>
          </div>
        </HomeScreen>
        <DeskNavBar home />
      </Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchStoryblok }, dispatch)
}

function mapStateToProps(state) {
  return { data: state.Storyblok.home }
}

export default withTheme(connect(mapStateToProps, mapDispatchToProps)(Home));
