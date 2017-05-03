const following = (state = [], action) => {
  switch(action.type) {
    case "GET_FOLLOWINGS":
      return action.followings
      break;
    case "ADD_FOLLOWING":
      return [...state, action.following];
      break;
    case "DELETE_FOLLOWING":
      return state.filter( following => {
        if(following.following_id != action.followId) return true;
      });
      break;
    default:
      return state;
  }
}

export default following;