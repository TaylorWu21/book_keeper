import React from 'react';
import { connect } from 'react-redux';
import { editUser } from '../actions/auth';
import FaEdit from 'react-icons/lib/fa/edit';
import FaBars from 'react-icons/lib/fa/bars';

const ProfileInfo = ({user, dispatch}) => {
  return(
    <div className='center'>
      <img className='profile-img' src={user.avatar_url} />
      <p><b>Email:</b> {user.email}</p>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Phone:</b> {user.phone}</p>
      <button 
        className='btn orange' 
        onClick={ () => dispatch(editUser(true)) }
      >
        <FaEdit size={30}/>
      </button>
    </div>
  )
}

export default connect()(ProfileInfo);