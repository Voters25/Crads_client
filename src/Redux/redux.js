
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userFormReducer from './userForm-reducer';
import cardEditReducer from "./cardEdit-reducer copy";




let reducers = combineReducers({
    userForm: userFormReducer,
    cardEdit: cardEditReducer
});


let store = createStore(reducers, applyMiddleware(thunk));



window.store = store;

export default store;