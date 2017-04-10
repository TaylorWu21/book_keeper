import React from 'react';
import Books from './Books';
import BookSearchForm from './BookSearchForm';

class BookSearch extends React.Component {
  state = { books: [], bookStatus: '' };

  handleSearch = (search) => {
    $.ajax({
      url: `https://www.googleapis.com/books/v1/volumes?q=${search.title? search.title : ''}+inauthor:${search.author? search.author : ''}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( books => {
      if(books.totalItems !== 0) this.setState({ books: books.items, bookStatus: '' });
      else this.setState({ bookStatus: 'No Books Found' });
    }).fail( data =>{
      console.log(data);
    })
  }

  render() {
    return(
      <div>
        <h1>Books</h1>
        <h3>{this.state.bookStatus}</h3>
        <BookSearchForm onSubmit={this.handleSearch}/>
        <Books books={this.state.books} />
      </div>
    )
  }
}

export default BookSearch;
