import { makeAutoObservable, runInAction } from "mobx";

import { Location, PagedData } from "@mobx/models";
import { getLocations } from "@mobx/services";

const initialData: PagedData<Location> = {
  items: [],
  nextPage: 1,
  hasMore: true
};

export class LocationStore {
  error?: string;
  locations = initialData;

  constructor() {
    makeAutoObservable(this);
  }

  getLocations = async (page = 1) => {
    try {
      const result = await getLocations(page);
      runInAction(() => {
        this.locations = {
          ...result,
          items: [...this.locations.items, ...result.items]
        };
      });
    } catch (error) {
      if (error instanceof Error && error.message !== "Request failed with status code 404") {
        this.error = error.message;
      }
    }
  };
}
