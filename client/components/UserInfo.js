import React from 'react';
import { connect } from 'react-redux';
import { getFollowings, addFollowing, deleteFollowing } from '../actions/follow';
import FaUserPlus from 'react-icons/lib/fa/user-plus';
import FaUserTimes from 'react-icons/lib/fa/user-times'

class UserInfo extends React.Component {

  componentDidMount() {
    this.props.dispatch(getFollowings());
  }

  isFollowing = () => {
    const { auth, user, followings } = this.props;
    let followButton = "follow";

    followings.forEach( following => {
      if(following.following_id == user.id)
        followButton = "unfollow";
    });

    if(user.id === auth.id)
      followButton = "nothing"
    
    switch(followButton) {
      case "follow":
        return(
          <button className='btn' onClick={ () => this.props.dispatch(addFollowing(user.id)) }>
            <FaUserPlus size={25} />
            &nbsp; Follow
          </button>
        );
      case "unfollow":
        return(
          <button className='btn' onClick={ () => this.props.dispatch(deleteFollowing(user.id)) }>
            <FaUserTimes size={25} />
            &nbsp; UnFollow
          </button>
        );
      default:
        return(
          null
        )
    }
  }

  render() {
    const user = this.props.user;
    return(
      <div>
        <img className='profile-img' src={user.avatar_url} />
        <p><b>Email:</b> {user.email}</p>
        <p><b>Name:</b> {user.name}</p>
        <p><b>Phone:</b> {user.phone}</p>
        { this.isFollowing() }
      </div>
    );
  }
}

const mapStateToProps = (state,props) => {
  return { 
    auth: state.auth,
    followings: state.following,
  }
}

export default connect(mapStateToProps)(UserInfo);