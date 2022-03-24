import ScrollAction, {ScrollActionType} from '@models/actions/scroll';
import ScrollState from '@models/state/scroll';

const initialState: ScrollState = {
  position: 0,
};

export function scrollReducer(
  state = initialState,
  action: ScrollAction,
): ScrollState {
  const {type, payload} = action;

  switch (type) {
    case ScrollActionType.SET_POSITION:
      return {...state, position: payload?.position};
    default:
      return state;
  }
}
