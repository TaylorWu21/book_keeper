import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getFollowings } from '../actions/follow';

class Follow extends React.Component {
  componentDidMount() {
    this.props.dispatch(getFollowings());
  }

  render() {
    const following = this.props.following.map( following => {
      return(
        <Link key={following.id} to={`/users/${following.following_id}`}>{following.following_name}</Link>
      );
    });
    return(
      <div>
        <h4>Following: {this.props.following.length}</h4>
        {following}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { following: state.following }
}

export default connect(mapStateToProps)(Follow);