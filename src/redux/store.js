import {
  createStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { todosReducers } from "./reducers/todosReducers";
import { todosTabReducers } from "./reducers/todosTabReducers";

const reducer = combineReducers({
  todos: todosReducers,
  currentTab: todosTabReducers,
});

const middleware = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
