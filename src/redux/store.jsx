import {createStore,applyMiddleware} from 'redux';
import {createLogger} from "redux-logger";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./rootReducer";
const logger = createLogger();
const store = createStore(rootReducer , applyMiddleware(thunkMiddleware,logger) )
export default store;