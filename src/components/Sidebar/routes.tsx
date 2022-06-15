import React, { FC } from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { IconType } from 'react-icons';
import Main from '../../pages/Main';
import Surat from '../../pages/Surat';
import MasterCabang from '../../pages/Master/Cabang';

export interface RouteInterface {
  name: string;
  title: string;
  type?: string;
  label?: string;
  element?: any;
  access: string;
  path: string;
  icon: IconType;
  childs?: RouteInterface[];
}

export const routes: RouteInterface[] = [
  {
    name: 'dashboard',
    title: 'Dashboard',
    element: <Main />,
    access: 'client_dashboard',
    path: '/',
    icon: IoHomeOutline,
  },
  {
    name: 'label',
    title: 'Master Data',
    element: <MasterCabang />,
    access: 'master_data',
    path: '',
    icon: IoHomeOutline,
  },
  {
    name: 'master_cabang',
    title: 'Cabang',
    element: <MasterCabang />,
    access: 'master_cabang',
    path: '/master/cabang',
    icon: IoHomeOutline,
  },
  {
    name: 'master_user',
    title: 'User',
    element: <MasterCabang />,
    access: 'master_user',
    path: '/master/user',
    icon: IoHomeOutline,
  },
  {
    name: 'master_access',
    title: 'Hak Akses',
    element: <MasterCabang />,
    access: 'master_access',
    path: '/master/access',
    icon: IoHomeOutline,
  },
  {
    name: 'label',
    title: 'Surat',
    element: <Surat />,
    access: 'surat',
    path: '',
    icon: IoHomeOutline,
  },
  {
    name: 'surat_permohonan',
    title: 'Surat Permohonan',
    element: <Surat />,
    access: 'surat_permohonan',
    path: '/surat/permohonan',
    icon: IoHomeOutline,
    // childs: [
    //   {
    //     name: 'master_data_user',
    //     title: 'User',
    //     element: Surat,
    //     access: 'master_data_user',
    //     path: '/master-data/user',
    //     icon: IoHomeOutline,
    //   },
    // ],
  },
  {
    name: 'surat_kuasa',
    title: 'Surat Kuasa',
    element: <Surat />,
    access: 'surat_kuasa',
    path: '/surat/kuasa',
    icon: IoHomeOutline,
  },
  {
    name: 'surat_penawaran',
    title: 'Surat Penawaran',
    element: <Surat />,
    access: 'surat_penawaran',
    path: '/surat?type=penawaran',
    icon: IoHomeOutline,
  },
  {
    name: 'surat_peringatan',
    title: 'Surat Peringatan',
    element: <Surat />,
    access: 'surat_peringatan',
    path: '/surat?type=peringatan',
    icon: IoHomeOutline,
  },
  {
    name: 'internal_memo',
    title: 'Internal Memo',
    element: <Surat />,
    access: 'internal_memo',
    path: '/internal-memo',
    icon: IoHomeOutline,
  },
];
