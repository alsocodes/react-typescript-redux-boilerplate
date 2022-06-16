import React from 'react';
import { IoCalendarOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const CardSurat = (): JSX.Element => {
  return (
    <div className="card card-compact w-full bg-gray-50 shadow-md cursor-pointer hover:bg-gray-300 mb-3">
      <div className="card-body bordered border-gray-300 p-4 relative">
        <div className="flex justify-between text-xs">
          <span>SB1/SPH/2206/0001</span>
          <span className="flex items-center justify-end">
            <IoCalendarOutline />
            &nbsp;&nbsp; 12 Juni 2022
          </span>
        </div>
        <p className="text-sm font-semibold mb-2">Surat Permohonan</p>
        <p className="text-sm">Kepada : Ibu Wihandani</p>
        <p className="text-sm">Pembuat : Johanes</p>
      </div>
    </div>
  );
};

const Main = (): JSX.Element => {
  const navigate = useNavigate();
  const gocabang = () => {
    navigate('/master/cabang', { replace: false, state: { data: 'satu' } });
  };
  return (
    <div className="p-4">
      <div className="flex gap-4">
        <div className="sm:w-full md:w-1/5 px-2">
          <h5 className="text-md font-semibold mb-2">Notifikasi</h5>
          <div className="box-scrolling pr-2" style={{ height: 'calc(100vh - 100px)' }}>
            <div className="card card-compact w-full bg-gray-100 shadow-md cursor-pointer hover:bg-gray-300 mb-6">
              <div className="card-body bordered border-gray-300 p-4">
                <h2 className="card-title">3</h2>
                <p className="text-sm font-semibold">Surat telah dibaca</p>
              </div>
            </div>
            <div className="card card-compact w-full bg-gray-100 shadow-md cursor-pointer hover:bg-gray-300 mb-6 overflow-visible">
              <div className="card-body bordered border-gray-300 p-4 relative">
                <span className="absolute -right-2 -top-2 btn btn-sm btn-circle bg-red-400 border-0"></span>
                <h2 className="card-title">6</h2>
                <p className="text-sm font-semibold">Surat belum dibaca</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:w-full md:w-2/5 px-2">
          <h5 className="text-md font-semibold mb-2">Surat Terbaru</h5>
          <div className="box-scrolling pr-2" style={{ height: 'calc(100vh - 100px)' }}>
            <CardSurat />
            <CardSurat />
            <CardSurat />
            <CardSurat />
            <CardSurat />
          </div>
        </div>
        <div className="sm:w-full md:w-2/5 px-2">
          <h5 className="text-md font-semibold mb-2">Preview</h5>
          <div className="box-scrolling pr-2" style={{ height: 'calc(100vh - 100px)' }}>
            <div className="w-full bg-gray-50 rounded-md border border-gray-100 h-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
