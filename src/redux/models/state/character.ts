import {Character} from '../character';

export default interface CharacterState {
  nextPage: number;
  isLoading: boolean;
  character: Character;
  characterList: Array<Character>;
}
