const books = (state = [], action) => {
  switch(action.type) {
    case "BOOKS":
      return action.books
      break;
    case "ADD_BOOK":
      return [action.book, ...state];
      break;
    case "DELETE_BOOK":
      return state.filter( book => {
        if(book.id !== action.id) return book;
      });
      break;
    default:
      return state;
      break;
  }
}

export default books;