import React from 'react';
import { useNavigate } from 'react-router-dom';

const MasterCabang = (): JSX.Element => {
  const navigate = useNavigate();
  const kedepan = () => {
    navigate('/', { replace: false });
  };
  return (
    <div>
      Halaman master Cabang
      <input className="input" />
      <button className="btn btn-sm btn-primary" onClick={() => kedepan()}>
        ke depan
      </button>
    </div>
  );
};

export default MasterCabang;
