import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import fetchStoryblok from 'actions/FetchStoryblok';
import { bindActionCreators } from 'redux';
import { Element } from 'react-scroll';
import withTheme from 'components/withTheme';
import NavBar from 'components/nav_bar/nav_bar';
import DeskNavBar from 'components/desk_nav_bar';
import Content from 'components/Content';
import HomeScreen from 'components/home_screen';
import ScrollContainer from 'containers/scroll_container';

class Rino extends PureComponent {
  constructor(props) {
    super(props);
    const preview = props.location.search.match(/preview/) !== null
    props.fetchStoryblok('rino', preview);
  }

  render() {
    return (
      <>
        <Element name="home">
          <HomeScreen data={this.props.data} />
        </Element>
        <ScrollContainer>
          <Content data={this.props.data} menuPhotos={['images/menu/pizza-menu-min.jpg', 'images/menu/antipasti-menu-min.jpg', 'images/menu/cocktails-menu-min.jpg']} />
        </ScrollContainer>
        <DeskNavBar />
        <NavBar data={this.props.data} />
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchStoryblok }, dispatch)
}

function mapStateToProps(state) {
  return { data: state.Storyblok.rino }
}

export default withTheme(connect(mapStateToProps, mapDispatchToProps)(Rino));
