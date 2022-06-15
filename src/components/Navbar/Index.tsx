import React, { FC } from 'react';
import { IoLocation } from 'react-icons/io5';
import { useTypedSelector } from '../../hooks/UseTypeSelector';

type Props = {
  setModalCabangOpen(bool: boolean): void;
  setCheckedCb(boolean: boolean): void;
};

const Navbar: FC<Props> = ({ setModalCabangOpen, setCheckedCb }): JSX.Element => {
  const { cabangSelected } = useTypedSelector((state) => state.appConfig);
  const { data } = useTypedSelector((state) => state.auth);

  return (
    <div className="navbar bg-base-100 border-b">
      <div className="flex-none">
        <label
          // htmlFor="my-drawer"
          onClick={() => setCheckedCb(true)}
          className="btn btn-sm btn-square btn-ghost drawer-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          {/* </button> */}
        </label>
      </div>
      <div className="flex-1">
        <div className="z-20 bg-base bg-opacity-90 backdrop-blur sticky top-0 items-center">
          <a
            href="/"
            aria-current="page"
            aria-label="Homepage"
            className="flex-0 btn btn-sm btn-ghost px-2">
            <div className="font-title text-primary inline-flex text-base transition-all duration-200 md:text-xl">
              {/* <span className="lowercase">Internal</span>{' '} */}
              <span className="text-base-content">Internal Memo</span>
            </div>
          </a>{' '}
          <a
            href="/docs/changelog"
            className="link link-hover font-mono text-xs text-opacity-50">
            <div data-tip="Changelog" className="tooltip tooltip-bottom">
              {/* 2.15.3 */}
            </div>
          </a>
        </div>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            className="flex items-center justify-center btn btn-sm btn-ghost"
            tabIndex={0}>
            <label className="">
              <div className="rounded-full inline-flex text-xl">
                <IoLocation />
                {/* <img src="https://api.lorem.space/image/face?hash=33791" /> */}
              </div>
            </label>
            <span className="inline-flex text-sm ml-2 capitalize">{`${
              cabangSelected && `${cabangSelected.id}-${cabangSelected.name}`
            }`}</span>
          </div>

          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a onClick={() => setModalCabangOpen(true)}>Ubah Cabang</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <div className="flex items-center btn btn-sm btn-ghost" tabIndex={0}>
            <label className="avatar">
              <div className="w-6 h-6 rounded-full inline-flex">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </label>
            <span className="inline-flex text-sm ml-2 capitalize">{data?.name}</span>
          </div>

          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        {/* <button className="btn btn-sm btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
          </svg>
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;
