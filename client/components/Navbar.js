import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import FaBars from 'react-icons/lib/fa/bars';
import { logout } from '../actions/auth';

class Navbar extends React.Component {

  componentDidMount() {
    $(".button-collapse").sideNav();
  }

  logout = (e) => {
		e.preventDefault();
		this.props.dispatch(logout());
	}

	authLink() {
		if(Object.keys(this.props.auth).length > 1)
			return(
				[
				  <li key='auth-link-0'><Link to="/dashboard">Dashboard</Link></li>,
				  <li key='auth-link-1'><a href='#' onClick={this.logout}>Logout</a></li>
				]
			)
	  else
	  	return(
        [
          <li key='auth-link-0'><Link to="/login">Login</Link></li>,
          <li key='auth-link-1'><Link to="/signup">Sign Up</Link></li>
        ]
      )
	}

	render() {
		return(
			<header>
			  <div className="navbar-fixed">
				  <nav>
				    <div className="nav-wrapper">
				      <Link to='/' className='brand-logo'>Book Keeper</Link>
              <a href="#" data-activates="mobile-demo" className="button-collapse"><FaBars size={29}/></a>
				      <ul className="right hide-on-med-and-down">
				        <li><Link to="/">Home</Link></li>
				        <li><Link to="/about">About</Link></li>
				        <li><Link to="/contact">Contact</Link></li>
				        { this.authLink() }
				      </ul>
				      <ul className="side-nav" id="mobile-demo">
				        <li><Link to="/">Home</Link></li>
				        <li><Link to="/about">About</Link></li>
				        <li><Link to="/contact">Contact</Link></li>
				        { this.authLink() }
				      </ul>
				    </div>
				  </nav>
				</div>
			</header>
		)
	}
}



export default connect()(Navbar);
