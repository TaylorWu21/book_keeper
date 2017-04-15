import React from 'react';
import { connect } from 'react-redux';
import { editUser } from '../actions/auth';

const UserInfo = ({user, dispatch}) => {
  return(
    <div>
      <img style={{height: '200px', paddingTop: '40px'}} src={user.avatar_url} />
      <p>Email: {user.email}</p>
      <p>Name: {user.name}</p>
      <p>Phone: {user.phone}</p>
      <button className='btn' onClick={ () => dispatch(editUser(true)) }>Edit Profile</button>
    </div>
  )
}

export default connect()(UserInfo);