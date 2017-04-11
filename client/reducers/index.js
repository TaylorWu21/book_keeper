import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import books from './books';
import flash from './flash';

const rootReducer = combineReducers({
  routing: routerReducer,
  auth,
  books,
  flash,
  form: formReducer
});

export default rootReducer;
