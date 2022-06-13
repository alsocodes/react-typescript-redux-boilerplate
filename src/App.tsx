import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import AppRouter from './AppRouter';
import store from './redux/store';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
export default App;
