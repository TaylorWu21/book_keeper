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