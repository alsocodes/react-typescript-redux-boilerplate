import React, { useState } from 'react';

const Main = (): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(true);
  const toggleVisible = () => {
    setVisible(!visible);
  };

  const cabangs = [
    { id: 'SB01', name: 'Karang Asem' },
    { id: 'SB02', name: 'Klinik Kayun' },
    { id: 'SB03', name: 'Klinik Beverly' },
  ];

  return (
    <div className="p-4">
      <h2>Hello wolrd</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae suscipit sequi
        quos a ipsa voluptate sint repellendus voluptatum molestias doloremque. Laborum
        sit illum velit odit. Error nobis culpa sint accusamus!
      </p>

      <label htmlFor="my-modal-5" className="btn modal-button">
        open modal
      </label>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal modal-open">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg mb-2">
            Congratulations random Interner user!
          </h3>
          <hr className="mb-2" />
          <div className="grid grid-cols-3 gap-2">
            {cabangs.map((item) => {
              return (
                <div key={item.id} className="card card-compact bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">{item.name}</h2>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="modal-action">
            {/* <label htmlFor="my-modal-5" className="btn">
              Yay!
            </label> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
