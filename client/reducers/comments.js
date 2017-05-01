const comments = ( state = [], action) => {
  switch(action.type) {
    case "GET_COMMENTS":
      return action.comments;
      break;
    case "ADD_COMMENT":
      return [...state, action.comment];
      break;
    case "UPDATE_COMMENT":
      return state.map( comment => {
        if(comment.comment_id === action.comment.comment_id)
          return action.comment;
        else
          return comment;
      });
      break;
    case "DELETE_COMMENT":
      return state.filter( comment => {
        if(comment.comment_id !== action.id)
          return true;
      });
      break;
    default:
      return state;
  }
}

export default comments;