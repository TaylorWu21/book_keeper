import React from 'react';
import { Field, reduxForm } from 'redux-form';

class SignupForm extends React.Component {
  render() {
    return(
      <form onSubmit={this.props.handleSubmit}>
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
        <button type='submit' className='btn'>Sign Up</button>
      </form>
    );
  }
}

SignupForm = reduxForm({
  form: 'signup'
})(SignupForm);

export default SignupForm;