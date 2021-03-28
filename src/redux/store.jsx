import {createStore,applyMiddleware} from 'redux';
import {createLogger} from "redux-logger";
import thunkMiddleware from "redux-thunk";
import userReducer from "./reducers/userReducer";
const logger = createLogger();
const store = createStore(userReducer , applyMiddleware(thunkMiddleware,logger) )
export default store;