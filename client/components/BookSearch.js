import React from 'react';
import Book from './Book';
import BookSearchForm from './BookSearchForm';

class BookSearch extends React.Component {
  state = { books: [] };

  handleSearch = (search) => {
    console.log(search);
    $.ajax({
      url: 'https://www.googleapis.com/books/v1/volumes?q=' + search.title + '+inauthor:' + search.author,
      type: 'GET',
      dataType: 'JSON'
    }).done( books => {
      debugger;
      this.setState({ books: books.items });
    }).fail( data =>{
      console.log(data);
    })
  }

  render() {
    return(
      <div>
        <h1 className='container'>Books</h1>
        <BookSearchForm onSubmit={this.handleSearch}/>
      </div>
    )
  }
}

export default BookSearch;
