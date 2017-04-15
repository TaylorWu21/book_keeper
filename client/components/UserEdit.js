import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { editUser } from '../actions/auth';

class UserEdit extends React.Component {
  render() {
    return(
      <div>
        <img src={this.props.user.avatar_url} style={{height: '200px', paddingTop: '40px'}}  />
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

UserEdit = reduxForm({
  form: 'editUser'
})(UserEdit);

UserEdit = connect(
  state => ({
    user: state.auth,
    initialValues: state.auth
  })
)(UserEdit);

export default UserEdit;