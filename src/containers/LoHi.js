import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import fetchStoryblok from 'actions/FetchStoryblok';
import { bindActionCreators } from 'redux';
import withTheme from 'components/withTheme';
import NavBar from 'components/nav_bar/nav_bar';
import DeskNavBar from 'components/desk_nav_bar';
import Content from 'components/Content';
import HomeScreen from 'components/home_screen';
import ScrollContainer from 'containers/scroll_container';

class LoHi extends PureComponent {
  constructor(props) {
    super(props);
    if (
      !props.data
      || !props.data.content
      || (props.data.content.length === 0 && !props.data.loading)
    ) props.fetchStoryblok('lohi');
  }

  render() {
    return (
      <Fragment>
        <HomeScreen data={this.props.data} />
        <ScrollContainer>
          <Content data={this.props.data} menuPhotos={['images/menu/antipasti-menu-min-lohi.jpg', 'images/menu/pizza-menu-min-lohi.jpg', 'images/menu/cocktails-menu-min-lohi.jpg']} />
        </ScrollContainer>
        <DeskNavBar />
        <NavBar />
      </Fragment>
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
