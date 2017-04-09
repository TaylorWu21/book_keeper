import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { refreshLogin } from '../actions/auth';

class App extends React.Component {

  componentWillMount() {
    this.props.dispatch(refreshLogin());
  }

  render() {
    return(
      <div>
        <Navbar user={this.props.user} history={this.props.history} />
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}


export default connect(mapStateToProps)(App);
