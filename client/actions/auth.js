import { browserHistory } from 'react-router';
import { setlFlash } from './flash';

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
      dispatch(setFlash(`Welcome ${user.name}!`, 'info'));
      browserHistory.push('/dashboard');
    }).fail( data => {
      dispatch(setFlash(data.responseText), 'error');
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
      dispatch(setFlash(`Welcome ${user.name}!`, 'info'));
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
        // dispatch(setFlash(, 'error'));
        dispatch(logoutUser());
      }
    }).fail( data => {
      dispatch(setFlash('No user logged in', 'error'));
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
      dispatch(setFlash('You have logged out', 'info'));
      dispatch(logoutUser());
      browserHistory.push('/');
    }).fail( () => {
      dispatch(logoutUser());
      browserHistory.push('/');
    })
  }
}