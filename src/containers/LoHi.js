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

class LoHi extends PureComponent {
  constructor(props) {
    super(props);
    props.fetchStoryblok('lohi');
  }

  render() {
    return (
      <>
        <Element name="home">
          <HomeScreen data={this.props.data} />
        </Element>
        <ScrollContainer>
          <Content
            data={this.props.data}
            menuPhotos={['images/menu/antipasti-menu-min-lohi.jpg', 'images/menu/pizza-menu-min-lohi.jpg', 'images/menu/cocktails-menu-min-lohi.jpg']}
          />
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
  return { data: state.Storyblok.lohi }
}

export default withTheme(connect(mapStateToProps, mapDispatchToProps)(LoHi));
