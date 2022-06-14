import React, { useState } from 'react';

const Main = (): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(true);
  const toggleVisible = () => {
    setVisible(!visible);
  };

  const cabangs = [
    { id: 'SB01', name: 'Karang Asem', address: 'Jl. Karang Asem IV 34A' },
    { id: 'SB02', name: 'Klinik Kayoon', address: 'Jl. Kayoon 11 D Surabaya' },
    { id: 'SB03', name: 'Klinik Beverly', address: 'Jl. HR Mohammad Surabaya' },
    { id: 'JK01', name: 'Klinik PIK', address: 'Jl. Medan Merdeka Selatan I 12' },
    {
      id: 'JK02',
      name: 'Klinik Jaksel',
      address: 'Jl. Panglima Sudirman SCBD Tower 1 Lt 2',
    },
    { id: 'MD01', name: 'Klinik Medan', address: 'Jl. Kenganan Bersama mu' },
    { id: 'BT01', name: 'Klinik BATAM', address: 'Jl. Medan Merdeka Selatan I 12' },
    { id: 'BP01', name: 'Klinik Balikpapan', address: 'Jl. Panglima Sudirman SCB' },
    { id: 'MG01', name: 'Klinik Menganti', address: 'Jl. Menganti jodoh datang 2' },
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
          <h2 className="font-bold text-lg mb-2">Pilih Cabang</h2>
          {/* <hr className="mb-2" /> */}
          <div className="grid grid-cols-3 gap-4">
            {cabangs.map((item) => {
              return (
                <div
                  key={item.id}
                  className="card card-compact bg-base-100 shadow-xl cursor-pointer hover:bg-gray-300">
                  <div className="card-body">
                    <h2 className="card-title">{item.name}</h2>
                    <p className="truncate">{item.address}</p>
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
