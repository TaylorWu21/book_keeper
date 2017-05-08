import React from 'react';
import { connect } from 'react-redux';
import BookSearch from './BookSearch';
import Profile from './Profile';
import Follow from './Follow';
import Library from './Library';

class Dashboard extends React.Component {

  render() {
    return(
      <div className='row'>
        <div className='col s12 m2'>
          <Profile user={this.props.auth} onSubmit={this.handleUpdate} />
        </div>
        <div className='col s12 m7'>
          <nav className="nav-extended">
            <div className="nav-content">
              <ul className="tabs tabs-transparent">
                <li className="tab"><a href="#test1">Library</a></li>
                <li className="tab"><a href="#test2">Add Books</a></li>
              </ul>
            </div>
          </nav>
          <div id="test1" className="col s12"><Library /></div>
          <div id="test2" className="col s12"><BookSearch /></div>
        </div>
        <div className='col s12 m3'>
          <Follow />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(Dashboard);
