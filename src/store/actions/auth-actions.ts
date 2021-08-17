import { ActionType } from '../action-types';

interface LoginAction {
  type: ActionType.LOGIN;
}

interface LoginSuccess {
  type: ActionType.LOGIN_SUCCESS;
  apiKey: string;
}

interface LoginError {
  type: ActionType.LOGIN_ERROR;
}

interface LogoutAction {
  type: ActionType.LOGOUT;
}

export type AuthAction = LoginAction | LoginSuccess | LoginError | LogoutAction;
