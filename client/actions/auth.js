import { browserHistory } from 'react-router';

const setUser = ( user = {} ) => {
  return {type: "LOGIN", user }
}

const logoutUser = () => {
  return { type: "LOGOUT" }
}

export const loginUser = (email, password) => {
  return (dispatch) => {
    $.ajax({
      url: 'users/sign_in',
      type: 'POST',
      dataType: 'JSON',
      data: { user: { email, password } }
    }).done( user => {
      dispatch(setUser(user));
      browserHistory.push('/dashboard');
    }).fail( data => {
      console.log(data);
    });
  }
}

export const SignupUser = (email, name, phone, password) => {
  return (dispatch) => {
    $.ajax({
      url: 'users',
      type: 'POST',
      dataType: 'JSON',
      data: { user: { email, name, phone, password } }
    }).done( user => {
      dispatch(setUser(user));
      browserHistory.push('/dashboard');
    }).fail( data => {
      console.log(data);
    });
  }
}

export const refreshLogin = () => {
  return (dispatch) => {
    $.ajax({
      url: 'api/user',
      type: 'GET',
      datatype: 'JSON'
    }).done( user => {
      if(user.id) {
        dispatch(setUser(user));
      } else {
        dispatch(logoutUser());
      }
    }).fail( data => {
      console.log(data);
    });
  }
}

export const logout = () => {
  return (dispatch) => {
    $.ajax({
      url: '/users/sign_out',
      type: 'DELETE'
    }).done( () => {
      dispatch(logoutUser());
      browserHistory.push('/');
    });
  }
}