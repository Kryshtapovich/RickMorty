import {applyMiddleware, combineReducers, createStore} from 'redux';

import {characterReducer} from '@reducers/characterReducer';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({characterReducer});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
