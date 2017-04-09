import React from 'react';
import { connect } from 'react-redux';
import { SignupUser } from '../actions/auth';
import SignupForm from './SignupForm';


class Signup extends React.Component {

  handleSignup = (Signup) => {
    this.props.dispatch(SignupUser(Signup.email, Signup.name, Signup.phone, Signup.password));
  }
  render() {
    return(
      <div>
       <h3>Sign Up</h3>
       <SignupForm onSubmit={this.handleSignup} />
      </div>
    );
  }
}

export default connect()(Signup);