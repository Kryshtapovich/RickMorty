export const enum LoadingActionType {
  START = 'START',
  STOP = 'STOP',
}

export default interface LoadingAction {
  type: LoadingActionType;
}
