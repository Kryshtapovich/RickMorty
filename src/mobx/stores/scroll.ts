import {makeAutoObservable, runInAction} from 'mobx';

class ScrollStore {
  characterOffset = 0;
  locationOffset = 0;
  episodeOffset = 0;

  constructor() {
    makeAutoObservable(this);
  }

  scrollCharacters = (offset: number) => {
    this.characterOffset = offset;
  };

  scrollLocations = (offset: number) => {
    this.locationOffset = offset;
  };

  scrollEpisodes = (offset: number) => {
    this.episodeOffset = offset;
  };
}

export default ScrollStore;
