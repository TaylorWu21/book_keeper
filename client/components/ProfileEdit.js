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
      debugger;
      this.props.dispatch(setUser(user.body));
    });
  }

  render() {
    return(
      <div>
        <img src={this.props.user.avatar_url} style={{height: '200px', paddingTop: '40px'}}  />
        <div className='center'>
          <Dropzone onDrop={this.onDrop}>
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
          <button className='btn' type='submit'>Update</button>
          <button className='btn orange' onClick={ () => this.props.dispatch(editUser(false)) }>Cancel</button>
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