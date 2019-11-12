import { createStore, applyMiddleware } from "redux";
// Logger with default options
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "../reducers";

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(logger)));
  return store;
}