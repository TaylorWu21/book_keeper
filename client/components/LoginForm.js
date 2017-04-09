import React from 'react';
import { Field, reduxForm } from 'redux-form';

class LoginForm extends React.Component {

  render() {
    return(
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="text" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password"required />
        </div>
        <button type='submit' className='btn'>Login</button>
      </form>
    );
  }
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm);

export default LoginForm;