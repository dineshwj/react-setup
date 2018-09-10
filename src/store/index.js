import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
const history = createHistory();
const middleware = routerMiddleware(history);

// const store = createStore(
//   combineReducers({
//     reducers,  `
//     router: routerReducer
//   }),
//   applyMiddleware(middleware, createLogger(), thunkMiddleware)
// );
/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(middleware, createLogger(), thunkMiddleware)
);
/* eslint-enable */
export default store;
