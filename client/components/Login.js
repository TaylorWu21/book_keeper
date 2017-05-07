import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/auth';
import LoginForm from './LoginForm';

class Login extends React.Component {

  componentDidMount() {
    $('body').addClass('auth-book-bg');
  }

  componentWillUnmount() {
    $('body').removeClass('auth-book-bg');
  }

  handleLogin = (login) => {
    this.props.dispatch(loginUser(login.email, login.password))
  }
  
  render() {
    return(
      <div className='row'>
        <div className='col s12 m8 l4 offset-m2 offset-l4 auth-wrapper'>
          <h3>Login</h3> 
          <LoginForm onSubmit={this.handleLogin} />
        </div>
      </div>
    );
  }
}

export default connect()(Login);