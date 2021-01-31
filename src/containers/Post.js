import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import fetchStoryblok from 'actions/FetchStoryblok';
import { bindActionCreators } from 'redux';
import withTheme from 'components/withTheme';

class Post extends PureComponent {
  constructor(props) {
    super(props);
    if (
      !props.data
      || !props.data.content
      || (props.data.content.length === 0 && !props.data.loading)
    ) {
      const preview = props.location.search.match(/preview/) !== null

      props.fetchStoryblok(props.match.params.slug, preview, true);
    }
  }

  render() {
    console.log(this.props.data, '********')
    return (
      <>
        <h1>Post</h1>
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchStoryblok }, dispatch)
}

function mapStateToProps(state) {
  return { data: state.Storyblok }
}

export default withTheme(connect(mapStateToProps, mapDispatchToProps)(Post));
