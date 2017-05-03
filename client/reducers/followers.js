const followers = (state = [], action) => {
  switch(action.type) {
    case "GET_FOLLOWERS":
      return action.followers;
      break;
    default:
      return state;
      break;
  }
}

export default followers;