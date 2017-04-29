const otherUser = ( state = {}, action) => {
  switch(action.type) {
    case "GET_OTHER_USER":
      return action.user;
      break;
    default:
      return state;
      break;
  }
}

export default otherUser;