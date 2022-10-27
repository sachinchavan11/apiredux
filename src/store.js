import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from './reducer'

const middleware = [thunk];

const Store = createStore(reducer, applyMiddleware(...middleware));
export default Store;
