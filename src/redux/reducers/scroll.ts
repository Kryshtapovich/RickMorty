import ScrollAction, { ScrollActionType } from "@models/actions/scroll";
import ScrollState from "@models/state/scroll";

const initialState: ScrollState = {
  characterOffset: 0,
  locationOffset: 0,
  episodeOffset: 0,
};

function scrollReducer(
  state = initialState,
  action: ScrollAction,
): ScrollState {
  const { type, payload } = action;

  switch (type) {
    case ScrollActionType.SCROLL_CHARACTERS: {
      return { ...state, characterOffset: payload.offset };
    }
    case ScrollActionType.SCROLL_LOCATIONS: {
      return { ...state, locationOffset: payload.offset };
    }
    case ScrollActionType.SCROLL_EPISODES: {
      return { ...state, episodeOffset: payload.offset };
    }
    default:
      return state;
  }
}

export default scrollReducer;
