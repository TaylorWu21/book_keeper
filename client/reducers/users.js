const users = ( state = [], action) => {
  switch(action.type) {
    case "ALL_USERS":
      return action.users;
      break;
    case "SEARCH_USERS":
      return state.filter( user => {
        if(user.name.toLowerCase().includes(action.search.toLowerCase()) || 
           user.email.toLowerCase().includes(action.search.toLowerCase())
        ) return true;
      });
      break;
    default:
      return state;
      break;
  }
}

export default users;