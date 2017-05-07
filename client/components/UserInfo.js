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
    let following_bool = false;
    const { user, auth } = this.props;
    this.props.followings.map( following => {
      if(following.following_id == user.id) {
        following_bool = true
      };
    });
    return following_bool;
  }

  render() {
    const user = this.props.user;
    return(
      <div className='center col s12 m3'>
        <img className='profile-img responsive-img' src={user.avatar_url} />
        <p><b>Email:</b> {user.email}</p>
        <p><b>Name:</b> {user.name}</p>
        <p><b>Phone:</b> {user.phone}</p>
        {
          this.isFollowing() ?
            <button className='btn red' onClick={ () => this.props.dispatch(deleteFollowing(user.id)) }>
              <FaUserPlus size={25} />
              &nbsp; UnFollow
            </button>
          :
            <button className='btn' onClick={ () => this.props.dispatch(addFollowing(user.id)) }>
              <FaUserPlus size={25} />
              &nbsp; Follow
            </button>
        }
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return { 
    auth: state.auth,
    followings: state.following
  }
}

export default connect(mapStateToProps)(UserInfo);