import { AppConfig, CabangData, ToastData } from '../../Reducers/AppConfig';

export enum ActionType {
  GET_APP_CONFIG = 'GET_APP_CONFIG',
  SET_TOAST = 'SET_TOAST',
  SET_LIST_CABANG = 'SET_LIST_CABANG',
  SET_CABANG_SELECTED = 'SET_CABANG_SELECTED',
}
interface getAppConfig {
  type: ActionType.GET_APP_CONFIG;
  payload: AppConfig;
}

interface setToast {
  type: ActionType.SET_TOAST;
  payload: ToastData | null;
}

interface setListCabang {
  type: ActionType.SET_LIST_CABANG;
  payload: CabangData[];
}

interface setCabangSelected {
  type: ActionType.SET_CABANG_SELECTED;
  payload: CabangData;
}

export type Action = getAppConfig | setToast | setListCabang | setCabangSelected;
