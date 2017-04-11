import React from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../actions/books';
import Books from './Books';

class Library extends React.Component {
  componentDidMount() {
    this.props.dispatch(getBooks());
  }

  render() {
    if(this.props.books) return(<Books books={this.props.books} />);
  }
}

const mapStateToProps = (state) => {
  return { books: state.books }
}

export default connect(mapStateToProps)(Library);