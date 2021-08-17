import { ActionType } from '../action-types';

interface SaveStatusAction {
  type: ActionType.SAVE_STATUS;
}

interface SaveStatusSuccessAction {
  type: ActionType.SAVE_STATUS_SUCCESS;
  inflation: number;
}

interface SaveStatusErrorAction {
  type: ActionType.SAVE_STATUS_ERROR;
  error: string;
}

export type SaveAction =
  | SaveStatusAction
  | SaveStatusSuccessAction
  | SaveStatusErrorAction;
