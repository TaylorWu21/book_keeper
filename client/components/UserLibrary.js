import React from 'react';
import Books from './Books';
import { connect } from 'react-redux';
import { getUserLibrary } from '../actions/books';
import UserInfo from './UserInfo';

class UserLibrary extends React.Component {

  componentDidMount() {
    this.props.dispatch(getUserLibrary(this.props.params.id));
  }
  
  render() {
    if(this.props.books) {
      const { user, books } = this.props
      return(
        <div className='row'>
          <div className='center col s12 m2'>
            <UserInfo user={user} />
          </div>
          <div className='col s12 m10'>
            <Books books={books} parent='othersLibrary' />
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