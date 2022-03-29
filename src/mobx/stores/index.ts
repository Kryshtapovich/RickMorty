import {createContext, useContext} from 'react';

import CharacterStore from './character';
import EpisodeStore from './episode';
import LocationStore from './location';
import ScrollStore from './scroll';

interface Store {
  characterStore: CharacterStore;
  locationStore: LocationStore;
  episodeStore: EpisodeStore;
  scrollStore: ScrollStore;
}

const store: Store = {
  characterStore: new CharacterStore(),
  locationStore: new LocationStore(),
  episodeStore: new EpisodeStore(),
  scrollStore: new ScrollStore(),
};

export const storeContext = createContext(store);

export function useStore() {
  return useContext(storeContext);
}
