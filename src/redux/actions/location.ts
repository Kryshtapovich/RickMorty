import * as Actions from '@models/actions/location';
import Location from '@models/location';
import {PagedList} from '@models/pagination';

export function getLocationsAction(
  payload: PagedList<Location>,
): Actions.GetLocationsAction {
  return {
    type: Actions.LocationActionType.GET_LOCATIONS,
    payload,
  };
}

export function getLocationsRequestAction(
  page: number,
): Actions.GetLocationsRequestAction {
  return {
    type: Actions.LocationActionType.GET_LOCATIONS_REQUEST,
    payload: {page},
  };
}
