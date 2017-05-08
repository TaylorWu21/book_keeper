import React from 'react';
import { Field, reduxForm } from 'redux-form'

const CommentForm = (props) => {
  return(
    <div id="modalNew" className="modal">
      <form onSubmit={props.handleSubmit}>
        <div className="modal-content">
          <h4>Add Comment</h4>
          <div>
            <label>Comment</label>
            <div>
              <Field name="message" component="input" type="text" />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button 
            type='submit' 
            className="modal-action modal-close waves-effect waves-green btn-flat"
          >
            Submit
          </button>
          <button 
            type='button' 
            onClick={ () => {$('#modal1').modal('close')}} 
            className="modal-action modal-close waves-effect waves-orange btn-flat"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

export default reduxForm({
  form: 'comment'  // a unique identifier for this form
})(CommentForm)
