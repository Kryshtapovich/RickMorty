import {PayloadAction} from '@reduxjs/toolkit';

import Character from '../character';

export const enum CharacterActionType {
  GET_CHARACTER = 'GET_CHARACTER',
  GET_CHARACTER_LIST = 'GET_CHARACTER_LIST',
}

export type GetCharacterAction = PayloadAction<
  Character,
  CharacterActionType.GET_CHARACTER
>;

export type GetCharacterListAction = PayloadAction<
  Array<Character>,
  CharacterActionType.GET_CHARACTER_LIST
>;

type CharacterAction = GetCharacterAction | GetCharacterListAction;

export default CharacterAction;
