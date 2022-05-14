import { makeAutoObservable, runInAction } from "mobx";

import { Episode, PagedData } from "@mobx/models";
import { getEpisodes } from "@mobx/services";

const initialData: PagedData<Episode> = {
  items: [],
  nextPage: 1,
  hasMore: true
};

export class EpisodeStore {
  error?: string;
  episodes = initialData;

  constructor() {
    makeAutoObservable(this);
  }

  getEpisodes = async (page = 1) => {
    try {
      const result = await getEpisodes(page);
      runInAction(() => {
        this.episodes = {
          ...result,
          items: [...this.episodes.items, ...result.items]
        };
      });
    } catch (error) {
      if (error instanceof Error && error.message !== "Request failed with status code 404") {
        this.error = error.message;
      }
    }
  };
}
