import React from 'react';
import { Link } from 'react-router';
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaGithubSquare from 'react-icons/lib/fa/github-square';

const Footer = () => (
  <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">Follow Me On Social Media!</h5>
          <div>
            <a className='white-text footer-links' href='https://twitter.com/DrinkMySoySauce' target="_blank">
              <FaTwitterSquare size={60} />
            </a>
            <a className='white-text footer-links' href='https://www.instagram.com/drinkmysoysauce/' target="_blank">
              <FaInstagram size={60} />
            </a>
            <a className='white-text footer-links' href='https://www.facebook.com/wuhooo' target="_blank">
              <FaFacebookSquare size={60} />
            </a>
            <a className='white-text footer-links' href='https://github.com/taylorwu21' target="_blank">
              <FaGithubSquare size={60} />
            </a>
          </div>
        </div>
        <div className="col l4 offset-l2 s12">
          <h5 className="white-text">Learn More</h5>
          <ul>
            <li><Link to='/about' className="grey-text text-lighten-3">About</Link></li>
            <li><Link to='/contact' className="grey-text text-lighten-3">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      © Created in 2017. Wow This Website is Sick!!
      </div>
    </div>
  </footer>
);

export default Footer;