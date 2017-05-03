import { setFlash } from './flash';

export const getFollowings = () => {
  return (dispatch) => {
    $.ajax({
      url: '/api/followings',
      type: 'GET',
      dataType: 'JSON'
    }).done( followings => {
      dispatch({ type: "GET_FOLLOWINGS", followings})
    }).fail( data => {
      console.log(data);
    });
  }
}

export const addFollowing = (following_id) => {
  return (dispatch) => {
    $.ajax({
      url: '/api/following',
      type: 'POST',
      dataType: 'JSON',
      data: { follower: { following_id } }
    }).done( following => {
      dispatch({ type: "ADD_FOLLOWING", following });
    }).fail( data => {
      if(data.responseText.includes("taken"))
        dispatch(setFlash("You are already following this person", "error"));
      console.log(data);
    });
  }
}

export const deleteFollowing = (followId) => {
  return (dispatch) => {
    $.ajax({
      url: `/api/following/${followId}`,
      type: 'DELETE'
    }).done( () => {
      dispatch({ type: "DELETE_FOLLOWING", followId })
    }).fail( data => {
      console.log(data);
    });
  }
}