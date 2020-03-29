import React, { PureComponent } from 'react';
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
    ) {
      const preview = props.location.search.match(/preview/) !== null
      props.fetchStoryblok('home', preview);
    }
  }

  render() {
    const H5 = styled.h5`
      text-shadow: 2px 2px 8px ${this.props.Theme.black};
    `;

    return (
      <>
        <HomeScreen data={this.props.data}>
          <div style={{ marginTop: '20px' }}>
            <H5 className="homeText">Select your location</H5>
            <div className="home-btn-container">
              <Link to="/rino" className="btn" style={{ opacity: '.5' }}>Rino</Link>
              <Link to="/lohi" className="btn">LoHi</Link>
            </div>
          </div>
        </HomeScreen>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            alt="Lohi Togo menu"
            src="/images/CartDriverLohiToGoMenu.png"
            style={{
              width: '100%',
              maxWidth: '1200px',
            }}
            />
        </div>
        <DeskNavBar home />
      </>
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
