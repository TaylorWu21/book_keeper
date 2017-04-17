const users = ( state = [], action) => {
  switch(action.type) {
    case "ALL_USERS":
      return action.users;
    default:
      return state;
  }
}

export default users;