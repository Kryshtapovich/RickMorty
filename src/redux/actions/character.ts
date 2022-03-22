import {ActionType} from '@models/action';
import {Character} from '@models/character';

export function getCharacterAction(character: Character) {
  return {
    type: ActionType.GET_CHARACTER,
    payload: character,
  };
}

export function getCharactersListAction(characters: Array<Character>) {
  return {
    type: ActionType.GET_ALL_CHARACTERS,
    payload: characters,
  };
}
