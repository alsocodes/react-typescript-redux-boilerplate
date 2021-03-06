// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import reducers from './Reducers';

// export const store = createStore(reducers, {}, applyMiddleware(thunk));

import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import rootReducer from './Reducers';

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types

export default store;
