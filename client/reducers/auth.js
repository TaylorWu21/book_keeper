const auth = (state = {} , action) => {
  switch(action.type) {
    case "LOGIN":
      return { ...action.user , isAuthenticated: true, editing: false }
    case "LOGOUT":
      return {};
    case "EDIT_USER":
      return { ...state, editing: action.boolean }
    default:
      return state;
  }
}
export default auth;
