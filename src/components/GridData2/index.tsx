import React, { FC, useEffect, useRef, useState } from 'react';
import CustomScrollbar from '../CustomScrollbar';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';
import './styles.css';

type Props = {
  pdHeader?: string;
  pdBody?: string;
  isStripe?: boolean;
  isFooter?: boolean;
  data: any[];
  cols: any[];
  page: number;
  perPage: number;
  skip: number;
  totalData: number;
  setPage(number: number): void;
  setPerPage(number: number): void;
  pos: any;
};
const GridData2: FC<Props> = ({ pdHeader, pdBody, isStripe, isFooter, data: gdData, cols, page, perPage, skip, totalData, setPage, setPerPage, pos }): JSX.Element => {
  const totalPage = Math.ceil(totalData / perPage);
  const gridDataRef = useRef<HTMLDivElement>(null);
  const [gridDataWidth, setGridDataWidth] = useState(0);

  useEffect(() => {
    if (gridDataRef.current) setGridDataWidth(gridDataRef.current.offsetWidth);
  }, [gridDataRef]);

  const usedWidth = cols.filter((item: any) => item.width !== undefined, []).reduce((t: number, item: any) => t + item.width, 0);

  const [autoWidth, setAutoWidth] = useState(0);

  useEffect(() => {
    const unUsedWidth = cols.filter((item: any) => item.width === undefined, []).length;
    if (gridDataWidth > 0 && unUsedWidth > 0) {
      setAutoWidth((gridDataWidth - usedWidth) / unUsedWidth);
    }
  }, [gridDataWidth]);

  const [tCols, setTCols] = useState([...cols]);
  useEffect(() => {
    setTCols(
      cols.map((item: any, i: number) => {
        const width = item.width !== undefined ? item.width : autoWidth;
        // console.log(item.width, autoWidth);
        const left = cols.filter((f: any, x: number) => x < i, []).reduce((t: number, r: any) => t + (r.width !== undefined ? r.width : autoWidth), 0);
        return {
          ...item,
          width: width,
          left: left,
        };
      }),
    );
  }, [autoWidth]);

  const onPageChange = (p: number) => setPage(p < 1 ? 1 : p > totalPage ? totalPage : p);
  const disablePrev = page === 1;
  const disableNext = page === totalPage;
  return (
    <div className="dg border border-gray-300" ref={gridDataRef}>
      <div className="dg-head">
        <div className="dg-header-row">
          {tCols?.map((item: any, i: number) => {
            const { width, label, left } = item;
            return (
              <div style={{ width: width, left: left }} key={label} className={`${'dg-header-col px-2 border-b border-gray-300'}`}>
                {label}
              </div>
            );
          })}
        </div>
      </div>
      <div className="dg-body text-sm">
        <CustomScrollbar>
          {gdData.map((item: any, y: number) => {
            const bg = pos.y === y ? 'bg-gray-400' : y % 2 !== 0 ? 'bg-gray-200' : 'bg-white';
            // const border = pos.x === i ? 'border border-gray-500' : '';
            return (
              <div pos-y={y} key={`row-${y}`} className={`dg-body-row ${bg} hover:bg-gray-400`} id={item.id}>
                {tCols?.map((col: any, x: number) => {
                  const { width, label, left, name, render } = col;
                  const border = pos.y === y && pos.x === x ? 'bg-gray-500 text-white' : '';
                  return (
                    <div pos-x={x} style={{ width: width, left: left }} key={`${label}-${x}`} className={`dg-body-col px-2 border-b border-gray-300 ${border} `}>
                      {render ? render(item, y) : item[name]}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </CustomScrollbar>
      </div>
      <div className="dg-paging py-1 border-t border-gray-300">
        <div className="flex gap-0 px-1">
          <button className={`btn btn-xs btn-ghost border text-gray-600 ${disablePrev && 'btn-disabled'}`} onClick={() => onPageChange(1)}>
            <svg height="24" viewBox="0 0 24 24" width="24" className="fill-current">
              <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path>
            </svg>
          </button>
          <button className={`btn btn-xs btn-ghost border text-gray-600 ${disablePrev && 'btn-disabled'}`} onClick={() => onPageChange(page - 1)}>
            <svg height="24" viewBox="0 0 24 24" width="24" className="fill-current">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
            </svg>
          </button>
          <div className="text-gray-600 panging-text-info px-2">Page</div>
          <div className="form-control">
            <input value={page} min={1} max={10} type="number" onChange={(e) => onPageChange(parseInt(e.target.value))} className="bg-white input-number border border-gray-400 p-1 text-xs" />
          </div>
          <div className="text-gray-600 panging-text-info px-1">of {totalPage}</div>
          <button className={`btn btn-xs btn-ghost border text-gray-600 ${disableNext && 'btn-disabled'}`} onClick={() => onPageChange(page + 1)}>
            <svg height="24" viewBox="0 0 24 24" width="24" className="fill-current">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
            </svg>
          </button>
          <button className={`btn btn-xs btn-ghost border text-gray-600 ${disableNext && 'btn-disabled'}`} onClick={() => onPageChange(totalPage)}>
            <svg height="24" viewBox="0 0 24 24" width="24" className="fill-current">
              <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path>
            </svg>
          </button>
          <div className="border-r border-gray-400 mx-3 my-1"></div>
          <div className="text-gray-600 panging-text-info px-1">Per page</div>
          <div className="form-control">
            <select onChange={(e) => setPerPage(parseInt(e.target.value))} defaultValue={perPage} className="paging-select bg-white border border-gray-400 p-1 text-xs">
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={25}>25</option>
              <option value={30}>30</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
          <div className="border-r border-gray-400 mx-3 my-1"></div>
          <button className="btn btn-xs btn-ghost border text-gray-600">
            <svg height="24" viewBox="0 0 24 24" width="24" className="fill-current">
              <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path>
            </svg>
          </button>
          <div className="text-gray-600 panging-text-info px-1">
            Showing {skip + 1} - {skip + perPage > totalData ? totalData : skip + perPage} of {totalData}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridData2;
