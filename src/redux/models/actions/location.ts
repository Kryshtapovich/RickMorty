import Location from '@models/location';
import {PagedList} from '@models/pagination';

import LoadingAction from './loading';

export const enum LocationActionType {
  GET_LOCATIONS = 'GET_LOCATIONS',
  GET_LOCATIONS_REQUEST = 'GET_LOCATIONS_REQUEST',
}

export interface GetLocationsAction {
  type: LocationActionType.GET_LOCATIONS;
  payload: PagedList<Location>;
}

export interface GetLocationsRequestAction {
  type: LocationActionType.GET_LOCATIONS_REQUEST;
  payload: {page: number};
}

type LocationAction =
  | GetLocationsAction
  | GetLocationsRequestAction
  | LoadingAction;

export default LocationAction;
