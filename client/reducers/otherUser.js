const otherUser = ( state = {}, action) => {
  switch(action.type) {
    case "GET_OTHER_USER":
      return action.user;
    default:
      return state;
  }
}

export default otherUser;