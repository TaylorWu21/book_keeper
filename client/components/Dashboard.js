import React from 'react';
import { connect } from 'react-redux';
import BookSearch from './BookSearch';
import Profile from './Profile';
import Follow from './Follow';
import Library from './Library';
import Users from './Users';

class Dashboard extends React.Component {

  render() {
    return(
      <div className='row'>
        <div className='col s12 m2'>
          <Profile user={this.props.auth} onSubmit={this.handleUpdate} />
        </div>
        <div className='col s12 m10'>
          <div id="library" className="col s12"><Library /></div>
          <div id="books" className="col s12"><BookSearch /></div>
          <div id="users" className="col s12"><Users /></div>
          <div id="following" className="col s12"><Follow /></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(Dashboard);
