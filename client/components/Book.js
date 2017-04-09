import React from 'react';

class Book extends React.Component {

  render() {
    const book = this.props.book
    {/* <div className='book_card'>
      <div className='col s12 m4'>
      <div className='card'>
      <div className='card-image'>
      <img className='book-img' src={book.volumeInfo.imageLinks.thumbnail} />
      <span className='card-title'>{book.volumeInfo.title}</span>
    </div>
    <div className='card-content'>
    <p>{book.volumeInfo.categories[0]}</p>
    <br />
    <p>{book.volumeInfo.description}</p>
  </div>
  <div className='card-action'>
  <a
  href='#'
  className='book_link text-blue'
  data-img='${book.volumeInfo.imageLinks.thumbnail}'
  data-title='${book.volumeInfo.title}'
  data-description='${book.volumeInfo.description}'
  data-category='${book.volumeInfo.categories[0]}'
  >
  Save Book
</a>
</div>
</div>
</div>
</div> */}
    return(
      <div>
        <li className='collection-item avatar'>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt='' className='circle' />
          <span className='title'>{book.volumeInfo.title} - {book.volumeInfo.categories[0]? book.volumeInfo.categories[0] : ''}</span>
          <p>
            {book.volumeInfo.authors[0]? book.volumeInfo.authors[0] : ''}
            <br />
            {book.volumeInfo.description}
          </p>
          <a href='#' className='secondary-content'>Add Book</a>
        </li>
      </div>
    )
  }
}

export default Book;
