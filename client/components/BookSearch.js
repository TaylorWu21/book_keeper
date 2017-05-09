import React from 'react';
import Books from './Books';
import BookSearchForm from './BookSearchForm';

class BookSearch extends React.Component {
  state = { books: [], bookStatus: '', loading: false };

  formatBooks(books) {
    let filteredBooks = books.filter( book => {
      if(book.volumeInfo.imageLinks &&
        book.volumeInfo.categories &&
        book.volumeInfo.title &&
        book.volumeInfo.authors &&
        book.volumeInfo.industryIdentifiers) return true;
    })
    let formattedBooks = filteredBooks.map( (book, i) => {
      let singleBook = {
        id: i,
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors[0],
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks.thumbnail,
        category: book.volumeInfo.categories[0],
        isbn: book.volumeInfo.industryIdentifiers[0].identifier
      }
      return singleBook;
    });
    this.setState({ books: formattedBooks, bookStatus: '', loading: false });
  }

  handleSearch = (search) => {
    this.setState({loading: true});
    $.ajax({
      url: `https://www.googleapis.com/books/v1/volumes?q=${search.title? search.title : ''}+inauthor:${search.author? search.author : ''}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( books => {
      if(books.totalItems !== 0) {
        this.formatBooks(books.items);
      } else {
        this.setState({ bookStatus: 'No Books Found', loading: false });
      }
    }).fail( data =>{
      console.log(data);
    })
  }

  loader = () => (
    <div className='center'>
      <div className="preloader-wrapper big active">
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div><div className="gap-patch">
            <div className="circle"></div>
          </div><div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  )

  render() {
    return(
      <div>
        <h4>Search for books to add to your library</h4>
        <h3>{this.state.bookStatus}</h3>
        <BookSearchForm onSubmit={this.handleSearch}/>
        {
          this.state.loading? 
            this.loader()
          : 
            <Books books={this.state.books} parent='search' /> 
        }
      </div>
    )
  }
}

export default BookSearch;
