import React from 'react';
import Books from './Books';
import BookSearchForm from './BookSearchForm';

class BookSearch extends React.Component {
  state = { books: [], bookStatus: '' };

  formatBooks(books) {
    let filteredBooks = books.filter( book => {
      if(book.volumeInfo.imageLinks &&
        book.volumeInfo.categories &&
        book.volumeInfo.title &&
        book.volumeInfo.authors &&
        book.volumeInfo.industryIdentifiers) return true;
    })
    let formattedBooks = filteredBooks.map( book => {
      let singleBook = { 
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors[0],
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks.thumbnail,
        category: book.volumeInfo.categories[0],
        isbn: book.volumeInfo.industryIdentifiers[0].identifier
      }
      return singleBook;
    });
    this.setState({ books: formattedBooks, bookStatus: '' });
    console.log(formattedBooks);
  }

  handleSearch = (search) => {
    $.ajax({
      url: `https://www.googleapis.com/books/v1/volumes?q=${search.title? search.title : ''}+inauthor:${search.author? search.author : ''}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( books => {
      if(books.totalItems !== 0) {
        this.formatBooks(books.items);
      } else {
        this.setState({ bookStatus: 'No Books Found' });
      } 
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
        <Books books={this.state.books} parent='search' />
      </div>
    )
  }
}

export default BookSearch;
