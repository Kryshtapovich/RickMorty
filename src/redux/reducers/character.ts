import {CharacterAction} from '@models/action';
import {Character} from '@models/character';
import {CharacterState} from '@models/state';
import {AnyAction} from 'redux';

const initialState: CharacterState = {
  character: {} as Character,
  nextPage: 1,
  isLoading: false,
  characterList: [],
};

export function characterReducer(
  state = initialState,
  action: AnyAction,
): CharacterState {
  const {type, payload} = action;

  switch (type) {
    case CharacterAction.GET_CHARACTER: {
      return {...state, character: payload};
    }
    case CharacterAction.GET_CHARACTER_LIST: {
      return {
        ...state,
        nextPage: payload.nextPage,
        characterList: [...state.characterList, ...payload.characters],
      };
    }
    case CharacterAction.START_LOADING: {
      return {...state, isLoading: true};
    }
    case CharacterAction.STOP_LOADING: {
      return {...state, isLoading: false};
    }
    default:
      return state;
  }
}
