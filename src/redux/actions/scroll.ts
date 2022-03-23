import {ScrollAction} from '../models/action';

export function getScrollAction(position: number) {
  return {type: ScrollAction.SET_POSITION, payload: position};
}
