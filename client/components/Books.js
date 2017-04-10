import React from 'react';
import Book from './Book';

class Books extends React.Component {

  render() {
    const books = this.props.books.map( (book, i) => {
      if(book.volumeInfo.imageLinks &&
         book.volumeInfo.categories &&
         book.volumeInfo.title &&
         book.volumeInfo.authors &&
         book.volumeInfo.industryIdentifiers
      ) 
        return(
          <Book
            key={i} 
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            image={book.volumeInfo.imageLinks}
            category={book.volumeInfo.categories}
            isbn={book.volumeInfo.industryIdentifiers}
          />
        );
    });
    return(
      <ul className='collection'>
        {books}
      </ul>
    )
  }
}

export default Books;