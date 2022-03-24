export const enum ScrollActionType {
  SET_POSITION,
}

export default interface ScrollAction {
  type: ScrollActionType;
  payload: {
    position: number;
  };
}
