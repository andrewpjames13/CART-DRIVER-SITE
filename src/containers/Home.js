import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchStoryblok from 'actions/FetchStoryblok';
import { bindActionCreators } from 'redux';
import withTheme from 'components/withTheme';
import DeskNavBar from 'components/desk_nav_bar';
import HomeScreen from 'components/home_screen';

const Closed = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 120px;
  @media all and (min-width: 768px){
    width: 170px;
  }
`;

const Support = styled.img`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 325px;
  @media all and (min-width: 768px){
    width: 400px;
  }
`;

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
              <Link to="/rino" className="homeStyle" style={{ position: 'relative' }}>
                <div className="btn">RiNo</div>
                {/*<div className="btn" style={{ opacity: '.2' }}>RiNo</div>*/}
                {/*<Closed
                  src="/images/Closed.png"
                  alt="rino location is temporarily closed"
                />*/}
              </Link>
              <Link to="/lohi" className="homeStyle" style={{ position: 'relative' }}>
                <div className="btn">LoHi</div>
                {/*<div className="btn" style={{ opacity: '.2' }}>LoHi</div>*/}
                {/*<Closed
                  src="/images/Closed.png"
                  alt="lohi location is temporarily closed"
                />*/}
              </Link>
              <a href="https://www.toasttab.com/cart-driver-west-ave/giftcards" className="homeStyle" style={{ position: 'relative', marginTop: 20 }}>
                <div className="btn" style={{ marginTop: 50, marginBottom: 80 }}>Gift Cards</div>
                {/*<Support
                  src="/images/support.png"
                  alt="you can support us with gift cards"
                />*/}
              </a>
            </div>
          </div>
        </HomeScreen>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
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
