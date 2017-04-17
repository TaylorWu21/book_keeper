import React from 'react';
import { connect } from 'react-redux';

const AuthenticatedRoutes = ({ user, children }) => {
  return(
    <div>{ user._id ? children : null }</div>
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