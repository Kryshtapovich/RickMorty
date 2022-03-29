import Character from '@models/character';
import {getCharacter, getCharacterList} from '@services/character';
import {makeAutoObservable, runInAction} from 'mobx';

class CharacterStore {
  isLoading = false;
  character = {} as Character;
  characterList: Array<Character> = [];

  constructor() {
    makeAutoObservable(this);
  }

  getCharacter = async (id: number) => {
    this.isLoading = true;
    const character = await getCharacter(id);
    runInAction(() => {
      this.character = character;
      this.isLoading = false;
    });
  };

  getCharacterList = async (page: number) => {
    this.isLoading = true;
    const {pagination, list} = await getCharacterList(page);
    runInAction(() => {
      this.characterList = [...this.characterList, ...list];
      this.isLoading = false;
    });
    return pagination;
  };
}

export default CharacterStore;
