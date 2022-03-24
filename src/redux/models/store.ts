import CharacterState from "./state/character";
import LocationState from "./state/location";

export default interface Store {
  characterReducer: CharacterState;
  locationReducer: LocationState;
}
