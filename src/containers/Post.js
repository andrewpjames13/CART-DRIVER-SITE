import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import fetchStoryblok from 'actions/FetchStoryblok';
import { bindActionCreators } from 'redux';
import withTheme from 'components/withTheme';
import BlogTeaser from 'components/BlogTeaser';
import StoryblokClient from 'storyblok-js-client'
import styled from 'styled-components';

let Storyblok = new StoryblokClient({
  accessToken: process.env.REACT_APP_STORYBLOK_PUBLIC_KEY
})

const RichText = styled.div`
  margin-top: 40px;

  p {
    margin-bottom: 16px;
    font-size: 1.2em;
    letter-spacing: unset;
    line-height: 1.5rem;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
  }
  b { font-weight: 500 }
  h1 {
    font-size: 38px;
    font-weight: bold;
    margin-bottom: 16px;
    margin-top: 40px;
  }
`

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
    if (!this.props.data || this.props.data.loading || !this.props.data.content) return null
    const [post] = this.props.data.content
    return (
      <div
        style={{ maxWidth: '800px', width: '100%', paddingTop: 150, paddingBottom: 100, paddingLeft: 20, paddingRight: 20, listStyleType: 'none' }}
      >
        <BlogTeaser post title={post.content.title} image={post.content.image} createdAt={this.props.data.content[0].created_at} />
        <RichText dangerouslySetInnerHTML={{ __html: Storyblok.richTextResolver.render(post.content.long_text) }} />
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
