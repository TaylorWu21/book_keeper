export const getUsers = () => {
  return(dispatch) => {
    $.ajax({
      url: '/api/all_users',
      type: 'GET'
    }).done( users => {
      dispatch({ type: "ALL_USERS", users});
    }).fail( data => {
      consol.log(data);
    });
  }
}