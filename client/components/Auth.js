import React from 'react';
import { connect } from 'react-redux';
import { createUser, loginUser } from '../actions/auth';

class Auth extends React.Component {

  handleLogin = (e) => {
    e.preventDefault();
    let {
      email,
      password,
      props: { dispatch }
    } = this;
    dispatch(loginUser(email.value, password.value));
  }

  handleSignUp = (e) => {
    e.preventDefault();
    let {
      email,
      name,
      phone,
      password,
      props: { dispatch }
    } = this;
    dispatch(createUser(email.value, name.value, phone.value, password.value));
  }

  render() {
    if(this.props.route.title === 'Sign Up') {
      return(
        <div>
          <h2>Sign Up</h2>
          <form onSubmit={ (e) => this.handleSignUp(e) }>
            <input 
              type='text' 
              ref={ n => this.email = n } 
              placeholder='Email' 
              required
            />
            <input 
              type='text' 
              ref={ n => this.name = n } 
              placeholder='Name' 
              required
            />
            <input 
              type='text' 
              ref={ n => this.phone = n } 
              placeholder='Phone Number'
            />
            <input 
              type='password' 
              ref={ n => this.password = n } 
              placeholder='Password' 
              required
            />
            <button type='submit' className='btn'>{this.props.route.title}</button>
          </form>
        </div>
      )
    } else {
      return(
        <div>
          <h3>Login</h3>
          <form onSubmit={(e) => this.handleLogin(e) }>
            <input 
              type='text' 
              ref={ n => this.email = n }
              placeholder='Email' 
              required 
            />
            <input 
              type='password' 
              ref={ n => this.password = n }
              placeholder='Password' 
              required 
            />
            <input 
              type='submit' 
              className='btn' 
              value='Login' 
            />
          </form>
        </div>
      )
    }
  }
}

export default connect()(Auth)