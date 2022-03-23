import { ScrollAction } from "@models/action";
import { ScrollState } from "@models/state";
import { AnyAction } from "redux";

const initialState: ScrollState = {
  position: 0,
};

export function scrollReducer(
  state = initialState,
  action: AnyAction,
): ScrollState {
  const {type, payload} = action;

  switch (type) {
    case ScrollAction.SET_POSITION:
      return {...state, position: payload};
    default:
      return state;
  }
}
