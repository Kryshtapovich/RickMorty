import Episode from '@models/episode';
import {getEpisodes} from '@services/episode';
import {makeAutoObservable, runInAction} from 'mobx';

class EpisodeStore {
  isLoading = false;
  episodes: Array<Episode> = [];

  constructor() {
    makeAutoObservable(this);
  }

  getEpisodes = async (page: number) => {
    this.isLoading = true;
    const {pagination, list} = await getEpisodes(page);
    runInAction(() => {
      this.episodes = [...this.episodes, ...list];
      this.isLoading = false;
    });
    return pagination;
  };
}

export default EpisodeStore;
