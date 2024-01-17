import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const instialSate = {};
const middleWare = [thunk];
const reducer = combineReducers({});
const store = createStore(reducer, instialSate, applyMiddleware(...middleWare));

export default store;
