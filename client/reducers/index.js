import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import books from './books';

const rootReducer = combineReducers({
  routing: routerReducer,
  auth,
  books,
  form: formReducer
});

export default rootReducer;
