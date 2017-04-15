import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class Profile extends React.Component {
  state = { editing: false }

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing });
  }

  render() {
    const { email, name, phone } = this.props.user;

    if(!this.state.editing) {
      return(
        <div>
          <img 
            style={{height: '200px', paddingTop: '40px'}} 
            src='https://image.freepik.com/free-icon/business-person-silhouette-wearing-tie_318-49988.jpg' 
          />
          <p>Email: {email}</p>
          <p>Name: {name}</p>
          <p>Phone: {phone}</p>
          <button className='btn' onClick={ () => this.toggleEdit() }>Edit Profile</button>
        </div>
      );
    } else {
      return(
        <div>
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
            <button className='btn orange' onClick={ () => this.toggleEdit() }>Cancel</button>
          </form>
        </div>
      )
    }
  }
}

Profile = reduxForm({
  form: 'editUser'
})(Profile);

Profile = connect(
  state => ({
    initialValues: state.auth
  })
)(Profile);

export default Profile;