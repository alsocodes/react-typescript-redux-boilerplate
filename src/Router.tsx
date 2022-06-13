import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import {
  IoHomeOutline,
  IoReaderOutline,
  IoAnalyticsOutline,
  IoCreateOutline,
  IoCartOutline,
  IoPeopleOutline,
  IoSettingsOutline,
  IoPeopleCircleOutline,
} from 'react-icons/io5';

export const routes = [
  {
    title: 'Dashboard',
    // element: <Dashboard />,
    access: 'client_dashboard',
    path: '/',
    icon: IoHomeOutline,
  },
  {
    title: 'Report',
    access: 'view_report',
    path: '/report',
    icon: IoAnalyticsOutline,
    childs: [
      {
        title: 'Sales',
        path: '/sales',
        // element: <Sales />,
        access: 'sales_report',
      },
    ],
  },
];

const Router = (): JSX.Element => {
  // const dispatch = useDispatch();
  // const { persisting, loggedIn, data } = useSelector((state) => state.auth);
  // const { accesses } = data?.user || {};
  // const { title } = useSelector((state) => state.route);

  // useEffect(() => {
  //   dispatch(persistAuth());
  // }, [dispatch]);

  // const renderRoute = useCallback(
  //   (route) => {
  //     if (!accesses?.includes(route.access)) {
  //       return null;
  //     }

  //     if (!route.childs) {
  //       return (
  //         <Route key={`route-${route.title}`} path={route.path} element={route.element} />
  //       );
  //     }

  //     return route.childs.map((child) => {
  //       if (child.access && !accesses?.includes(child.access)) {
  //         return null;
  //       }

  //       return (
  //         <Route
  //           key={`route-${child.title}`}
  //           path={route.path + child.path}
  //           element={child.element}
  //         />
  //       );
  //     });
  //   },
  //   [accesses],
  // );

  // if (persisting) {
  //   return null;
  // }

  return (
    <BrowserRouter>
      {/* {!loggedIn ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
      ) : (
        <Header title={title}>
          <Routes>
            <Route path="*" element={<Navigate replace to="/" />} />
            <Route path="/profile" element={<Profile />} />
            {routes.map(renderRoute)}
          </Routes>
        </Header>
      )} */}
    </BrowserRouter>
  );
};

export default Router;
