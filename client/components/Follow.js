import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getFollowings, getFollowers } from '../actions/follow';

class Follow extends React.Component {
  state = { followHeader: '' }

  componentDidMount() {
    this.props.dispatch(getFollowings());
    this.props.dispatch(getFollowers());
  }

  follow = (follow) => {
    return follow.map( f => {
      return(
        <li key={f.id} className='collection-item'>
          <Link to={`/users/${f.following_id}`}>
            <div className='valign-wrapper'>
              <img 
                className='follow-img' 
                src={f.following_avatar_url} alt={`${f.following_name}'s profile picture`} 
              />
              <p>{f.following_name}</p>
            </div>
          </Link>
        </li>
      );
    })
  }

  following = (count) => {
    this.setState({ followHeader: `Following: ${count}` })
  }

  followers = (count) => {
    this.setState({ followHeader: `Followers: ${count}` })
  }

  render() {
    const { following, followers } = this.props;
    return(
      <div className="card">
        <div className="card-content center">
          <h4>
            { this.state.followHeader === "" ? `Following: ${following.length}` : this.state.followHeader }
          </h4>
        </div>
        <div className="card-tabs">
          <ul className="tabs tabs-fixed-width">
            <li onClick={ () => this.following(following.length) } className="tab">
              <a className='active' href="#following">Following</a>
            </li>
            <li onClick={ () => this.followers(followers.length) } className="tab">
              <a href="#follower">Followers</a>
            </li>
          </ul>
        </div>
        <div className="card-content grey lighten-4 row">
          <ul id='following' className='collection'>{ this.follow(following) }</ul>
          <ul id="follower" className='collection'>{ this.follow(followers) }</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    following: state.following,
    followers: state.followers
  }
}

export default connect(mapStateToProps)(Follow);