import React from 'react';
import { connect } from 'react-redux';

class Comment extends React.Component {
  state = { editing: false }

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const message = this.refs.message.value;
    this.props.updateComment(this.props.comment.comment_id, message);
    this.toggleEdit();
  }

  render() {
    const { comment, deleteComment } = this.props;
    if(!this.state.editing) {
      return(
        <li key={comment.comment_id} className='collection-item avatar row'>
          <div className='col s12 m3'>
            <img className='responsive-img' src={comment.user_avatar_url} alt='' style={{height: '100px'}}/>
          </div>
          <div className='col s12 m9'>
            <p><b>{comment.username}</b> {comment.message}</p>
            <p>
              Date: &nbsp;
              {comment.created_at == comment.updated_at ? 
                `${comment.created_at}`
              : 
                `${comment.updated_at}(edited)`
              }
            </p>
            { comment.user_id === this.props.auth.id ? 
              <div>
                <button 
                  onClick={ () => this.toggleEdit() } 
                  className='waves-effect waves-orange btn-flat blue-text'
                >
                  Edit
                </button>
                <button
                  onClick={ () => deleteComment(comment.comment_id) }
                  className='waves-effect waves-red btn-flat blue-text'
                >
                  Delete
                </button>
              </div>
            : 
              null 
            }
          </div>
        </li>
      );
    } else {
      return(
        <li className='collection-item'>
          <form onSubmit={ (e) => this.handleSubmit(e)}>
            <div className="modal-content">
              <h6>Edit Comment</h6>
              <div>
                <label>Comment</label>
                <input type='text' ref='message' defaultValue={comment.message} />
              </div>
            </div>
            <div className="modal-footer">
              <button type='submit' className="aves-effect waves-green btn-flat">Submit</button>
              <button type='button' onClick={ () => this.toggleEdit()} className="waves-effect waves-orange btn-flat">Close</button>
            </div>
          </form>
        </li>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(Comment);