import React from 'react';

const Book = (book) => {
  return(
  <li className='collection-item avatar row'>
    <div className='col s12 m2 center'>
      <img src={book.image.thumbnail} alt='' />
      <p><b>ISBN-</b>{book.isbn[0].identifier}</p>
    </div>
    <div className='col s12 m10'>
      <div className='center'>
        <span className='title'>
          <b>Title:</b> {book.title}
          <br />
          <b>Category:</b> {book.category[0]}
        </span>
      </div>
      <p>
        <b>Author:</b> {book.author[0]}
        <br />
        <b>Description:</b> {book.description}
      </p>
    </div>
    <button 
      href='#' 
      className='secondary-content btn'
      onClick={() => book.saveBook(
        book.title, 
        book.author[0], 
        book.description,
        book.image.thumbnail,
        book.category[0],
        book.isbn[0].identifier
      )}
    >
      Add Book
    </button>
  </li>
  )
};

export default Book;
