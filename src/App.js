import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from 'containers/Home';
import Rino from 'containers/Rino';
import LoHi from 'containers/LoHi';
import Blog from 'containers/Blog';
import withTheme from 'components/withTheme';
import Drawer from 'components/Drawer'
import { connect } from 'react-redux';
import fetchStoryblok from 'actions/FetchStoryblok';
import { bindActionCreators } from 'redux';

class App extends React.Component {
  constructor(props) {
    super(props);
    if (
      !props.data
      || !props.data.content
      || (props.data.content.length === 0 && !props.data.loading)
    ) {
      const preview = props.location.search.match(/preview/) !== null
      props.fetchStoryblok('navigation', preview);
    }
  }
  render() {
    return (
      <>
        <Switch>
          <Route path="/blog" component={Blog} />
          <Route exact path="/lohi" component={LoHi} />
          <Route exact path="/rino" component={Rino} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Drawer theme={this.props.Theme} data={this.props.data} />
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchStoryblok }, dispatch)
}

function mapStateToProps(state) {
  return { data: state.Storyblok.navigation }
}

export default withTheme(connect(mapStateToProps, mapDispatchToProps)(App));
