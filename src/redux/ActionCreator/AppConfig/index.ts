import { Dispatch } from 'redux';
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

export const setListCabang = (data: CabangData[]) => {
  console.log(data);
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_LIST_CABANG,
      payload: data,
    });
  };
};

export const setCabangSelected = (data: CabangData) => {
  console.log(data);
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_CABANG_SELECTED,
      payload: data,
    });
  };
};
