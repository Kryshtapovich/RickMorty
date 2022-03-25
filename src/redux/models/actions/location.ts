import Location from "../location";
import LoadingAction from "./loading";

export const enum LocationActionType {
  GET_LOCATIONS,
}

interface GetLocationsAction {
  type: LocationActionType.GET_LOCATIONS;
  payload: {
    nextPage: number;
    locations: Array<Location>;
  };
}

type LocationAction = GetLocationsAction | LoadingAction;

export default LocationAction;
