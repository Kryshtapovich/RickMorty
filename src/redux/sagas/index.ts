import {all, fork} from 'redux-saga/effects';

import characterSaga from './character';
import episodeSaga from './episode';
import locationSaga from './location';

function* rootSaga() {
  yield all([fork(characterSaga), fork(locationSaga), fork(episodeSaga)]);
}

export default rootSaga;
