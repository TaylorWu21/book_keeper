import { setFlash } from './flash';

export const getBooks = () => {
  return (dispatch) => {
    $.ajax({
      url: '/api/books',
      type: 'GET',
      dataType: 'JSON'
    }).done( books => {
      dispatch({ type: "BOOKS", books });
    }).fail( data => {
      dispatch(setFlash('Could not find books', 'error'));
      console.log(data);
    })
  }
}

export const getUserLibrary = (id) => {
  return (dispatch) => {
    $.ajax({
      url: `/api/books/${id}`,
      type: 'GET',
      datatype: 'JSON'
    }).done( user => {
      dispatch({ type: "GET_OTHER_USER", user: user.user });
      dispatch({ type: "GET_OTHER_BOOKS", books: user.books });
    }).fail( data => {
      dispatch(setFlash('Could not find books', 'error'));
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
      dispatch(setFlash('Book Saved!', 'success'));
      dispatch({ type: "ADD_BOOK", book });
    }).fail( data => {
      dispatch(setFlash('Book already exists in your library', 'error'));
      console.log(data);
    });
  }
}

export const deleteBook = (id) => {
  return (dispatch) => {
    $.ajax({
      url: `/api/book/${id}`,
      type: 'DELETE'
    }).done( () => {
      dispatch(setFlash('Book Deleted', 'success'));
      dispatch({ type: "DELETE_BOOK", id });
    }).fail( () => {
      dispatch(setFlash('Failed to delete book', 'error'));
      console.log('failed to delete');
    })
  }
}