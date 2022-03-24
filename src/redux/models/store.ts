import CharacterState from './state/character';
import ScrollState from './state/scroll';

export default interface Store {
  characterReducer: CharacterState;
  scrollReducer: ScrollState;
}
