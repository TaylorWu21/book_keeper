import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions/users';
import User from './User';

class Users extends React.Component {

  componentDidMount() {
    this.props.dispatch(getUsers());
  }

  render() {
    const users = this.props.users.map(user => {
      return(
        <User key={user.id} {...user} />
      );
    });
    return(
      <div>
        <h1>Other Users</h1>
        <ul className='collection'>
          {users}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({ users: state.users })
}

export default connect(mapStateToProps)(Users);