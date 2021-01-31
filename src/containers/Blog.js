import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import fetchStoryblok from 'actions/FetchStoryblok';
import { bindActionCreators } from 'redux';
import withTheme from 'components/withTheme';
import Logo from 'components/Logo';
import moment from 'moment'
import { NavLink } from 'react-router-dom';

const RouterLink = styled(NavLink)`
  &:hover {
    text-decoration: underline;
    color: ${({ styled }) => styled.theme.black};
  }
`;

class Blog extends PureComponent {
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
            <Logo fill={this.props.Theme.black} />
          </div>
        </div>
        {!this.props.data || this.props.data.loading || !this.props.data.content ? (<p>Loading...</p>) : (
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center'
            }}
            >
            <ul style={{ maxWidth: '800px', width: '100%', paddingTop: 150, paddingBottom: 100, paddingLeft: 20, paddingRight: 20, listStyleType: 'none' }}>
              {this.props.data.content.map(post => (
                <li key={post.content._uid} style={{ marginBottom: 100 }}>
                  <RouterLink to={`/blog/${post.slug}`} styled={{ theme: this.props.Theme }}>
                    <h1 style={{ fontSize: 38, fontWeight: 'bold', color: this.props.Theme.black }}>{post.content.title}</h1>
                    <h6 style={{ fontSize: 20, marginTop: 8, marginBottom: 8, color: this.props.Theme.black }}>{moment(this.props.data.content[0].created_at).format("MMM Do YYYY")}</h6>
                    {/*<p>{post.content.intro}</p>*/}
                    <div
                      alt={post.content.title}
                      style={{
                        width: '100%',
                        height: 350,
                        overflow: 'hidden',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: `url(${post.content.image})`
                      }}
                      />
                  </RouterLink>
                </li>
              ))}
            </ul>
          </div>
        )}
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
