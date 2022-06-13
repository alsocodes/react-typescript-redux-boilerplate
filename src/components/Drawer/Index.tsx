import React from 'react';
import Navbar from '../Navbar/Index';
import Sidebar from '../Sidebar/Index';
const Drawer = (): JSX.Element => {
  return (
    <div className="drawer min-h-screen">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Navbar />
        <div className="p-4">
          <h2>Hello wolrd</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae suscipit
            sequi quos a ipsa voluptate sint repellendus voluptatum molestias doloremque.
            Laborum sit illum velit odit. Error nobis culpa sint accusamus!
          </p>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Drawer;
