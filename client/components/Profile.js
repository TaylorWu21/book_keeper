import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { updateUser } from '../actions/auth';
import ProfileInfo from './ProfileInfo';
import ProfileEdit from './ProfileEdit';

class Profile extends React.Component {

  handleUpdate = (user) => {
    const { email, name, phone } = user;
    this.props.dispatch(updateUser(email, name, phone));
  }

  render() {
    const { email, name, phone } = this.props.user;
    const user = this.props.user;
    // CHANGE IT SO IT USES THE REDUX STORE TO CHECK IF EDITING 
    return(
      <div>
        { this.props.user.editing? 
          <ProfileEdit onSubmit={this.handleUpdate} /> 
          : 
          <ProfileInfo user={this.props.user} dispatch={this.props.dispatch} /> 
        }
      </div>
    );
  }
}

export default connect()(Profile);