import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import registerForm from "../_reducers/registerPage";
import ordersPage from "../_reducers/ordersPage";
import app from "../_reducers/app";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({ registerForm, ordersPage, app });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
