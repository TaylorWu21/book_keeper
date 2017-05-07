import React from 'react';
import { connect } from 'react-redux';
import { SignupUser } from '../actions/auth';
import SignupForm from './SignupForm';

class Signup extends React.Component {

  componentDidMount() {
    $('body').addClass('auth-book-bg');
  }

  componentWillUnmount() {
    $('body').removeClass('auth-book-bg');
  }

  handleSignup = (Signup) => {
    this.props.dispatch(SignupUser(Signup.email, Signup.name, Signup.phone, Signup.password));
  }
  render() {
    return(
      <div className='row'>
        <div className='col s12 m8 l4 offset-m2 offset-l4 auth-wrapper'>
          <h3>Sign Up</h3>
          <SignupForm onSubmit={this.handleSignup} />
        </div>
      </div>
    );
  }
}

export default connect()(Signup);