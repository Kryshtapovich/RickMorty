import {
  CharacterScrollAction,
  EpisodeScrollAction,
  LocationScrollAction,
} from '@models/actions/scroll';
import ScrollState from '@models/state/scroll';

export default interface ScrollSlice {
  scrollCharacters: (state: ScrollState, action: CharacterScrollAction) => void;
  scrollLocations: (state: ScrollState, action: LocationScrollAction) => void;
  scrollEpisodes: (state: ScrollState, action: EpisodeScrollAction) => void;
  [key: string]: any;
}
