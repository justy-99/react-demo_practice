import { combineReducers } from "redux";

import persons from "./person";
import count from "./count";

export default combineReducers({
  persons,
  count
})