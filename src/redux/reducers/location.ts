import {LoadingActionType} from '@models/actions/loading';
import LocationAction, {LocationActionType} from '@models/actions/location';
import LocationState from '@models/state/location';

const initialState: LocationState = {
  locations: [],
  isLoading: false,
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
        locations: [...state.locations, ...payload.locations],
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
