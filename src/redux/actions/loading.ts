import LoadingAction, { LoadingActionType } from "@models/actions/loading";

export function startLoadingAction(): LoadingAction {
  return { type: LoadingActionType.START };
}

export function stopLoadingAction(): LoadingAction {
  return { type: LoadingActionType.STOP };
}
