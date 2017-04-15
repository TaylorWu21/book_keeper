import React from 'react';
import BookSearch from './BookSearch';
import Profile from './Profile';
import { connect } from 'react-redux';
import { updateUser } from '../actions/auth';

class Dashboard extends React.Component {

  handleUpdate = (user) => {
    debugger;
    const { email, name, phone, avatar_url } = user;
    this.props.dispatch(updateUser(email, name, phone, avatar_url));
  }

  render() {
    return(
      <div className='row'>
        <div className='col s12 m3'>
          <Profile user={this.props.auth} onSubmit={this.handleUpdate} />
        </div>
        <div className='col s12 m9'>
          <BookSearch />
        </div>
        dashboard component
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(Dashboard);
