import React from 'react';
import { IoSearch, IoCalendar } from 'react-icons/io5';
import { tableDummies } from '../../mock-data/list-table-dummy';

const Surat = (): JSX.Element => {
  return (
    <div className="p-4">
      <div className="flex">
        <div className="w-8/12" style={{ height: 'calc(100vh -100px)' }}>
          <div className="h-4/6 px-2 pt-2 w-full">
            <div className="h-full w-full border border-green-500">a</div>
          </div>
          <div className="h-2/6 px-2 pt-2 w-full">
            <div className="w-full h-full border bg-gray-100 border-gray-300 p-2 rounded-md">
              <div className="flex gap-8 mb-2">
                <div className="w-1/4">
                  <div className="form-control w-full">
                    <div className="relative">
                      <IoSearch className="absolute z-10 ml-2 my-3 -top-1" />
                      <input
                        type="text"
                        placeholder="Pencarian"
                        className="input w-full input-sm pl-8"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-1/4">
                  <div className="w-full flex gap-2 items-center">
                    <div>
                      <IoCalendar />
                    </div>
                    <div className="form-control">
                      <input
                        type="date"
                        placeholder="DD/MM/YYYY"
                        className="input w-full input-sm"
                      />
                    </div>
                    <div>-</div>
                    <div className="form-control">
                      <input
                        type="date"
                        placeholder="DD/MM/YYYY"
                        className="input w-full input-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-2/4">
                  <div className="flex justify-end">
                    <button className="btn btn-primary btn-sm">Tambah</button>
                  </div>
                </div>
              </div>
              <TableData />
            </div>
          </div>
        </div>
        <div className="w-4/12 px-2">
          <h5 className="text-md font-semibold mb-2">Preview</h5>
          <div className="box-scrolling pr-2" style={{ height: 'calc(100vh - 100px)' }}>
            <div className="w-full bg-gray-50 rounded-md border border-gray-100 h-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TableData = () => {
  return (
    <div className="w-full border">
      <table className="table-auto-sm w-full">
        <thead>
          <tr>
            <th>Judul</th>
            <th>Keterangan</th>
            <th>Jumlah</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {tableDummies?.map((item, i) => {
            return (
              <tr key={`row-${i}`} className="hover cursor-pointer">
                <td style={{width:"50%"}}><div className="td-truncate">{item[0]}</div></td>
                <td style={{width:"40%"}}><div className="td-truncate">{item[1]}</div></td>
                <td width={'20px'}><div className="td-truncate">{item[2]}</div></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Surat;
