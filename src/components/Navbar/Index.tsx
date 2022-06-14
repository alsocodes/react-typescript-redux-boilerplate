import React from 'react';

const Navbar = (): JSX.Element => {
  return (
    <div className="navbar bg-base-100 border-b">
      <div className="flex-none">
        <label
          htmlFor="my-drawer"
          className="btn btn-sm btn-square btn-ghost drawer-button">
          {/* <button className="btn btn-square btn-ghost"> */}
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
              <span className="lowercase">Internal</span>{' '}
              <span className="text-base-content">Memo</span>
            </div>
          </a>{' '}
          <a
            href="/docs/changelog"
            className="link link-hover font-mono text-xs text-opacity-50">
            <div data-tip="Changelog" className="tooltip tooltip-bottom">
              2.15.3
            </div>
          </a>
        </div>
        {/* <a className="btn btn-ghost normal-case text-xl">helloWORLD</a> */}
      </div>
      <div className="flex-none">
        <button className="btn btn-sm btn-square btn-ghost">
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
        </button>
      </div>
    </div>
  );
};

export default Navbar;
