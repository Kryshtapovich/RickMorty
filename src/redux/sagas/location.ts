import {startLoadingAction, stopLoadingAction} from '@actions/loading';
import {getLocationsAction} from '@actions/location';
import LocationAction, * as Actions from '@models/actions/location';
import Location from '@models/location';
import {PagedList} from '@models/pagination';
import {getLocations} from '@services/location';
import * as Saga from 'redux-saga/effects';

function* getLocationsSaga({
  payload,
}: Actions.GetLocationsRequestAction): Generator<
  Saga.CallEffect<PagedList<Location>> | Saga.PutEffect<LocationAction>,
  void,
  PagedList<Location>
> {
  const {page} = payload;
  yield Saga.put(startLoadingAction());
  const result = yield Saga.call(getLocations, page);
  yield Saga.put(getLocationsAction(result));
  yield Saga.put(stopLoadingAction());
}

function* locationSaga() {
  yield Saga.all([
    Saga.takeEvery(
      Actions.LocationActionType.GET_LOCATIONS_REQUEST,
      getLocationsSaga,
    ),
  ]);
}

export default locationSaga;
