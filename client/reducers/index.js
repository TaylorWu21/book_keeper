import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';

const rootReducer = combineReducers({
  routing: routerReducer,
  auth,
  form: formReducer
});

export default rootReducer;
