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
    if (!this.props.data || this.props.data.loading || !this.props.data.content) return null
    const [post] = this.props.data.content
    console.log(post.content.long_text, 'POST!!!!!!')
    return (
      <div
        style={{ maxWidth: '800px', width: '100%', paddingTop: 150, paddingBottom: 100, paddingLeft: 20, paddingRight: 20, listStyleType: 'none' }}
      >
        <BlogTeaser post title={post.content.title} image={post.content.image} createdAt={this.props.data.content[0].created_at} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchStoryblok }, dispatch)
}

function mapStateToProps(state) {
  return { data: state.Storyblok.post }
}

export default withTheme(connect(mapStateToProps, mapDispatchToProps)(Post));
