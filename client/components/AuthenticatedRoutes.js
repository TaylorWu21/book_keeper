import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

const AuthenticatedRoutes = ({ user, children }) => {
  return(
    <div>{ user._id ? children : 'Please Log in' }</div>
  )
}
  /*<div>
    { user._id ? children : null }
  </div>
);*/

const mapStateToProps = (state) => {
  return { user: state.auth }
}

export default connect(mapStateToProps)(AuthenticatedRoutes);