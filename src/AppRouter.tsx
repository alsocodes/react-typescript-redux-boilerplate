import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ModalPilihCabang from './components/ModalPilihCabang';
import Navbar from './components/Navbar/Index';
import Sidebar from './components/Sidebar/Index';
import { ToastMessage } from './components/ToastMessage';
import { useTypedSelector } from './hooks/UseTypeSelector';
import Login from './pages/Login';
import Main from './pages/Main';
import { getAppConfig } from './redux/ActionCreator/AppConfig';
import { checkAuth } from './redux/ActionCreator/Auth';
import { AppDispatch } from './redux/store';
import { useHotkeys } from 'react-hotkeys-hook';
import { routes } from './components/Sidebar/routes';
import { accesses } from './mock-data/list-access';
import NotFound from './pages/NotFound';

const AppRouter = (): JSX.Element | null => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    loggedIn,
    // data: authData,
    persisting,
  } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuth());
    dispatch(getAppConfig());
  }, [dispatch]);

  if (persisting === true) {
    return null;
  }

  console.log('loggedIn persisting:loggedIn ', persisting, loggedIn);

  return (
    <BrowserRouter>
      {!loggedIn ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
      ) : (
        <MainLayout />
      )}
      <ToastMessage />
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

const MainLayout = (): JSX.Element => {
  const renderRoute = useCallback(
    (route) => {
      if (!accesses?.includes(route.access)) {
        return null;
      }

      if (!route.childs) {
        return (
          <Route key={`route-${route.title}`} path={route.path} element={route.element} />
        );
      }

      return route.childs.map((child: any) => {
        if (child.access && !accesses?.includes(child.access)) {
          return null;
        }

        return (
          <Route
            key={`route-${child.title}`}
            path={route.path + child.path}
            element={child.element}
          />
        );
      });
    },
    [accesses],
  );
  const [openModalPilihCabang, setOpenModalPilihCabang] = useState(false);
  const [checkedCb, setCheckedCb] = useState<boolean>(false);
  const setter = (v: boolean) => {
    setOpenModalPilihCabang(v);
  };

  useHotkeys(
    'alt+s',
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      // console.log('alt+s');
      setCheckedCb((checkedCb) => !checkedCb);
    },
    { enableOnTags: ['TEXTAREA', 'INPUT'] },
  );

  return (
    <div className="drawer">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={checkedCb}
        onChange={(e) => setCheckedCb(e.target.checked)}
      />
      <div className="drawer-content">
        <Navbar setModalCabangOpen={setter} setCheckedCb={setCheckedCb} />
        <Routes>
          <Route path="*" element={<Navigate replace to="/" />} />
          {/* <Route path="/" element={<Main />} /> */}
          {routes.map(renderRoute)}
          {/* <Route path="*" element={<Navigate replace to="/404" />} /> */}
        </Routes>
      </div>
      <Sidebar isShow={checkedCb} setIsShow={setCheckedCb} />
      <ModalPilihCabang open={openModalPilihCabang} setOpen={setOpenModalPilihCabang} />
    </div>
  );
};

export default AppRouter;
