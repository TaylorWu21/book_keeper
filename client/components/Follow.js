import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getFollowings, getFollowers } from '../actions/follow';

class Follow extends React.Component {

  componentDidMount() {
    this.props.dispatch(getFollowings());
    this.props.dispatch(getFollowers());
    $('ul.tabs').tabs();
  }

  follow = (follow) => {
    return follow.map( f => {
      return(
        <Link className='collection-item avatar' key={f.id} to={`/users/${f.following_id}`}>
          <img src={f.following_avatar_url} alt="" className="circle" />
          <span>{f.following_name}</span>
        </Link>
      )
    })
  }

  render() {
    const { following, followers } = this.props;
    return(
      <div className="card">
        <div className="card-content">
          <h4>Following: { this.props.following.length }</h4>
        </div>
        <div className="card-tabs">
          <ul className="tabs tabs-fixed-width">
            <li className="tab"><a href="#test4">Following</a></li>
            <li className="tab"><a href="#test5">Followers</a></li>
          </ul>
        </div>
        <div className="card-content grey lighten-4">
          <ul id='test4' className='collection'>{ this.follow(following) }</ul>
          <ul id="test5" className='collection'>{ this.follow(followers) }</ul>
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