import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from "./reducers/reducer";
import apiMiddleware from "../middleware/api";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(apiMiddleware,thunk)));
window.store = store;
export default store;
