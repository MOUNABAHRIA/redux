import { combineReducers, createStore } from "redux";
import reducer from "./reducer"
const store = createStore(combineReducers({reducer}) , window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;