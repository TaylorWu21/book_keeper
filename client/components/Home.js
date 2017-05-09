import React from 'react';
import MdLibraryBooks from 'react-icons/lib/md/library-books';
import MdPeople from 'react-icons/lib/md/people';
import MdSearch from 'react-icons/lib/md/search';

class Home extends React.Component {

  componentDidMount() {
    $('nav').addClass('home-bg');
    $('#nav-paragragh').removeClass('hide');
  }

  componentWillUnmount() {
    $('nav').removeClass('home-bg');
    $('#nav-paragragh').addClass('hide');
  }

  render() {
    return(
      <div className='row container'>
        <div className='center'>
          <h2>What Can You Do Here?</h2>
        </div>
        <div className='col s12 m4 center'>
          <MdLibraryBooks size={100} />
          <h4>Build your library</h4>
          <p>
            Add any books to your library and build up a vast library. 
            Now you can have all your books in one place!
            Manage your personal library with this simple website!
          </p>
        </div>
        <div className='col s12 m4 center'>
          <MdPeople size={100} />
          <h4>Socialize</h4>
          <p>
            Connect with other users and socialize. 
            Follow fellow users and talk about the books you love and enjoy!
            Share your thoughts on books and discover new ones from other!
          </p>
        </div>
        <div className='col s12 m4 center'>
          <MdSearch size={100} />
          <h4>Search with the best</h4>
          <p>
            We use Google Books API to search for any books you want and add it to your library!
          </p>
        </div>
      </div>
    )
  }
}
export default Home;
