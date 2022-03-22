import {Character} from './character';

export const enum ActionType {
  GET_CHARACTER,
  GET_ALL_CHARACTERS,
}

export interface Action {
  type: ActionType;
  payload: any
}
