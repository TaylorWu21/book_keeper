import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import NoMatch from './components/NoMatch';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import { handleLogout } from './components/auth/actions';
import App from './containers/App';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/auth/Login';
import Admin from './components/Admin';
import Signup from './components/auth/Signup';

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth,
  predicate: auth => auth.isAuthenticated,
  redirectAction: () => handleLogout(browserHistory),
  wrapperDisplayName: 'UserIsAuthenticated'
});

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
      <Route path='contact' component={Contact} />
      <Route path='login' component={Login} />
      <Route path='signup' component={Signup} />
      <Route path='admin' component={UserIsAuthenticated(Admin)} />
    </Route>
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)
