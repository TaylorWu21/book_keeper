import React from 'react';
import Book from './Book';
import { connect } from 'react-redux';
import { saveBook, deleteBook } from '../actions/books';

class Books extends React.Component {

  saveBook = (title, author, description, image, category, isbn) => {
    this.props.dispatch(saveBook(title, author, description, image, category, isbn));
  }

  deleteBook = (id) => {
    this.props.dispatch(deleteBook(id));
  }

  render() {
    // TODO MAKE BOOKS COMPONENT WORK WITH LIBRARY COMPONENT AS WELL
    let books;
    const { parent } = this.props;
    if(parent === 'search') {
      books = this.props.books.map( (book, i) => {
        return(
          <Book
            key={i}
            title={book.title}
            author={book.authors}
            description={book.description}
            image={book.image}
            category={book.categories}
            isbn={book.isbn}
            saveBook={this.saveBook}
            parent={this.props.parent}
          />
        );
      });
    }
    if(parent === 'library') {
      books = this.props.books.map( (book, i) => {
        return(
          <Book
            key={i}
            id={book.id}
            title={book.title}
            author={book.author}
            description={book.description}
            image={book.image}
            category={book.category}
            isbn={book.isbn}
            deleteBook={this.deleteBook}
            parent={this.props.parent}
          />
        );
      });
    }
    return(
      <ul className='collection'>
        {books}
      </ul>
    )
  }
}

export default connect()(Books);