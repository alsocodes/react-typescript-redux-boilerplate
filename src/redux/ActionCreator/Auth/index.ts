import { Dispatch } from 'redux';
import { AUTH_KEY } from '../../../type.d';
import { ActionType, Action } from '../../ActionTypes/Auth';

export const checkAuth = () => {
  return (dispatch: Dispatch<Action>) => {
    try {
      // const storage = localStorage.getItem(AUTH_KEY);
      // const authData = storage ? JSON.parse(storage) : null;
      const authData = {
        id: '0001',
        name: 'also',
        email: 'also@gmail.com',
      };
      dispatch({
        type: ActionType.GET_AUTH,
        payload: authData,
      });
    } catch (err) {
      //
    }
  };
};
