import React from 'react';
import Book from './Book';
import { connect } from 'react-redux';
import { saveBook, deleteBook } from '../actions/books';

class Books extends React.Component {

  saveBook = (title, author, description, image, category, isbn, e) => {
    e.stopPropagation();
    this.props.dispatch(saveBook(title, author, description, image, category, isbn));
  }

  deleteBook = (id, e) => {
    e.stopPropagation();
    this.props.dispatch(deleteBook(id));
  }

  render() {
    const books = this.props.books.map( book => {
      return(
        <Book
          key={book.id}
          book={book}
          parent={this.props.parent}
          deleteBook={this.deleteBook}
          saveBook={this.saveBook}
        />
      )
    })

    return(
      <ul className='collapsible popout' data-collapsible="accordion">
        {books}
      </ul>
    )
  }
}

export default connect()(Books);