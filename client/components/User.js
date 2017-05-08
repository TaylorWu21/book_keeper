import React from 'react';
import { Link } from 'react-router';

const User = (user) => (
  <li className='collection-item'>
    <Link to={`/users/${user.id}`}>
      <div className='valign-wrapper'>
        <img 
          className='follow-img' 
          src={user.avatar_url} alt='A User' 
        />
        <p>{user.name}</p>
      </div>
    </Link>
  </li>
)

export default User;