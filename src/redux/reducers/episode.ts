import EpisodeAction, {EpisodeActionType} from '@models/actions/episode';
import {LoadingActionType} from '@models/actions/loading';
import EpisodeState from '@models/state/episode';

const initialState: EpisodeState = {
  episodes: [],
  isLoading: false,
};

function episodeReducer(
  state = initialState,
  action: EpisodeAction,
): EpisodeState {
  const {type} = action;

  switch (type) {
    case EpisodeActionType.GET_EPISODES: {
      const {payload} = action;

      return {
        ...state,
        episodes: [...state.episodes, ...payload.episodes],
      };
    }
    case LoadingActionType.START: {
      return {...state, isLoading: true};
    }
    case LoadingActionType.STOP: {
      return {...state, isLoading: false};
    }
    default:
      return state;
  }
}

export default episodeReducer;
