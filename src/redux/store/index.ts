import Action from '@models/actions';
import characterReducer from '@reducers/character';
import episodeReducer from '@reducers/episode';
import locationReducer from '@reducers/location';
import scrollReducer from '@reducers/scroll';
import {
  TypedUseSelectorHook,
  useDispatch as reduxDispatch,
  useSelector as reduxSelector,
} from 'react-redux';
import {applyMiddleware, combineReducers, createStore, Dispatch} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from '@sagas';

const sagaMiddleware = createSagaMiddleWare();

const rootReducer = combineReducers({
  characterReducer,
  locationReducer,
  episodeReducer,
  scrollReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export const useDispatch = () => reduxDispatch<Dispatch<Action>>();

export const useSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = reduxSelector;

export default store;
