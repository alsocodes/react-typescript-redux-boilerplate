import React, { useEffect, useRef, useState } from 'react';
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

const AppRouter = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const [openModalPilihCabang, setOpenModalPilihCabang] = useState<boolean>(false);
  const [checkedCb, setCheckedCb] = useState<boolean>(false);
  const {
    loggedIn,
    data: authData,
    persisting,
  } = useTypedSelector((state) => state.auth);

  const cbRef = useRef(null);

  useEffect(() => {
    dispatch(checkAuth());
    dispatch(getAppConfig());
  }, [dispatch]);

  const setter = (v: boolean) => {
    setOpenModalPilihCabang(v);
  };

  // console.log(cbRef.current?.value);
  // useEffect(() => {
  //   console.log(openModalPilihCabang);
  // }, [checkb]);

  useHotkeys('alt+s', () => {
    setCheckedCb(true);
    // cbRef.current.click();
    // document.querySelector('body')?.focus();
    // alert('alt+s');
  });

  return (
    <BrowserRouter>
      {!loggedIn ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
      ) : (
        <div className="drawer">
          <input
            ref={cbRef}
            id="my-drawer"
            type="checkbox"
            className="drawer-toggle"
            defaultChecked={checkedCb}
            onChange={() => setCheckedCb(!checkedCb)}
          />
          <div className="drawer-content">
            <Navbar setModalCabangOpen={setter} />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
          </div>
          <Sidebar />
          <ModalPilihCabang
            open={openModalPilihCabang}
            setOpen={setOpenModalPilihCabang}
          />
        </div>
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

export default AppRouter;
