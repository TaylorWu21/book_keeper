import React from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <div>
      <label htmlFor="email">Email</label>
      <Field name="email" component="input" type="text" required />
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <Field name="password" component="input" type="password"required />
    </div>
    <button type='submit' className='btn auth-button'>Login</button>
    <br />
    <br />
    <Link to='/signup'>Sign Up Here</Link>
  </form>
);

const reduxLoginForm = reduxForm({
  form: 'login'
});

export default (reduxLoginForm)(LoginForm);