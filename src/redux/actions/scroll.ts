import ScrollAction, {ScrollActionType} from '@models/actions/scroll';

export function getScrollAction(position: number): ScrollAction {
  return {type: ScrollActionType.SET_POSITION, payload: {position}};
}
