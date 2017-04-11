const flash = ( state = {}, action) => {
  switch(action.type) {
    case "SET_FLASH":
      return { message: action.message, type: action.msgType }
      break;
    case "CLEAR_FLASH":
      return {}
      break;
    default:
      return state;
      break;
  }
}

export default flash;