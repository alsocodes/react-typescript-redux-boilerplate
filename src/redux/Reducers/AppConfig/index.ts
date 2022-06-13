import { Action, ActionType } from '../../ActionTypes/AppConfig';

interface Cabang {
  name: string;
  id: string;
}

export interface AppConfig {
  cabangSelected: Cabang | null;
  themeSelected?: string | null;
  sidebarMode?: string | null;
}

const initialState = {
  cabangSelected: null,
  themeSelected: null,
  sidebarMode: null,
};

const appConfigReducer = (state: AppConfig = initialState, action: Action): AppConfig => {
  switch (action.type) {
    case ActionType.GET_APP_CONFIG:
      return action.payload;

    default:
      return state;
  }
};

export default appConfigReducer;
