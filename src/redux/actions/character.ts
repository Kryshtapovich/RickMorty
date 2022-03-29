import * as Actions from '@models/actions/character';
import Character from '@models/character';
import {PagedList} from '@models/pagination';

export function getCharacterRequestAction(
  characterId: number,
): Actions.GetCharacterRequestAction {
  return {
    type: Actions.CharacterActionType.GET_CHARACTER_REQUEST,
    payload: {characterId},
  };
}

export function getCharacterAction(
  character: Character,
): Actions.GetCharacterAction {
  return {
    type: Actions.CharacterActionType.GET_CHARACTER,
    payload: {character},
  };
}

export function getCharactersListAction(
  payload: PagedList<Character>,
): Actions.GetCharacterListAction {
  return {
    type: Actions.CharacterActionType.GET_CHARACTER_LIST,
    payload,
  };
}

export function getCharacterListRequestAction(
  page: number,
): Actions.GetCharacterListRequestAction {
  return {
    type: Actions.CharacterActionType.GET_CHARACTER_LIST_REQUEST,
    payload: {page},
  };
}
