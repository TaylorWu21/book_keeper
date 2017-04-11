import { setFlash } from './flash';

export const getBooks = () => {
  return (dispatch) => {
    $.ajax({
      url: 'api/books',
      type: 'GET',
      dataType: 'JSON',
    }).done( books => {
      dispatch({ type: "BOOKS", books });
    }).fail( data => {
      console.log(data);
    })
  }
}

export const saveBook = (title, author, description, image, category, isbn) => {
  return (dispatch) => {
    $.ajax({
      url: '/api/book',
      type: 'POST',
      dataType: 'JSON',
      data: { book: { title, author, description, image, category, isbn } }
    }).done( book => {
      dispatch(setFlash('Book Saved!', 'success'))
      dispatch({ type: "ADD_BOOK", book });
    }).fail( data => {
      console.log(data);
    });
  }
}

export const deleteBook = (id) => {
  return (dispatch) => {
    $.ajax({
      url: `api/book/${id}`,
      type: 'DELETE'
    }).done( () => {
      console.log('hit this');
      dispatch({ type: "DELETE_BOOK", id });
    }).fail( () => {
      console.log('failed to delete');
    })
  }
}