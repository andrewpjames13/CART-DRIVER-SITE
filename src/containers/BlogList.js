import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import fetchStoryblok from 'actions/FetchStoryblok';
import { bindActionCreators } from 'redux';
import withTheme from 'components/withTheme';
import BlogTeaser from 'components/BlogTeaser';
import { NavLink } from 'react-router-dom';

const RouterLink = styled(NavLink)`
  &:hover {
    text-decoration: underline;
    color: ${({ styled }) => styled.theme.black};
  }
`;

class BlogList extends PureComponent {
  constructor(props) {
    super(props);
    if (
      !props.data
      || !props.data.content
      || (props.data.content.length === 0 && !props.data.loading)
    ) {
      const preview = props.location.search.match(/preview/) !== null
      props.fetchStoryblok('blog', preview);
    }
  }

  render() {
    if (!this.props.data || this.props.data.loading || !this.props.data.content) {
      return (<p>Loading...</p>)
    }
    return (
      <ul style={{ maxWidth: '800px', width: '100%', paddingTop: 150, paddingBottom: 100, paddingLeft: 20, paddingRight: 20, listStyleType: 'none' }}>
        {this.props.data.content.map(post => (
          <li key={post.content._uid} style={{ marginBottom: 100 }}>
            <RouterLink to={`/blog/${post.slug}`} styled={{ theme: this.props.Theme }}>
              <BlogTeaser title={post.content.title} image={post.content.image} createdAt={this.props.data.content[0].created_at} />
            </RouterLink>
          </li>
        ))}
      </ul>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchStoryblok }, dispatch)
}

function mapStateToProps(state) {
  return { data: state.Storyblok.blog }
}

export default withTheme(connect(mapStateToProps, mapDispatchToProps)(BlogList));
