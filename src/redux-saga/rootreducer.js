import { combineReducers } from "redux";
import userReducer from "../redux-saga/user/reducer/reducer";


let rootReducers = combineReducers({
  userReducer
});

export default rootReducers;