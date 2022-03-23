import {CharacterAction} from '@models/action';
import {Character} from '@models/character';

export function getCharacterAction(character: Character) {
  return {
    type: CharacterAction.GET_CHARACTER,
    payload: character,
  };
}

export function getCharactersListAction(
  characters: Array<Character>,
  nextPage = 1,
) {
  return {
    type: CharacterAction.GET_CHARACTER_LIST,
    payload: {characters, nextPage},
  };
}

export function startLoadingAction() {
  return {
    type: CharacterAction.START_LOADING,
  };
}

export function stopLoadingAction() {
  return {
    type: CharacterAction.STOP_LOADING,
  };
}
