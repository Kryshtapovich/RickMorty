import Character from '../character';

export default interface CharacterState {
  isLoading: boolean;
  character: Character;
  scrollPosition: number;
  characterList: Array<Character>;
}
