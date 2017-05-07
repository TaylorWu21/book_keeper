import React from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';

const SignupForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <div>
      <label htmlFor="email">Email</label>
      <Field name="email" component="input" type="text" required />
    </div>
    <div>
      <label htmlFor="name">Name</label>
      <Field name="name" component="input" type="text" required />
    </div>
    <div>
      <label htmlFor="phone">Phone</label>
      <Field name="phone" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <Field name="password" component="input" type="password" required />
    </div>
    <button  type='submit' className='btn auth-button'>Sign Up</button>
    <br />
    <br />
    <Link to='/login'>Already have an account? Click here to login</Link>
  </form>
);

const reduxSignupForm = reduxForm({
  form: 'signup'
});

export default (reduxSignupForm)(SignupForm);