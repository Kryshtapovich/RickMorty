import {characterReducer} from '@src/redux/reducers/character';
import {scrollReducer} from '@src/redux/reducers/scroll';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({characterReducer, scrollReducer});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
