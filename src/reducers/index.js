import { combineReducers } from "redux";
import authReducer from "./authReducer";
import {reducer as formReducer} from 'redux-form';
import todoReducer from "./todosReducer";

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    todo: todoReducer
});