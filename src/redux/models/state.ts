import {Character} from './character';

export interface CharacterState {
  character: Character;
  nextPage: number;
  characterList: Array<Character>;
}

