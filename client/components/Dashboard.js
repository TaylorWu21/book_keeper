import React from 'react';
import BookSearch from './BookSearch';
import Profile from './Profile';
import { connect } from 'react-redux';

class Dashboard extends React.Component {

  render() {
    return(
      <div className='row'>
        <div className='col s12 m3'>
          <Profile user={this.props.auth} onSubmit={this.handleUpdate} />
        </div>
        <div className='col s12 m9'>
          <BookSearch />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(Dashboard);
