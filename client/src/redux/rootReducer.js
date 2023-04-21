import { combineReducers } from "redux";
import counterReducer from "./reducers/counter";
import navbarReducer from "./reducers/navbar";

const rootReducer = combineReducers({
  counter: counterReducer,
  navbar: navbarReducer,
});

export default rootReducer;
