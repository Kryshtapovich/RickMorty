import {getScrollAction} from '@actions/scroll';
import {Dispatch} from 'redux';

export function setPosition(position: number) {
  return function (dispatch: Dispatch) {
    dispatch(getScrollAction(position));
  };
}
