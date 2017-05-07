import React from 'react';
import { Link } from 'react-router';
import FaBook from 'react-icons/lib/fa/book';
import MdAddBox from 'react-icons/lib/md/add-box';
import MdComment from 'react-icons/lib/md/comment';
import FaTrash from 'react-icons/lib/fa/trash';

class Book extends React.Component {

  componentDidMount() {
    $('.collapsible').collapsible();
  }

  buttonActions = (actions) => {
    const { book, saveBook, deleteBook } = this.props;
    switch(actions) {
      case "search":
        return(
          <button 
            href='#' 
            className='waves-effect waves-green btn-flat'
            onClick={ (e) => saveBook(
              book.title, 
              book.author, 
              book.description,
              book.image,
              book.category,
              book.isbn,
              e
            )}
          >
            <MdAddBox size={30} />
          </button>
        );
      case "library":
        return(
          <div>
            <button
              className='waves-effect waves-red btn-flat'
              onClick={ (e) => deleteBook(book.id, e)}
            >
              <FaTrash size={30} />
            </button>
            <Link className='waves-effect waves-blue btn-flat' to={`/books/${book.id}`}>
              <MdComment size={30} />
            </Link>
          </div>
        );
      case "othersLibrary":
        return(
          <div>
            <button 
              className='waves-effect waves-green btn-flat'
              onClick={ (e) => saveBook(
                book.title, 
                book.author, 
                book.description,
                book.image,
                book.category,
                book.isbn,
                e
              )}
            >
              <MdAddBox size={30} />
            </button>
            <Link className='waves-effect waves-blue btn-flat' to={`/books/${book.id}`}>
              <MdComment size={30} />
            </Link>
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
    return(
      <li>
        <div className="collapsible-header">
          <div className='row' style={{marginBottom: '0px'}}>
            <div className='col s9 m9'>
              <FaBook size={30} /> {book.title}
            </div>
            <div className='col s3 m3'>
              <div className='right'>
                { this.buttonActions(this.props.parent) }
              </div>
            </div>
          </div>
        </div>
        <div className="collapsible-body row">
          <div className='col s12 m2 offset-m1 center'>
            <img src={book.image} alt='' style={{width: '150px', paddingTop: '20px'}}/>
            <p><b>ISBN-</b>{book.isbn}</p>
          </div>
          <div className='col s12 m8 offset-m1'>
            <p>
              <b>Category:</b> {book.category}
              <br />
              <br />
              <b>Author:</b> {book.author}
              <br />
              <br />
              <b>Description:</b> {book.description}
            </p>
          </div>
        </div>
      </li>
    )
  }
};

export default Book;
