// import all reducer js files
import { combineReducers } from 'redux';
import * as types from '../constants/actionTypes';
import signupReducer from './userReducer';
import authReducer from './authReducer';

// each reducer should have its initial state within its js file.
// Use a default parameter to pass this into reducer.
// reducers take the current state and an action object as parameters.
// reducers then have a switch statement with cases for each action type (from actionTypes.js).

const reducers = combineReducers({
  auth: authReducer, //refactor later for consistency
  signupReducer,
});


export default reducers;
