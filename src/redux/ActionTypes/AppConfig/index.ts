import { AppConfig } from '../../Reducers/AppConfig';

export enum ActionType {
  GET_APP_CONFIG = 'GET_APP_CONFIG',
}
interface getAppConfig {
  type: ActionType.GET_APP_CONFIG;
  payload: AppConfig;
}

export type Action = getAppConfig;
