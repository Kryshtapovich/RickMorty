import characterReducer from "@reducers/character";
import locationReducer from "@reducers/location";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
  characterReducer,
  locationReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
