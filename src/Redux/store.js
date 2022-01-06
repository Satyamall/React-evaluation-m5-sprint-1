import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { reducer } from "./todo/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers(reducer);

const networkRequestsMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    const func = action;
    return func(store.dispatch, store.getState);
  } else {
    return next(action);
  }
};

let enhancers = compose;

if (process.env.NODE_ENV !== "production") {
  enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}

const enhancer = enhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);

