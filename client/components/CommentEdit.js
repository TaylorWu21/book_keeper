import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'

class CommentEdit extends React.Component {
  render() {
    const comment = this.props.comment;
    return(
      <div id="modal" className="modal">
        <form onSubmit={this.props.handleSubmit}>
          <div className="modal-content">
            <h4>Add Comment</h4>
            <div>
              <label>Comment</label>
              <div>
                <Field name="message" component="input" type="text" placeholder="Comment" />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type='submit' className="modal-action modal-close waves-effect waves-green btn-flat">Submit</button>
            <button type='button' onClick={ () => { $('#modal1').modal('close') }} className="modal-action modal-close waves-effect waves-orange btn-flat">Close</button>
          </div>
        </form>
      </div>
    );
  }
}

CommentEdit = reduxForm({
  form: 'commentEdit',  // a unique identifier for this form
})(CommentEdit);

CommentEdit = connect(
  (state, props) => ({
    initialValues: state.comment
  })
)(CommentEdit);

export default CommentEdit;