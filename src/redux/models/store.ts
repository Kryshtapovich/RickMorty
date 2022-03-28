import CharacterState from './state/character';
import EpisodeState from './state/episode';
import LocationState from './state/location';
import ScrollState from './state/scroll';

export default interface Store {
  characterReducer: CharacterState;
  locationReducer: LocationState;
  episodeReducer: EpisodeState;
  scrollReducer: ScrollState;
}
