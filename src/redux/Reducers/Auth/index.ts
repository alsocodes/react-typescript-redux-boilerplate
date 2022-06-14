import { Action, ActionType } from '../../ActionTypes/Auth';

export interface Auth {
  id: string;
  name: string;
  email: string;
}

interface State {
  persisting?: boolean;
  loading: boolean;
  data: Auth | null;
  loggedIn?: boolean;
  error: string | null;
}

const initialState = {
  persisting: true,
  loading: false,
  data: null,
  loggedIn: false,
  error: null,
};

const authReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.GET_AUTH:
      return {
        ...state,
        loading: true,
        data: action.payload,
        loggedIn: action.payload !== null,
        error: null,
      };
    case ActionType.LOGIN_SUCCESS:
      return {
        ...state,
        loading: true,
        data: action.payload,
        loggedIn: action.payload !== null,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
