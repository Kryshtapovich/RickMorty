import { ActionType } from "@models/action";
import { Character } from "@models/character";
import { CharacterState } from "@models/state";
import { AnyAction } from "redux";

const initialState: CharacterState = {
  character: {} as Character,
  nextPage: 1,
  characterList: [],
};

export function characterReducer(
  state = initialState,
  action: AnyAction,
): CharacterState {
  const {type, payload} = action;

  switch (type) {
    case ActionType.GET_CHARACTER:
      return {
        ...state,
        character: payload,
        characterList: [...state.characterList],
      };
    case ActionType.GET_CHARACTER_LIST:
      return {
        ...state,
        character: {...state.character},
        characterList: [...state.characterList, ...payload.characters],
        nextPage: payload.nextPage,
      };
    default:
      return state;
  }
}
