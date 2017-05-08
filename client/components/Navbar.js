import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import FaBars from 'react-icons/lib/fa/bars';
import { logout } from '../actions/auth';

class Navbar extends React.Component {

  componentDidMount() {
    $(".button-collapse").sideNav({
      menuWidth: 300,
      closeOnClick: true,
      draggable: true
    });
  }

  link = (i, name, path) => {
    let activeClass = this.props.location.pathname === path ? 'active' : '';
    return(
      <li key={i} className={activeClass}>
        <Link to={path}>{name}</Link>
      </li>
    )
  }

  links = () => {
    // Unauthenticated Routes
    return [

    ].map( (link, i) => {
      return this.link(i, link.name, link.path);
    })
  }

	authLink = () => {
		if(Object.keys(this.props.auth).length > 1) {
      let links = [
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'All Users', path: '/users' }
      ].map( (link, i) => {
        return this.link(i, link.name, link.path);
      });
      links.push(
        <li key='logout'>
          <a href='#' onClick={ (e) => this.props.dispatch(logout())}>
            Logout
          </a>
        </li>
      )
      return links;
    } else {
      return [
        { name: 'Log In', path: '/login' },
        { name: 'Sign Up', path: '/signup' }
      ].map( (link, i) => {
        return this.link(i, link.name, link.path);
      });
    }
	}

	render() {
    const user = this.props.auth;
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Book Keeper</a>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><FaBars size={30}/></a>
          <ul className="right hide-on-med-and-down">
            { this.links() }
            { this.authLink() }
          </ul>
          <ul className="side-nav" id="mobile-demo">
            {
              Object.keys(user).length > 1? 
                <li><div className="userView">
                  <div className="background">
                    <img src="https://res.cloudinary.com/taylorwu21/image/upload/v1492371686/sample.jpg" />
                  </div>
                    <a href="#!user"><img className="circle" src={user.avatar_url} /></a>
                    <a href="#!name"><span className="white-text name">{user.name}</span></a>
                    <a href="#!email"><span className="white-text email">{user.email}</span></a>
                </div></li>
              : 
                <li className='black-text'><a>Please Login or Signup!</a></li>
            }
            { this.authLink() }
            <li><div className="divider"></div></li>
            { this.links() }
          </ul>
        </div>
      </nav>
    );
	}
}

export default connect()(Navbar);
