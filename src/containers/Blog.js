import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import fetchStoryblok from 'actions/FetchStoryblok';
import { bindActionCreators } from 'redux';
import withTheme from 'components/withTheme';
import Logo from 'components/Logo';
import Post from 'containers/Post';
import BlogList from 'containers/BlogList';
import { Route, Switch, NavLink } from 'react-router-dom';

class Blog extends PureComponent {
  render() {
    return (
      <>
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            backgroundColor: this.props.Theme.white,
            padding: 6
          }}
          >
          <div style={{ width: 300 }}>
            <NavLink to="/" aria-label="navigate to home page">
              <Logo fill={this.props.Theme.black} />
            </NavLink>
          </div>
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Switch>
            <Route exact path="/blog" component={BlogList} />
            <Route exact path="/blog/:slug" component={Post} />
          </Switch>
        </div>
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchStoryblok }, dispatch)
}

function mapStateToProps(state) {
  return { data: state.Storyblok.blog }
}

export default withTheme(connect(mapStateToProps, mapDispatchToProps)(Blog));
