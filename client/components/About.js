import React from 'react';
import Taylor from '../images/Me.jpg';

const About = () => (
  <div className='container row'>
    <h4 className='about-margin'>Who Built This Amazing Website?</h4>
    <div className='col s12 m6 center'>
      <img src={Taylor} className='about-img' />
    </div>
    <div className='col s12 m6'>
      <div className='valign-wrapper'>
      <p>
        Book Keeper was built by me! Taylor Wu.
        I graduated from the University of Utah in Information System.
        This website was built on my spare time. 
        Programming is my passion and I love learning new technologies by building websites.
        This is one of my personal project that I felt that I would use myself.
      </p>
      </div>
    </div>
    <div className='col s12'>
      <h4 className='about-margin'>What Libraries did you use?</h4>
      <p className='container'>
        This app was built with ruby on rails on the back end and javascript on the front end.
        For the database I used postgresql.
        The front library I used was react. To get it to work with my rails server I used a ruby gem called repack.
        More front end library I used was react-router and react-redux.
        The CSS framework I used is Materialize.
      </p>
    <h4 className='about-margin'>Why Did You Build Book Keeper?</h4>
    <p className='container'>
      I built this because I've been reading a lot more. I bought many books and want to keep track of my library.
      I wanted see what kind of books my friends been reading, so I added a social aspect to the website.
      This website was based on another website I saw called libib. 
      Its basically a clone of it but libib is definately better.
    </p>
    </div>
  </div>
)

export default About;
