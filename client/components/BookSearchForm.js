import React from 'react';
import { Field, reduxForm } from 'redux-form';

class BookSearchForm extends React.Component {
  render() {
    return(
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <Field name="title" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <Field name="author" component="input" type="text"/>
        </div>
        <button className='btn' type='submit'>Search</button>
      </form>
    )
  }
}

BookSearchForm = reduxForm({
  form: 'bookSearch'
})(BookSearchForm);

export default BookSearchForm;