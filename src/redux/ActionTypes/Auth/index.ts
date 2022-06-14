import { Auth } from '../../Reducers/Auth';

export enum ActionType {
  GET_AUTH_PENDING = 'GET_AUTH_PENDING',
  GET_AUTH = 'GET_AUTH',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
}
interface checkAuth {
  type: ActionType.GET_AUTH;
  payload: Auth;
}

interface loginSuccess {
  type: ActionType.LOGIN_SUCCESS;
  payload: Auth;
}

export type Action = checkAuth | loginSuccess;
