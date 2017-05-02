import React from 'react';
import { connect } from 'react-redux';
import { getFollowings, addFollowing, deleteFollowing } from '../actions/follow';

class UserInfo extends React.Component {

  componentDidMount() {
    this.props.dispatch(getFollowings());
  }

  followButton = () => {
    this.props.followings.map( following => {
      if(following.following_id === this.props.user.id) {
        return(
          <button className='btn'>UnFollow</button>
        );
      }
    });
  }

  render() {
    const user = this.props.user;
    return(
      <div className='center col s12 m3'>
        <img className='profile-img' src={user.avatar_url} />
        <p><b>Email:</b> {user.email}</p>
        <p><b>Name:</b> {user.name}</p>
        <p><b>Phone:</b> {user.phone}</p>
        <button className='btn' onClick={ () => props.dispatch(addFollowing(user.id)) }>Follow</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { followings: state.following }
}

export default connect(mapStateToProps)(UserInfo);