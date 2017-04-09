import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import NoMatch from './components/NoMatch';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import App from './containers/App';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.user,
  // predicate: auth => auth.isAuthenticated,
  redirectAction: () => browserHistory.push('/login'),
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
      <Route path='dashboard' component={UserIsAuthenticated(Dashboard)} />
    </Route>
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)
