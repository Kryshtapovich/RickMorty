import Character from '../character';

export default interface CharacterState {
  isLoading: boolean;
  character: Character;
  characterList: Array<Character>;
}
