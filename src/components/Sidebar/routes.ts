import React, { FC } from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { IconType } from 'react-icons';
import Main from '../../pages/Main';
import Surat from '../../pages/Surat';

export interface RouteInterface {
  title: string;
  element: FC;
  access: string;
  path: string;
  icon: IconType;
  childs?: RouteInterface[];
}
export const routes: RouteInterface[] = [
  {
    title: 'Dashboard',
    element: Main,
    access: 'client_dashboard',
    path: '/',
    icon: IoHomeOutline,
  },
  {
    title: 'Surat Permohonan',
    element: Surat,
    access: 'surat_permohonan',
    path: '/',
    icon: IoHomeOutline,
  },
  {
    title: 'Surat Kuasa',
    element: Surat,
    access: 'surat_kuasa',
    path: '/',
    icon: IoHomeOutline,
  },
  {
    title: 'Surat Penawaran',
    element: Surat,
    access: 'surat_penawaran',
    path: '/',
    icon: IoHomeOutline,
  },
  {
    title: 'Surat Peringatan',
    element: Surat,
    access: 'surat_peringatan',
    path: '/',
    icon: IoHomeOutline,
  },
  {
    title: 'Internal Memo',
    element: Surat,
    access: 'internal_memo',
    path: '/',
    icon: IoHomeOutline,
  },
];
