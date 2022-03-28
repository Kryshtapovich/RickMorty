import {
  GetCharacterAction,
  GetCharacterListAction,
} from '@models/actions/character';
import CharacterState from '@models/state/character';

export default interface CharacterSlice {
  getCharacter: (state: CharacterState, action: GetCharacterAction) => void;
  getCharacterList: (
    state: CharacterState,
    action: GetCharacterListAction,
  ) => void;
  startLoading: (state: CharacterState) => void;
  stopLoading: (state: CharacterState) => void;
  [key: string]: any;
}
