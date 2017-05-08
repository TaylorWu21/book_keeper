import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { setUser, editUser } from '../actions/auth';
import Dropzone from 'react-dropzone';
import request from 'superagent';

class ProfileEdit extends React.Component {

  onDrop = (acceptedFiles, rejectedFiles) => {
    let req = request.post('api/user_avatar');
    acceptedFiles.forEach( file => {
      req.attach('avatar', file);
    });
    req.end((err, user) => {
      this.props.dispatch(setUser(user.body));
    });
  }

  render() {
    return(
      <div className='row'>
        <div className='center'>
          <img className='profile-img' src={this.props.user.avatar_url} />
          <Dropzone onDrop={this.onDrop} className='dropzone'>
            <div>Click or drop image</div>
          </Dropzone>
        </div>
        <form className='row' onSubmit={this.props.handleSubmit}>
          <div className="col s12">
            <label htmlFor="email">Email</label>
            <Field name='email' component='input' type='text' />
          </div>
          <div className="col s12">
            <label htmlFor="name">Name</label>
            <Field name='name' component='input' type='text' />
          </div>
          <div className="col s12">
            <label htmlFor="phone">Phone</label>
            <Field name='phone' component='input' type='text' />
          </div>
          <div className='col s6'>
          <button className='btn edit-button' type='submit'>Update</button>
          </div>
          <div className='col s6'>
          <button 
            className='btn orange edit-button' 
            onClick={ () => this.props.dispatch(editUser(false)) }
          >
            Cancel
          </button>
          </div>
        </form>
      </div>
    );
  }
}

ProfileEdit = reduxForm({
  form: 'editUser'
})(ProfileEdit);

ProfileEdit = connect(
  state => ({
    user: state.auth,
    initialValues: state.auth
  })
)(ProfileEdit);

export default ProfileEdit;