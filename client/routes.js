import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import { routerActions } from 'react-router-redux'
import App from './containers/App';
import NoMatch from './components/NoMatch';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import Library from './components/Library';
import Users from './components/Users';
import UserLibrary from './components/UserLibrary';

// TODO: FIX AUTH
const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth,
  predicate: auth => auth.isAuthenticated,
  redirectAction: routerActions.replace,
  wrapperDisplayName: "UserIsAuthenticated"
});

// TODO: ADD USER ROUTES FOR AUTHENTICATION

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      <Route path='/dashboard' component={UserIsAuthenticated(Dashboard)} />
      <Route path='/library' component={UserIsAuthenticated(Library)} />
      <Route path='/users' component={UserIsAuthenticated(Users)} />
      <Route path='/users/:id' component={UserLibrary} />
    </Route>
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
);
