import React from 'react';
import Book from './Book';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.searchBooks = this.searchBooks.bind(this);
    this.state = { books: [] };
  }

  searchBooks(e) {
    e.preventDefault();
    var {title, author} = this.refs;
    $.ajax({
      url: 'https://www.googleapis.com/books/v1/volumes?q=' + title.value + '+inauthor:' + author.value,
      type: 'GET',
      dataType: 'JSON'
    }).done( books => {
      this.setState({ books: books.items });
    }).fail( data =>{
      console.log(data);
    })
  }

  // books() {
  //   const books = this.state.books.map( book => {
  //     if(book.volumeInfo.imageLinks && book.volumeInfo.categories) {
  //       return(
  //         <Book />
  //       )
  //   })
  // }

  render() {
    const books = this.state.books.map(book => {
      if(book.volumeInfo.imageLinks && book.volumeInfo.categories) {
        return(
          <Book key={book.id} book={book} />
        );
      }
    })
    return(
      <div>
        <h1 className='container'>Books</h1>
        <div className='row'>
          <form id='book_form' className='container' onSubmit={this.searchBooks}>
            <div className='col s12 input-field'>
              <label htmlFor='title'>Title</label>
              <input id='title' type='text' className='validate' ref='title' />
            </div>
            <div className='col s12 input-field'>
              <label htmlFor='author'>Author</label>
              <input id='author' type='text' className='validate' ref='author' />
            </div>
            <div className='center'>
              <button id='submit' className='btn center' type='submit'>Search</button>
            </div>
          </form>
        </div>
        <ul className='collection'>
          {books}
        </ul>
      </div>
    )
  }
}

export default SearchBar;
