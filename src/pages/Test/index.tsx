import React, { useEffect, useRef } from 'react';
import GridData from '../../components/GridData';

const Test = (): JSX.Element => {
  return (
    <div className="py-4 px-8">
      <div
        className="mockup-window border bg-base-200 w-3/4 p-4"
        style={{ height: 'calc(100vh - 100px)' }}>
        {/* <div className="flex justify-center px-4 py-16 bg-base-200">Hello!</div> */}
        <div style={{ height: '200px', overflow: 'hidden', border: ' 0px solid #f00' }}>
          {/* <GridData /> */}
        </div>
      </div>
    </div>
  );
};

export default Test;
