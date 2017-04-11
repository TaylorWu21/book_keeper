import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { refreshLogin } from '../actions/auth';
import { UserIsAuthenticated } from '../routes';
import Flash from '../components/Flash';

class App extends React.Component {

  componentWillMount() {
    this.props.dispatch(refreshLogin());
  }

  render() {
    const { auth, history, children} = this.props;
    return(
      <div>
        <Navbar auth={auth} history={history} />
        <Flash />
        {children}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth }
}


export default connect(mapStateToProps)(App);
