import {PayloadAction} from '@reduxjs/toolkit';

import Location from '../location';

export const enum LocationActionType {
  GET_LOCATIONS = 'GET_LOCATIONS',
}

export type GetLocationsAction = PayloadAction<
  Array<Location>,
  LocationActionType.GET_LOCATIONS
>;

type LocationType = GetLocationsAction;

export default LocationType;
