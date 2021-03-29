import userReducer from "./reducers/userReducer";
import appThemeReducer from "./reducers/appThemeReducer";
import {combineReducers} from 'redux'

export default combineReducers({userReducer,appThemeReducer});