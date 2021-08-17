import { ActionType } from '../action-types';
import { Action } from '../actions';

interface AuthState {
  authorized: boolean;
  apiKey?: string;
}

const initialState: AuthState = {
  authorized: false,
};

const reducer = (
  state: AuthState = initialState,
  action: Action
): AuthState => {
  switch (action.type) {
    case ActionType.LOGIN:
      return { ...state, authorized: false };
    case ActionType.LOGIN_SUCCESS:
      return { ...state, authorized: true, apiKey: action.apiKey };
    case ActionType.LOGIN_ERROR:
      return { ...state, authorized: false };
    case ActionType.LOGOUT:
      return { ...state, authorized: false, apiKey: undefined };
    default:
      return state;
  }
};

export default reducer;
