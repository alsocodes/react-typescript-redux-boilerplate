import React, { ForwardedRef, HTMLProps, useEffect, useRef, useState } from 'react';
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

// type Props = {
//   ref: HTMLProps<HTMLDivElement>
// }
// const OutsideClick: React.ForwardedRef<Props> = (ref) => {
//    const [isClicked, setIsClicked] = useState();
//    useEffect(() => {
//      function handleClickOutside(event : KeyboardEvent) {
//        if (ref.current !== null && !ref.current.contains(event.target)) {
//          setIsClicked(true);
//        } else {
//          setIsClicked(false);
//        }
//      }

//      document.addEventListener('mousedown', handleClickOutside);
//      return () => {
//        document.removeEventListener('mousedown', handleClickOutside);
//      };
//    }, [ref]);
//    return isClicked;
//  }

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

  useHotkeys(
    'alt+s',
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('alt+s');
      setCheckedCb((checkedCb) => !checkedCb);
    },
    { enableOnTags: ['TEXTAREA', 'INPUT'] },
  );

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
            id="my-drawer"
            type="checkbox"
            className="drawer-toggle"
            checked={checkedCb}
            onChange={(e) => setCheckedCb(e.target.checked)}
          />
          <div className="drawer-content">
            <Navbar setModalCabangOpen={setter} setCheckedCb={setCheckedCb} />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
          </div>
          <Sidebar isShow={checkedCb} setIsShow={setCheckedCb} />
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
