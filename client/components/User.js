import React from 'react';
import { Link } from 'react-router';
import FaUserPlus from 'react-icons/lib/fa/user-plus';

const User = (user) => (
  <li className='collection-item'>
    <div className='row' style={{margin: '0px'}}>
      <div className='col s10'>
        <div className='valign-wrapper'>
          <img 
            className='responsive-img' 
            src={user.avatar_url} alt='A User' 
            style={{height: '50px', marginRight: '15px', borderRadius: '5%'}} />
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </div>
      </div>
      <div className='col s2' style={{height: '50px'}}>
        <div className='right'>
          <FaUserPlus size={30} />
        </div>
      </div>
    </div>
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