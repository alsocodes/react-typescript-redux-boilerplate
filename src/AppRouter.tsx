import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Index';
import Sidebar from './components/Sidebar/Index';
import { useTypedSelector } from './hooks/UseTypeSelector';
import Login from './pages/Login';
import Main from './pages/Main';
import { checkAuth } from './redux/ActionCreator/Auth';
import { AppDispatch } from './redux/store';

const AppRouter = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    loggedIn,
    data: authData,
    persisting,
  } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  useEffect(() => {
    // console.log(loggedIn);
  }, [loggedIn]);

  return (
    <BrowserRouter>
      {!loggedIn ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
      ) : (
        <div className="drawer min-h-screen">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <Navbar />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
          </div>
          <Sidebar />
        </div>
      )}
    </BrowserRouter>
  );
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes> */}
    </BrowserRouter>
  );
};

export default AppRouter;
