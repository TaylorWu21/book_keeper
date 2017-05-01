import { setFlash } from './flash';

export const getComments = (book_id) => {
  return (dispatch) => {
    $.ajax({
      url: `/api/books/${book_id}/comments`,
      type: 'GET'
    }).done( data => {
      dispatch({ type: "GET_BOOK", book: data.book });
      dispatch({ type: "GET_COMMENTS", comments: data.comments });
      dispatch({ type: "GET_OTHER_USER", user: data.user });
    }).fail( data => {
      console.log(data);
    })
  }
}

export const addComment = (message, book_id, user_id) => {
  return (dispatch) => {
    $.ajax({
      url: `/api/books/${book_id}/comments`,
      type: 'POST',
      dataType: 'JSON',
      data: { comment: { user_id, message } }
    }).done( comment => {
      dispatch(setFlash('Comment Added', 'success'));
      dispatch({ type: 'ADD_COMMENT', comment });
    }).fail( data => {
      console.log(data);
    })
  }
}

export const updateComment = (id, message) => {
  return (dispatch) => {
    $.ajax({
      url: `/api/comments/${id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { comment: { message } }
    }).done( comment => {
      dispatch(setFlash('Comment Updated', 'success'));
      dispatch({ type: "UPDATE_COMMENT", comment});
    }).fail( data => {
      console.log(data);
    });
  }
}

export const deleteComment = (id) => {
  return (dispatch) => {
    $.ajax({
      url: `/api/comments/${id}`,
      type: 'DELETE'
    }).done( () => {
      dispatch(setFlash('Comment Deleted', 'success'));
      dispatch({ type: 'DELETE_COMMENT', id });
    }).fail( data => {
      console.log(data);
    })
  }
}