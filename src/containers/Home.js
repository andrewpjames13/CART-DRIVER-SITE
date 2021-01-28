import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import fetchStoryblok from 'actions/FetchStoryblok';
import { bindActionCreators } from 'redux';
import withTheme from 'components/withTheme';
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
        <HomeScreen data={this.props.data} home>
          <div style={{ margin: '20px 0' }}>
            <H5 className="homeText">Select your location</H5>
          </div>
        </HomeScreen>
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
