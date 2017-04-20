import React from 'react';
import { Link } from 'react-router';

class Book extends React.Component {

  buttonActions = (actions) => {
    switch(actions) {
      case "search":
        return(
          <button 
            href='#' 
            className='secondary-content btn'
            onClick={() => book.saveBook(
              book.title, 
              book.author, 
              book.description,
              book.image,
              book.category,
              book.isbn
            )}
          >
            Add Book
          </button>
        );
      case "library":
        return(
          <button
            href='#'
            className='secondary-content btn'
            onClick={ () => book.deleteBook(book.id)}
          >
            Delete Book
          </button>
        );
      case "othersLibrary":
        return(
          <div>
            <button 
              href='#' 
              className='secondary-content btn'
              onClick={() => book.saveBook(
                book.title, 
                book.author, 
                book.description,
                book.image,
                book.category,
                book.isbn
              )}
            >
              Add Book
            </button>
            <Link className='secondary-content btn red' to={`/books/${this.props.book.id}`}>Add Comment</Link>
          </div>
        );
      default:
        return(
          <button>NOTHING</button>
        );
    }
  }

  render() {
    const book = this.props.book;
    // if(this.props.)
    return(
      <li className='collection-item avatar row'>
        <div className='col s12 m2 center'>
          <img src={book.image} alt='' style={{width: '150px'}}/>
          <p><b>ISBN-</b>{book.isbn}</p>
        </div>
        <div className='col s12 m9 offset-m1'>
          <div className='center'>
            <span className='title'>
              <b>Title:</b> {book.title}
              <br />
              <b>Category:</b> {book.category}
            </span>
          </div>
          <p>
            <b>Author:</b> {book.author}
            <br />
            <b>Description:</b> {book.description}
          </p>
        { this.buttonActions(this.props.parent) }
        </div>
      </li>
    )
  }
};

export default Book;
