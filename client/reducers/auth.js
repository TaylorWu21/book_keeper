const auth = (state = {} , action) => {
  switch(action.type) {
    case "LOGIN":
      return { ...action.user , isAuthenticated: true }
      break;
    case "LOGOUT":
      return {};
      break;
    default:
      return state;
      break;
  }
}
export default auth;
