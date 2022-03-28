import Action from '@models/actions';
import Store from '@models/store';
import characterReducer from '@reducers/character';
import episodeReducer from '@reducers/episode';
import locationReducer from '@reducers/location';
import scrollReducer from '@reducers/scroll';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useDispatch as reduxDispatch,
  useSelector as reduxSelector,
} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';

const rootReducer = combineReducers({
  characterReducer,
  locationReducer,
  episodeReducer,
  scrollReducer,
});

const store = configureStore({reducer: rootReducer});

export const useDispatch = () =>
  reduxDispatch<ThunkDispatch<Store, any, Action>>();

export const useSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = reduxSelector;

export default store;
