const otherBooks = ( state = [], action) => {
  switch(action.type) {
    case "GET_OTHER_BOOKS":
      return action.books;
    default:
      return state;
  }
}

export default otherBooks;