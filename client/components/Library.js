import React from 'react';
import { connect } from 'react-redux';
import { getBooks, searchBooks } from '../actions/books';
import Books from './Books';

class Library extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(getBooks());
  }

  handleSearch = () => {
    const search = this.refs.search.value;
    if(search === '')
      this.props.dispatch(getBooks());
    else
      this.props.dispatch(searchBooks(search));
  }

  render() {
    if(this.props.books) {
      return(
        <div>
          <input type='text' ref='search' onChange={this.handleSearch} />
          <Books books={this.props.books} parent='library' />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { books: state.books }
}

export default connect(mapStateToProps)(Library);