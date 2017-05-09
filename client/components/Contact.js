import React from 'react';

const Contact = () => (
  <div className='container'>
    <h4>Here's a Contact Form That Doesn't work</h4>
    <div className="row">
      <form>
        <div className="input-field col s6">
          <input id="first_name" type="text" className="validate"/>
          <label for="first_name">First Name</label>
        </div>
        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate"/>
          <label for="last_name">Last Name</label>
        </div>
        <div className="input-field col s12">
          <input id="email" type="email" className="validate"/>
          <label for="email">Email</label>
        </div>
        <div className="input-field col s12">
          <input id="subject" type="text" className="validate"/>
          <label for="subject">Subject</label>
        </div>
        <div class="input-field col s12">
          <label htmlFor="textarea">Body</label>
          <textarea id="textarea" className="materialize-textarea"></textarea>
        </div>
        <div className='center'>
          <button type='submit' className='btn'>Submit</button>
        </div>
      </form>
    </div>
  </div>
)

export default Contact;
