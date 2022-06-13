import { Dispatch } from 'redux';
import { APP_CONFIG_KEY } from '../../../type.d';
import { ActionType, Action } from '../../ActionTypes/AppConfig';

export const getAppConfig = () => {
  return (dispatch: Dispatch<Action>) => {
    try {
      const storage = localStorage.getItem(APP_CONFIG_KEY);
      const config = storage ? JSON.parse(storage) : null;

      dispatch({
        type: ActionType.GET_APP_CONFIG,
        payload: config,
      });
    } catch (err) {
      //
    }
  };
};
