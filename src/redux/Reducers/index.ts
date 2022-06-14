import { combineReducers } from 'redux';
import authReducer from './Auth';
import appConfigReducer from './AppConfig';

const reducers = combineReducers({
  auth: authReducer,
  appConfig: appConfigReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
