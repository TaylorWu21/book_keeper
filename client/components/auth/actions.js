export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}

export const loggedIn = (id, apiKey) => {
  return {
    type: 'LOGIN',
    id,
    apiKey
  }
}

export const handleLogin = (email, password, redirect, history) => {
  return (dispatch) => {
    $.ajax({
      url: '/users/sign_in',
      type: 'POST',
      dataType: 'JSON',
      data: { user: { email, password }}
    }).done( response => {
      localStorage.setItem('apiKey', response.api_key);
      localStorage.setItem('userId', response.id);
      dispatch(loggedIn(response.id, response.api_key));
      history.push('/admin');
    }).fail( response => {
      // TODO: Handle this better
      console.log(response);
    });
  }
}

export const handleLogout = (history) => {
  return(dispatch) => {
    $.ajax({
      url: '/users/sign_out',
      type: 'DELETE',
      dataType: 'JSON'
    }).done( response => {
      localStorage.removeItem('apiKey');
      localStorage.removeItem('userId');
      dispatch(logout());
      history.push('/');
    }).fail( response => {
      // TODO: Handle this better
    });
  }
}

export const handleSignup = (email, name, phone, password, history) => {
  return(dispatch) => {
    $.ajax({
      url: '/users',
      type: 'POST',
      dataType: 'JSON',
      data: { user: { email, name, phone, password } }
    }).done( response => {
      // set localStorage apiKey
			localStorage.setItem('apiKey', response.api_key);
			// set localStorage userId
			localStorage.setItem('userId', response.id);
			// dispatch the action
			dispatch(loggedIn(response.id, response.api_key));
			// redirect
      history.push('/admin');
    }).fail( response => {
      console.log(response);
      dispatch(logout());
      // TODO: handle this better
    })
  }
}
