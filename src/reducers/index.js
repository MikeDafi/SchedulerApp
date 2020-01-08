import authReducer from "./auth.reducer.js";
import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form';

const reducers = {
    authReducer,
    form:formReducer
};
export default combineReducers(reducers);