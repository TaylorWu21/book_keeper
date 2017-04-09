import { browserHistory } from 'react-router';

const setUser = ( user = {} ) => {
  return {type: 'USER', user }
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

export const createUser = (email, name, phone, password) => {
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
    })
  }
}

export const refreshLogin = (user = null) => {
  return (dispatch) => {
    if(user) {
      dispatch(setUser(user))
    } else {
      $.ajax({
        url: 'api/user',
        type: 'GET'
      }).done( user => {
        dispatch(setUser(user));
      }).fail( data => {
        console.log(data);
      })
    }
  }
}

export const logout = () => {
  return (dispatch) => {
    $.ajax({
      url: '/users/sign_out',
      type: 'DELETE'
    }).done( () => {
      browserHistory.push('/');
      dispatch(setUser());
    })
  }
}