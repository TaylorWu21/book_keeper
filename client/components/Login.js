import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/auth';
import LoginForm from './LoginForm';

class Login extends React.Component {

  handleLogin = (login) => {
    this.props.dispatch(loginUser(login.email, login.password))
  }
  
  render() {
    return(
      <div>
       <h3>Login</h3> 
       <LoginForm onSubmit={this.handleLogin} />
      </div>
    );
  }
}

export default connect()(Login);