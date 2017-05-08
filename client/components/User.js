import React from 'react';
import { Link } from 'react-router';

const User = (user) => (
  <li className='collection-item'>
    <Link to={`/users/${user.id}`}>
      <div className='valign-wrapper'>
        <img 
          className='responsive-img' 
          src={user.avatar_url} alt='A User' 
          style={{height: '50px', marginRight: '15px', borderRadius: '5%'}} />
        <p>{user.name}</p>
      </div>
    </Link>
  </li>
)

export default User;

/*<div className='col s12 m2 center'>
  <img src={user.avatar_url} alt='A User' className='circle' />
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
  <Link to={`/users/${user.id}`}>View Library</Link>
</div>*/