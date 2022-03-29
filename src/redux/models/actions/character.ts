import Character from '@models/character';
import {PagedList} from '@models/pagination';

import LoadingAction from './loading';

export const enum CharacterActionType {
  GET_CHARACTER = 'GET_CHARACTER',
  GET_CHARACTER_REQUEST = 'GET_CHARACTER_REQUEST',
  GET_CHARACTER_LIST = 'GET_CHARACTER_LIST',
  GET_CHARACTER_LIST_REQUEST = 'GET_CHARACTER_LIST_REQUEST',
}

export interface GetCharacterRequestAction {
  type: CharacterActionType.GET_CHARACTER_REQUEST;
  payload: {characterId: number};
}

export interface GetCharacterAction {
  type: CharacterActionType.GET_CHARACTER;
  payload: {character: Character};
}
export interface GetCharacterListAction {
  type: CharacterActionType.GET_CHARACTER_LIST;
  payload: PagedList<Character>;
}

export interface GetCharacterListRequestAction {
  type: CharacterActionType.GET_CHARACTER_LIST_REQUEST;
  payload: {page: number};
}

type CharacterAction =
  | GetCharacterRequestAction
  | GetCharacterAction
  | GetCharacterListAction
  | GetCharacterListRequestAction
  | LoadingAction;

export default CharacterAction;
