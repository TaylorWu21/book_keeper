import React from 'react';
import BookSearch from './BookSearch';
import Profile from './Profile';
import Follow from './Follow';
import Library from './Library';
import Users from './Users';

const Dashboard = () => (
  <div className='row'>
    <div className='col s12 m2 hide-on-small-only'>
      <Profile />
    </div>
    <div className='col s12 m10'>
      <div id="library" className="col s12"><Library /></div>
      <div id="books" className="col s12"><BookSearch /></div>
      <div id="users" className="col s12"><Users /></div>
      <div id="follow" className="col s12"><Follow /></div>
    </div>
  </div>
)

export default Dashboard;
