import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { refreshLogin } from '../actions/auth';
import { UserIsAuthenticated } from '../routes';
import Flash from '../components/Flash';

class App extends React.Component {

  componentWillMount() {
    this.props.dispatch(refreshLogin());
  }

  render() {
    const { auth, history, children, location } = this.props;
    return(
      <div>
        <Navbar auth={auth} history={history} location={location} />
        <Flash />
        {children}
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth }
}


export default connect(mapStateToProps)(App);
