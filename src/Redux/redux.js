/* const { combineReducers, createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk"); */

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userFormReducer from './userForm-reducer';




let reducers = combineReducers({
    userForm: userFormReducer
});


let store = createStore(reducers, applyMiddleware(thunk));



window.store = store;

export default store;