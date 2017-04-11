import React from 'react';

const Book = (book) => {
  return(
  <li className='collection-item avatar row'>
    <div className='col s12 m2 center'>
      <img src={book.image} alt='' />
      <p><b>ISBN-</b>{book.isbn}</p>
    </div>
    <div className='col s12 m10'>
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
    </div>
    {
      book.parent === 'search'?
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
      :
        <button
          href='#'
          className='secondary-content btn'
          onClick={ () => book.deleteBook(book.id)}
        >
          Delete Book
        </button>
    }
  </li>
  )
};

export default Book;
