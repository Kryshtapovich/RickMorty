import {LoadingActionType} from '@models/actions/loading';
import LocationAction, {LocationActionType} from '@models/actions/location';
import LocationState from '@models/state/location';

const initialState: LocationState = {
  locations: [],
  isLoading: false,
  pagination: {nextPage: 1, hasMore: true},
};

function locationReducer(
  state = initialState,
  action: LocationAction,
): LocationState {
  const {type} = action;

  switch (type) {
    case LocationActionType.GET_LOCATIONS: {
      const {payload} = action;
      return {
        ...state,
        pagination: payload.pagination,
        locations: [...state.locations, ...payload.list],
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

export default locationReducer;
