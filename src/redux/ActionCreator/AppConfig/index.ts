import { Dispatch } from 'redux';
import { cabangs } from '../../../mock-data/list-cabang';
import { APP_CONFIG_KEY } from '../../../type.d';
import { ActionType, Action } from '../../ActionTypes/AppConfig';
import { CabangData, ToastData } from '../../Reducers/AppConfig';

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

export const setToast = (data: ToastData | null) => {
  console.log(data);
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_TOAST,
      payload: data,
    });
  };
};

export const fetchListCabang = () => {
  return (dispatch: Dispatch<Action>) => {
    // use async in function and await in calling api
    // calling api list cabang
    // return result as payload dispatch

    // mock data
    const result = [...cabangs];
    dispatch({
      type: ActionType.SET_LIST_CABANG,
      payload: result,
    });
  };
};

export const setCabangSelected = (data: CabangData) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_CABANG_SELECTED,
      payload: data,
    });
  };
};
