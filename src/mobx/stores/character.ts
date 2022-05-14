import { makeAutoObservable, runInAction } from "mobx";

import { Character, PagedData } from "@mobx/models";
import { getCharacters, getCharactersByName } from "@mobx/services";

const initialData: PagedData<Character> = {
  items: [],
  nextPage: 1,
  hasMore: true
};

export class CharacterStore {
  error?: string;
  characters = initialData;
  filteredCharacters = initialData;

  constructor() {
    makeAutoObservable(this);
  }

  getCharactersByName = async (name?: string, page = 1) => {
    if (!name) {
      this.filteredCharacters = initialData;
      this.error = undefined;
      return;
    }

    try {
      const result = await getCharactersByName(name, page);
      runInAction(() => {
        this.filteredCharacters = {
          ...result,
          items: page === 1 ? result.items : [...this.filteredCharacters.items, ...result.items]
        };
        this.error = undefined;
      });
    } catch (error) {
      if (error instanceof Error && error.message !== "Request failed with status code 404") {
        this.error = error.message;
      }
    }
  };

  getCharacters = async (page = 1) => {
    try {
      const result = await getCharacters(page);
      runInAction(() => {
        this.characters = {
          ...result,
          items: [...this.characters.items, ...result.items]
        };
        this.error = undefined;
      });
    } catch (error) {
      if (error instanceof Error && error.message !== "Request failed with status code 404") {
        this.error = error.message;
      }
    }
  };
}
