import CharacterAction, {CharacterActionType} from '@models/actions/character';
import {LoadingActionType} from '@models/actions/loading';
import {Character} from '@models/character';
import CharacterState from '@models/state/character';

const initialState: CharacterState = {
  nextPage: 1,
  isLoading: false,
  characterList: [],
  scrollPosition: 0,
  character: {} as Character,
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
        nextPage: payload?.nextPage,
        characterList: [...state.characterList, ...payload.characters],
      };
    }
    case CharacterActionType.SCROLLING: {
      const {payload} = action;
      return {
        ...state,
        scrollPosition: payload.scrollPosition,
        characterList: [...state.characterList],
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
