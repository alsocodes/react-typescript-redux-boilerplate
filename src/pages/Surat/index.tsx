import React, { useEffect, useReducer, useRef, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { listKaryawan } from '../../mock-data/list-karyawan-dummy';
import GridData2 from '../../components/GridData2';
import './styles.css';
import useKeyOrMouseEvent from './useKeyOrMouseEvent';

const colPosInit = { x: 0, y: 0 };
const Surat = (): JSX.Element => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [skip, setSkip] = useState(0);
  const [currentData, setCurrentData] = useState(null);

  const [totalData, setTotalData] = useState(listKaryawan.length);
  const [listData, setListData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    setSkip((page - 1) * perPage);
  }, [page, perPage]);

  useEffect(() => {
    // disini adalah mock search data. nanti fetch ke api
    const filterOrSearched = listKaryawan.filter((item: any, i: number) => {
      if (!item.name.toLowerCase().includes(searchValue) && searchValue !== '') return false;
      return true;
    }, []);

    setTotalData(filterOrSearched.length);

    setListData(
      filterOrSearched.filter((item: any, i: number) => {
        if (i < skip || i >= skip + perPage) return false;
        return true;
      }),
    );
  }, [skip, perPage, searchValue]);

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

  // ----------------------event keyboard---------------------------------
  const gridDataRef = useRef<HTMLDivElement>(null);
  const reducer = (state: any, action: any) => {
    // console.log('isLabel', isLabel, action.type);
    const lenX = cols.length - 1;
    const lenY = listData.length - 1;
    const x = state.x;
    const y = state.y;

    if (action.type === 'ArrowUp') {
      return { ...state, y: y > 0 ? y - 1 : 0 };
    }
    if (action.type === 'ArrowDown') {
      return { ...state, y: y < lenY ? y + 1 : lenY };
    }
    if (action.type === 'ArrowRight') {
      const px = x < lenX ? x + 1 : y < lenY ? 0 : x;
      const py = x === lenX && y < lenY ? y + 1 : y;
      return { ...state, x: px, y: py };
    }
    if (action.type === 'ArrowLeft') {
      const px = x > 0 ? x - 1 : y > 0 ? lenX : x;
      const py = x === 0 && y > 0 ? y - 1 : y;
      return { ...state, x: px, y: py };
    }

    if (action.type === 'dblclick') {
      return {
        ...state,
        x: action.x,
        y: action.y,
      };
    }

    throw new Error();
  };

  const [position, setPosition] = useReducer(reducer, colPosInit);
  const arrowUpPressed = useKeyOrMouseEvent('ArrowUp', gridDataRef);
  const arrowDownPressed = useKeyOrMouseEvent('ArrowDown', gridDataRef);
  const arrowLeftPressed = useKeyOrMouseEvent('ArrowLeft', gridDataRef);
  const arrowRightPressed = useKeyOrMouseEvent('ArrowRight', gridDataRef);
  const enterPressed = useKeyOrMouseEvent('Enter', gridDataRef);

  const onEnterOrDblClick = (x: number, y: number) => {
    setCurrentData(listData[y]);
  };

  useEffect(() => {
    if (arrowUpPressed) setPosition({ type: 'ArrowUp' });
  }, [arrowUpPressed]);

  useEffect(() => {
    if (arrowDownPressed) setPosition({ type: 'ArrowDown' });
  }, [arrowDownPressed]);

  useEffect(() => {
    if (arrowLeftPressed) setPosition({ type: 'ArrowLeft' });
  }, [arrowLeftPressed]);

  useEffect(() => {
    if (arrowRightPressed) setPosition({ type: 'ArrowRight' });
  }, [arrowRightPressed]);

  useEffect(() => {
    if (enterPressed) onEnterOrDblClick(position.x, position.y);
  }, [enterPressed]);

  useEffect(() => {
    if (gridDataRef.current === null) return;
    const el = gridDataRef.current;
    const handleDblClick = (e: MouseEvent) => {
      el.focus();
      if (e.target !== null) {
        if (e.target.classList.contains('dg-body-col')) {
          const y = parseInt(e.target.parentNode.getAttribute('pos-y'));
          const x = parseInt(e.target.getAttribute('pos-x'));
          setPosition({ type: 'dblclick', x: x, y: y });
          onEnterOrDblClick(x, y);
        }
      }
    };

    el.addEventListener('dblclick', handleDblClick);

    return () => {
      el.removeEventListener('click', handleDblClick);
    };
  }, [gridDataRef, listData]);

  return (
    <div className="p-4">
      <div className="flex">
        <div className="w-8/12 relative" style={{ height: 'calc(100vh -100px)' }}>
          <div className="form-area h-4/6 px-2 pt-2 w-full">
            <div className="h-full w-full border border-primary rounded-box">{JSON.stringify(currentData)}</div>
          </div>
          <div className="data-area h-2/6 px-2 pt-2 w-full">
            <div className="w-full h-full border bg-gray-100 border-gray-300 p-2 rounded-md">
              <div className="flex gap-2 mb-2">
                <div className="w-4/12">
                  <div className="form-control w-full">
                    <div className="relative">
                      <IoSearch className="absolute z-10 ml-2 my-3 -top-1" />
                      <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} type="text" placeholder="Pencarian" className="input w-full input-sm pl-8 border border-gray-300" />
                    </div>
                  </div>
                </div>
                <div className="w-4/12">
                  <div className="w-full flex gap-2 items-center">
                    <div className="form-control w-2/4">
                      <input name="date_start" type="date" placeholder="DD/MM/YYYY" className="input w-full input-sm border border-gray-300" />
                    </div>
                    <div>-</div>
                    <div className="form-control w-2/4">
                      <input name="date_end" type="date" placeholder="DD/MM/YYYY" className="input w-full input-sm border border-gray-300" />
                    </div>
                  </div>
                </div>
                <div className="w-4/12">
                  <div className="flex justify-end">
                    <button className="btn btn-primary btn-sm">Tambah</button>
                  </div>
                </div>
              </div>
              <div tabIndex={0} ref={gridDataRef} className="grid-data-ref overflow-hidden text-sm2 gray-500 border" style={{ height: 'calc(100% - 40px)' }}>
                <GridData2 data={listData} cols={cols} page={page} perPage={perPage} skip={skip} totalData={totalData} setPage={setPage} setPerPage={setPerPage} pos={position} />
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
