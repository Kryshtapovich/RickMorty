import { createContext, useContext } from "react";

import { CharacterStore } from "./character";
import { EpisodeStore } from "./episode";
import { LocationStore } from "./location";
import { ScrollStore } from "./scroll";
import { UserStore } from "./user";

interface Store {
  characterStore: CharacterStore;
  locationStore: LocationStore;
  episodeStore: EpisodeStore;
  scrollStore: ScrollStore;
  userStore: UserStore;
}

const store: Store = {
  characterStore: new CharacterStore(),
  locationStore: new LocationStore(),
  episodeStore: new EpisodeStore(),
  scrollStore: new ScrollStore(),
  userStore: new UserStore()
};

const storeContext = createContext(store);

export function useStore() {
  return useContext(storeContext);
}
