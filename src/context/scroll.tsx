import React, {createContext, useContext, useState} from 'react';

interface Scrollable {
  offset: number;
  scroll: (offset: number) => void;
}

interface Scroll {
  character: Scrollable;
  location: Scrollable;
  episode: Scrollable;
}

const ScrollContext = createContext({} as Scroll);
const {Provider} = ScrollContext;

export function useScroll() {
  return useContext(ScrollContext);
}

export function ScrollProvider({children}: React.PropsWithChildren<{}>) {
  const [characterOffset, setCharacterOffset] = useState(0);
  const [locationOffset, setLocationOffset] = useState(0);
  const [episodeOffset, setEpisodeOffset] = useState(0);

  const scrollCharacters = (offset: number) => setCharacterOffset(offset);
  const scrollLocations = (offset: number) => setLocationOffset(offset);
  const scrollEpisodes = (offset: number) => setEpisodeOffset(offset);

  const character = {offset: characterOffset, scroll: scrollCharacters};
  const location = {offset: locationOffset, scroll: scrollLocations};
  const episode = {offset: episodeOffset, scroll: scrollEpisodes};

  const scroll: Scroll = {character, location, episode};

  return <Provider value={scroll}>{children}</Provider>;
}
