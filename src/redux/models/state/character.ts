import Character from '@models/character';
import {Pagination} from '@models/pagination';

export default interface CharacterState {
  isLoading: boolean;
  character: Character;
  pagination: Pagination;
  characterList: Array<Character>;
}
