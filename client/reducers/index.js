import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import books from './books';
import flash from './flash';
import users from './users';

const rootReducer = combineReducers({
  routing: routerReducer,
  auth,
  books,
  flash,
  users,
  form: formReducer
});

export default rootReducer;
