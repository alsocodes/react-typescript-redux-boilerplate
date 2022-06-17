import React, { useEffect, useState } from 'react';
import { IoSearch, IoCalendar } from 'react-icons/io5';
import { listKaryawan } from '../../mock-data/list-karyawan-dummy';
import { tableDummies } from '../../mock-data/list-table-dummy';
import GridData from '../../components/GridData';
import CustomScrollbar from '../../components/CustomScrollbar';
import GridData2 from '../../components/GridData2';

const Surat = (): JSX.Element => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [skip, setSkip] = useState(0);

  const [totalData, setTotalData] = useState(listKaryawan.length);
  const [listData, setListData] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setSkip((page - 1) * perPage);
  }, [page, perPage]);

  useEffect(() => {
    // disini adalah mock search data. nanti fetch ke api
    const filterOrSearched = listKaryawan.filter((item: any, i: number) => {
      if (!item.name.toLowerCase().includes(searchValue) && searchValue !== '')
        return false;
      return true;
    }, []);

    setTotalData(filterOrSearched.length);

    setListData(
      filterOrSearched.filter((item: any, i: number) => {
        if (!item.name.toLowerCase().includes(searchValue) && searchValue !== '')
          return false;
        if (i < skip && i >= skip + perPage) return false;
        // i >= skip && i < skip + perPage

        return true;
      }),
    );
  }, [skip, perPage, searchValue]);

  useEffect(() => {
    // console.log('listData', listData);
  }, [listData]);

  const cols: any = [
    {
      name: 'no',
      label: 'No',
      width: 50,
      render: (item: any, i: number) => {
        return skip + i + 1;
      },
    },
    { name: 'id', label: 'UserID', width: 90 },
    { name: 'name', label: 'Nama' },
    { name: 'address', label: 'Alamat' },
  ];

  const [searchInput, setSearchInput] = useState(searchValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setPage(1);
      setSearchValue(searchInput);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchInput]);

  return (
    <div className="p-4">
      <div className="flex">
        <div className="w-8/12 relative" style={{ height: 'calc(100vh -100px)' }}>
          <div className="form-area h-4/6 px-2 pt-2 w-full">
            <div className="h-full w-full border border-green-500">a</div>
          </div>
          <div className="data-area h-2/6 px-2 pt-2 w-full">
            <div className="w-full h-full border bg-gray-100 border-gray-300 p-2 rounded-md">
              <div className="flex gap-2 mb-2">
                <div className="w-4/12">
                  <div className="form-control w-full">
                    <div className="relative">
                      <IoSearch className="absolute z-10 ml-2 my-3 -top-1" />
                      <input
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        type="text"
                        placeholder="Pencarian"
                        className="input w-full input-sm pl-8 border border-gray-300"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-4/12">
                  <div className="w-full flex gap-2 items-center">
                    <div className="form-control w-2/4">
                      <input
                        name="date_start"
                        type="date"
                        placeholder="DD/MM/YYYY"
                        className="input w-full input-sm border border-gray-300"
                      />
                    </div>
                    <div>-</div>
                    <div className="form-control w-2/4">
                      <input
                        name="date_end"
                        type="date"
                        placeholder="DD/MM/YYYY"
                        className="input w-full input-sm border border-gray-300"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-4/12">
                  <div className="flex justify-end">
                    <button className="btn btn-primary btn-sm">Tambah</button>
                  </div>
                </div>
              </div>
              <div
                className="overflow-hidden text-sm border-0 border-purple-900"
                style={{ height: 'calc(100% - 40px)' }}>
                <GridData2
                  data={listData}
                  cols={cols}
                  page={page}
                  perPage={perPage}
                  skip={skip}
                  totalData={totalData}
                  setPage={setPage}
                  setPerPage={setPerPage}
                />
              </div>
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

export default Surat;
