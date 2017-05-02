import React from 'react';
import { connect } from 'react-redux';
import { getComments, addComment, updateComment, deleteComment } from '../actions/comments';
import UserInfo from './UserInfo';
import Comment from './Comment';
import CommentForm from './CommentForm';
import FaCommenting from 'react-icons/lib/fa/commenting';

class UserBook extends React.Component {
  state = ({ editingComment: false });

  componentDidMount() {
    $('.modal').modal();
    this.props.dispatch(getComments(this.props.params.book_id));
  }

  handleSubmitComment = (comment) => {
    this.props.dispatch(addComment(comment.message, this.props.book.id, this.props.auth.id));
  }

  updateComment = (id, message) => {
    this.props.dispatch(updateComment(id, message));
  }

  deleteComment = (id) => {
    this.props.dispatch(deleteComment(id));
  }

  render() {
    let { book, comments, user } = this.props;
    console.log(comments);
    const allComments = comments.map(comment => {
      return( 
        <Comment 
          key={comment.comment_id}
          comment={comment}
          updateComment={this.updateComment} 
          deleteComment={this.deleteComment}
        />
      );
    });
    return(
      <div className='row'>
        <UserInfo user={user} />
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
          <div className='container'>
            <h2>Comments</h2>
            <ul className='collection'>
              { !comments.length > 0 ? <li className='collection-item'>No Comments</li> : allComments }
            </ul>
            <a className="waves-effect waves-green btn" href="#modalNew"><FaCommenting size={30} /></a>
          </div>
        </div>
        <CommentForm onSubmit={this.handleSubmitComment} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth, 
    book: state.book,
    comments: state.comments,
    user: state.otherUser,
    comment: state.comment
  }
}

export default connect(mapStateToProps)(UserBook);