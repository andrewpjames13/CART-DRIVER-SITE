import React from 'react';
import { connect } from 'react-redux';

function withTheme(WrappedComponent) {
  const WithTheme = props => (
    <WrappedComponent {...props} />
  );

  function mapStateToProps(state) {
    return { Theme: state.Theme }
  }

  return connect(mapStateToProps)(WithTheme);
}

export default withTheme;
