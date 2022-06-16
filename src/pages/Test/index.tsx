import React from 'react';
import GridData from './GridData';

const Test = (): JSX.Element => {
  return (
    <div className="py-4 px-8">
      <div
        className="mockup-window border bg-base-200 w-3/4 p-4"
        style={{ height: 'calc(100vh - 100px)' }}>
        {/* <div className="flex justify-center px-4 py-16 bg-base-200">Hello!</div> */}
        <GridData />
      </div>
    </div>
  );
};

export default Test;
