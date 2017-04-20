import React from 'react';
import { connect } from 'react-redux';
import { getComments } from '../actions/comments';

class UserBook extends React.Component {
  componentDidMount() {
    $('.modal').modal();
    this.props.dispatch(getComments(this.props.params.book_id));
  }

  render() {
    let { book, comments, user } = this.props;
    return(
      <div className='row'>
        <div className='center col s12 m3'>
          <img className='profile-img' src={user.avatar_url} />
          <p><b>Email:</b> {user.email}</p>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Phone:</b> {user.phone}</p>
        </div>
        <div className='col s12 m9'>
          <ul className='collection'>
            <li className='collection-item avatar row'>
              <div className='col s12 m2 center'>
                <img src={book.image} alt='' style={{width: '150px'}}/>
                <p><b>ISBN-</b>{book.isbn}</p>
              </div>
              <div className='col s12 m9 offset-m1'>
                <div className='center'>
                  <span className='title'>
                    <b>Title:</b> {book.title}
                    <br />
                    <b>Category:</b> {book.category}
                  </span>
                </div>
                <p>
                  <b>Author:</b> {book.author}
                  <br />
                  <b>Description:</b> {book.description}
                </p>
              </div>
            </li>
          </ul>
          <h2>Comments</h2>
          <ul className='collection'>
            { !comments.length > 0? <li className='collection-item'>No Comments</li> : null }
          </ul>
          <a className="waves-effect waves-light btn" href="#modal1">Add Comment</a>
        </div>
        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    book: state.book,
    comments: state.comments,
    user: state.otherUser
  }
}

export default connect(mapStateToProps)(UserBook);