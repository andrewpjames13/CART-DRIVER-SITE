import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import fetchStoryblok from 'actions/FetchStoryblok';
import { bindActionCreators } from 'redux';
import Content from './components/Content/Content';

class Rino extends PureComponent {
  constructor(props) {
    super(props);
    this.props.fetchStoryblok('home')
  }

  render() {
    return (
      <Content />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchStoryblok }, dispatch)
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Rino);
