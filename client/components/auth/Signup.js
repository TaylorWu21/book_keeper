import React from 'react';
import { connect } from 'react-redux';
import { handleSignup } from './actions';

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, name, phone, password } = this.refs;
    this.props.dispatch(handleSignup(email.value, name.value, phone.value, password.value, this.props.history));
  }

  render() {
    return(
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type='text' ref='email' placeholder='Email' required/>
          <input type='text' ref='name' placeholder='Name' required/>
          <input type='text' ref='phone' placeholder='Phone Number' />
          <input type='password' ref='password' placeholder='Password' required/>
          <button type='submit' className='btn'>Sign In</button>
        </form>
      </div>
    )
  }
}

export default connect()(Signup);
