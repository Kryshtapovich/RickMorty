import {GetLocationsAction} from '@models/actions/location';
import LocationState from '@models/state/location';

export default interface LocationSlice {
  getLocations: (state: LocationState, action: GetLocationsAction) => void;
  startLoading: (state: LocationState) => void;
  stopLoding: (state: LocationState) => void;
  [key: string]: any;
}
