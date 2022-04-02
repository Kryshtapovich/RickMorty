import { LocationActionType } from "@models/actions/location";
import Location from "@models/location";

export function GetLocationListAction(locations: Array<Location>) {
  return {
    type: LocationActionType.GET_LOCATIONS,
    payload: { locations },
  };
}
