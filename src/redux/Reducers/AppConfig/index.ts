import { Action, ActionType } from '../../ActionTypes/AppConfig';

export interface CabangData {
  id: string;
  name: string;
  address: string;
}

export interface ToastData {
  type: string;
  message: string;
}
export interface AppConfig {
  listCabang: CabangData[];
  cabangSelected: CabangData | null;
  themeSelected?: string | null;
  sidebarMode?: string | null;
  toastData?: ToastData | null;
}

const initialState = {
  listCabang: [],
  cabangSelected: null,
  themeSelected: null,
  sidebarMode: null,
  toastData: null,
};

const appConfigReducer = (state: AppConfig = initialState, action: Action): AppConfig => {
  switch (action.type) {
    case ActionType.GET_APP_CONFIG:
      return action.payload;
    case ActionType.SET_TOAST:
      return {
        ...initialState,
        toastData: action.payload,
      };
    case ActionType.SET_LIST_CABANG:
      return {
        ...initialState,
        listCabang: action.payload,
      };

    case ActionType.SET_CABANG_SELECTED:
      return {
        ...initialState,
        cabangSelected: action.payload,
      };
    default:
      return state;
  }
};

export default appConfigReducer;
