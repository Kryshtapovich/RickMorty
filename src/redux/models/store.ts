import CharacterState from "./state/character";
import EpisodeState from "./state/episode";
import LocationState from "./state/location";

export default interface Store {
  characterReducer: CharacterState;
  locationReducer: LocationState;
  episodeReducer: EpisodeState;
}
