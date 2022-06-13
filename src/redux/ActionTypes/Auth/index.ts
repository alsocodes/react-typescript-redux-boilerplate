import { Auth } from '../../Reducers/Auth';

export enum ActionType {
  GET_AUTH_PENDING = 'GET_AUTH_PENDING',
  GET_AUTH = 'GET_AUTH',
  GET_AUTH_FAIL = 'GET_AUTH_FAIL',
}
interface checkAuth {
  type: ActionType.GET_AUTH;
  payload: Auth;
}

export type Action = checkAuth;
