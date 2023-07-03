import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import userInfo from "../modules/userInfo";

const rootReducer = combineReducers({
  userInfo
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
