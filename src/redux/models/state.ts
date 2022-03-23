import {Character} from './character';

export interface CharacterState {
  character: Character;
  nextPage: number;
  isLoading: boolean;
  characterList: Array<Character>;
}

export interface ScrollState {
  position: number;
}
