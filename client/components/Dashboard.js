import React from 'react';
import BookSearch from './BookSearch';
import Profile from './Profile';
import { connect } from 'react-redux';
import Follow from './Follow';

class Dashboard extends React.Component {

  render() {
    return(
      <div className='row'>
        <div className='col s12 m3'>
          <Profile user={this.props.auth} onSubmit={this.handleUpdate} />
        </div>
        <div className='col s12 m7'>
          <BookSearch />
        </div>
        <div className='col s12 m2'>
          <Follow />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(Dashboard);
