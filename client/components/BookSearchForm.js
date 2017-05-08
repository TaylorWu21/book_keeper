import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FaSearch from 'react-icons/lib/fa/search';

const BookSearchForm = (props) =>  {
  return(
    <form onSubmit={props.handleSubmit} className='row'>
      <div className='col s12 m5'>
        <label htmlFor="title">Title</label>
        <Field name="title" component="input" type="text"/>
      </div>
      <div className='col s12 m5'>
        <label htmlFor="author">Author</label>
        <Field name="author" component="input" type="text"/>
      </div>
      <div className='col s12 m2 center'>
        <button className='btn-flat book-search-button' type='submit'><FaSearch size={30} /></button>
      </div>
    </form>
  );
}

const bookSearchReduxForm = reduxForm({
  form: 'bookSearch'
});

export default (bookSearchReduxForm)(BookSearchForm);