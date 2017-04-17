import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FaSearch from 'react-icons/lib/fa/search';

class BookSearchForm extends React.Component {
  render() {
    return(
      <form onSubmit={this.props.handleSubmit} className='row'>
        <div className='col s12 m5'>
          <label htmlFor="title">Title</label>
          <Field name="title" component="input" type="text"/>
        </div>
        <div className='col s12 m5'>
          <label htmlFor="author">Author</label>
          <Field name="author" component="input" type="text"/>
        </div>
        <div className='col s12 m2'>
          <button className='btn' type='submit' style={{marginTop: '30px'}}><FaSearch size={30} /></button>
        </div>
      </form>
    );
  }
}

BookSearchForm = reduxForm({
  form: 'bookSearch'
})(BookSearchForm);

export default BookSearchForm;