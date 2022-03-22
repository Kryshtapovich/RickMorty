import {Action, ActionType} from '@models/action';

import {Character} from '@models/character';
import {CharacterState} from '@models/state';

const initialState: CharacterState = {
  character: {} as Character,
  characterList: [],
};

export function characterReducer(
  state = initialState,
  action: Action,
): CharacterState {
  const {type, payload} = action;

  switch (type) {
    case ActionType.GET_CHARACTER:
      return {
        ...state,
        character: payload,
        characterList: [...state.characterList],
      };
    case ActionType.GET_ALL_CHARACTERS:
      return {
        ...state,
        character: {...state.character},
        characterList: payload,
      };
    default:
      return state;
  }
}
