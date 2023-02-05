import { reducer as toastrReducer } from 'react-redux-toastr'
import { reducer as userReducer } from './user/user.slice'
import {combineReducers} from "redux";

export const reducers = {
 user: userReducer,
 toastr: toastrReducer,
}