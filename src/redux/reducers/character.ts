import CharacterAction, {CharacterActionType} from '@models/actions/character';
import {LoadingActionType} from '@models/actions/loading';
import Character from '@models/character';
import CharacterState from '@models/state/character';

const initialState: CharacterState = {
  isLoading: false,
  characterList: [],
  character: {} as Character,
  pagination: {nextPage: 1, hasMore: true},
};

function characterReducer(
  state = initialState,
  action: CharacterAction,
): CharacterState {
  const {type} = action;

  switch (type) {
    case CharacterActionType.GET_CHARACTER: {
      const {payload} = action;
      return {...state, character: payload.character};
    }
    case CharacterActionType.GET_CHARACTER_LIST: {
      const {payload} = action;

      return {
        ...state,
        pagination: payload.pagination,
        characterList: [...state.characterList, ...payload.list],
      };
    }
    case LoadingActionType.START: {
      return {
        ...state,
        isLoading: true,
        characterList: [...state.characterList],
      };
    }
    case LoadingActionType.STOP: {
      return {
        ...state,
        isLoading: false,
        characterList: [...state.characterList],
      };
    }
    default:
      return state;
  }
}

export default characterReducer;
