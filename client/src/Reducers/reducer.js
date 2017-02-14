//main reducer
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
//more reducers below
import loginReducer from './loginReducer';
import commentReducer from './commentReducer';

const mainReducer = combineReducers({
  // login: loginReducer,
  comments: commentReducer,
  routing: routerReducer
});

export default mainReducer;
