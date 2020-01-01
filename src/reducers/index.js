import authReducer from "./auth.reducer.js";
import {combineReducers} from "redux";

const reducers = {
    authReducer
};
export default combineReducers(reducers);