import React, { FC, useEffect, useRef, useState } from 'react';
import CustomScrollbar from '../CustomScrollbar';
import './styles.css';

// const data1: any = [
//   { no: 1, name: 'Bintang Dimas', address: 'Jl Siwalankerto Surabaya' },
//   { no: 2, name: 'Aris Nur Cahyono', address: 'Jl Rungkut Asri Surabaya' },
//   { no: 3, name: 'Daniel Glorio Rio', address: 'Jl Menganti Bukan Surabaya' },
//   { no: 4, name: 'Ali Shodikin', address: 'Jl Semolowaru Utara I 80' },
//   { no: 5, name: 'Jeremi Yonatan', address: 'Jl IR Soekarno Hatta 124 AB' },
//   { no: 6, name: 'Bintang Dimas', address: 'Jl Siwalankerto Surabaya' },
//   { no: 7, name: 'Aris Nur Cahyono', address: 'Jl Rungkut Asri Surabaya' },
//   { no: 8, name: 'Daniel Glorio Rio', address: 'Jl Menganti Bukan Surabaya' },
//   { no: 9, name: 'Ali Shodikin', address: 'Jl Semolowaru Utara I 80' },
//   { no: 10, name: 'Jeremi Yonatan', address: 'Jl IR Soekarno Hatta 124 AB' },
// ];

type Props = {
  data: any[];
  cols: any[];
  pdHeader?: string;
  pdBody?: string;
  isStripe?: boolean;
  isFooter?: boolean;
};
const GridData: FC<Props> = ({
  data,
  cols,
  pdHeader,
  pdBody,
  isStripe,
  isFooter,
}): JSX.Element => {
  const [gdData, setGdData] = useState([...data]);

  const textSize = 'text-sm leading-5';
  const paddingHeader = pdHeader || 'py-1 px-2';
  const paddingBody = pdBody || 'py-1 px-2';
  const stripe = isStripe || true;
  const showFooter = isFooter || false;

  const gridDataRef = useRef<HTMLDivElement>(null);
  const [gridDataWidth, setGridDataWidth] = useState(0);

  useEffect(() => {
    if (gridDataRef.current) setGridDataWidth(gridDataRef.current.offsetWidth);
  }, [gridDataRef]);

  const usedWidth = cols
    .filter((item: any) => item.width !== undefined, [])
    .reduce((t: number, item: any) => t + item.width, 0);

  const [autoWidth, setAutoWidth] = useState(0);

  useEffect(() => {
    const unUsedWidth = cols.filter((item: any) => item.width === undefined, []).length;
    if (gridDataWidth > 0 && unUsedWidth > 0) {
      setAutoWidth((gridDataWidth - usedWidth) / unUsedWidth);
    }
  }, [gridDataWidth]);

  return (
    <div
      className="overflow-hidden border border-gray-300 h-full grid-data-wrapper bg-gray-300"
      ref={gridDataRef}>
      <table
        className={`${textSize} font-normal w-full border-collapse text-base-content grid-data`}>
        <thead>
          <tr>
            {cols.map((item: any, i: number) => {
              const first = i === 0;
              const last = i === cols.length - 1;
              const { width, label } = item;
              return (
                <th
                  style={{ width: width > 0 ? width : autoWidth }}
                  className={`text-left font-semibold text-base-content  border-b border-gray-300 box-border border-collapse 
                  ${paddingHeader} bg-gray-300`}
                  key={`th-${i}`}>
                  {label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="">
          {/* <div className="scroll-thumb"></div> */}
          <CustomScrollbar>
            {gdData.map((item: any, i: number) => {
              return (
                <tr
                  key={`tr-${i}`}
                  className={`${
                    i % 2 !== 0 && stripe ? 'bg-gray-100' : 'bg-white'
                  } hover:bg-gray-200 cursor-pointer`}>
                  {cols.map((col: any, c: number) => {
                    const { width, name } = col;
                    return (
                      <td
                        style={{ width: width > 0 ? width : autoWidth }}
                        className={`text-left border-b box-border border-collapse ${paddingBody}`}
                        key={`td-${c}`}>
                        {item[name]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </CustomScrollbar>
        </tbody>
        {showFooter && (
          <tfoot>
            <tr>
              {cols.map((item: any, i: number) => {
                const first = i === 0;
                const last = i === cols.length - 1;
                const { width, label } = item;
                return (
                  <th
                    style={{ width: width > 0 ? width : autoWidth }}
                    className={`text-left font-semibold text-base-content  border-t border-gray-300 box-border border-collapse 
                  ${paddingHeader} bg-gray-300 `}
                    key={`th-${i}`}>
                    {label}
                  </th>
                );
              })}
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );

  // return (
  //   <div>
  //     <div className={`grid-data table w-full border border-red-600 ${textSize}`}>
  //       <div className="grid-data-header w-full">
  //         <div className="grid-data-row inline-table w-full">
  //           {cols.map((item: any, i: number) => {
  //             return (
  //               <div
  //                 key={`grid-data-colh-${i}`}
  //                 className={`grid-data-col-h table-cell ${py} ${px} box-border border-collapse border border-gray-300`}
  //                 style={{ width: item.width ? item.width : 'auto' }}>
  //                 {item.label}
  //               </div>
  //             );
  //           })}
  //         </div>
  //       </div>
  //       <div className="grid-data-body w-full">
  //         {gdData.map((item, i) => {
  //           return (
  //             <div
  //               key={`grid-data-row-${i}`}
  //               className="grid-data-row w-full inline-table">
  //               {cols.map((col: any, x: number) => {
  //                 return (
  //                   <div
  //                     key={`grid-data-col-${x}-${col.name}`}
  //                     className="grid-data-col table-cell ${py} ${px} box-border border-collapse border border-gray-300"
  //                     style={{ width: item.width ? item.width : 'auto' }}>
  //                     {item[col.name]}
  //                   </div>
  //                 );
  //               })}
  //             </div>
  //           );
  //         })}
  //       </div>
  //       <div className="grid-data-footer">
  //         <div className="grid-data-row">
  //           {cols.map((item: any, i: number) => {
  //             return (
  //               <div key={`grid-data-colh-${i}`} className="grid-data-col-h">
  //                 {item.label}
  //               </div>
  //             );
  //           })}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default GridData;
