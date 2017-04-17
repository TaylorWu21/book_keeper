import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import books from './books';
import flash from './flash';
import users from './users';
import otherUser from './otherUser';
import otherBooks from './otherBooks';

const rootReducer = combineReducers({
  routing: routerReducer,
  auth,
  books,
  flash,
  users,
  otherUser,
  otherBooks,
  form: formReducer
});

export default rootReducer;
