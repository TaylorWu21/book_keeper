import React from 'react';
import { Link } from 'react-router';

const User = (user) => (
  <li className='collection-item avatar row'>
    <div className='col s12 m2 center'>
      <img src={user.avatar_url} alt='' style={{height: '200px', borderRadius: '25%'}} />
    </div>
    <div className='col s12 m9 offset-m1'>
      <div>
        <span className='title'>{user.name}</span>
      </div>
      <p>
        <b>Email: </b><a href={`mailto:${user.email}`}>{user.email}</a>
        <br />
        <b>Phone: </b><a href={`mailto:${user.phone}`}>{user.phone}</a>
      </p>
      <Link to={`/users/${user.id}`}>SEE MY SHIT</Link>
    </div>
  </li>
)

export default User;