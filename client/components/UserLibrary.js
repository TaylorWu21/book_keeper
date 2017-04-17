import React from 'react';
import Books from './Books';
import { connect } from 'react-redux';
import { getUserLibrary } from '../actions/books';

class UserLibrary extends React.Component {
  componentDidMount() {
    this.props.dispatch(getUserLibrary(this.props.params.id));
  }
  render() {
    if(this.props.books) {
      const { user, books } = this.props
      return(
        <div className='row'>
          <div className='col s12 m3 center'>
            <img className='profile-img' src={user.avatar_url} />
            <p><b>Email:</b> {user.email}</p>
            <p><b>Name:</b> {user.name}</p>
            <p><b>Phone:</b> {user.phone}</p>
          </div>
          <div className='col s12 m9'>
            <Books books={books} parent='search' />
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return { 
    books: state.otherBooks,
    user: state.otherUser
  }
}

export default connect(mapStateToProps)(UserLibrary);