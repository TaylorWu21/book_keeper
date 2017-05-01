import React from 'react';
import { connect } from 'react-redux';
import { getUsers, searchUsers } from '../actions/users';
import User from './User';

class Users extends React.Component {

  componentDidMount() {
    this.props.dispatch(getUsers());
  }

  handleSearch = () => {
    const search = this.refs.search.value;
    this.props.dispatch(getUsers());
    if(search === '')
      this.props.dispatch(getUsers());
    else
      this.props.dispatch(searchUsers(search));
  }

  render() {
    const users = this.props.users.map(user => {
      return(
        <User key={user.id} {...user} />
      );
    });
    return(
      <div>
        <h1>View Other's Library</h1>
        <div className='input-field'>
          <label htmlFor="search">Search for name or email</label>
          <input id='search' type='text' ref='search' onChange={this.handleSearch} />
        </div>
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