export const saveBook = (title, author, description, image, category, isbn) => {
  return (dispatch) => {
    $.ajax({
      url: '/api/book',
      type: 'POST',
      dataType: 'JSON',
      data: { book: { title, author, description, image, category, isbn } }
    }).done( book => {
      debugger;
    }).fail( data => {
      console.log(data);
    });
  }
}