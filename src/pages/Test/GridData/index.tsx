import React, { useState } from 'react';

const data1: any = [
  { no: 1, name: 'Bintang Dimas', address: 'Jl Siwalankerto Surabaya' },
  { no: 2, name: 'Aris Nur Cahyono', address: 'Jl Rungkut Asri Surabaya' },
  { no: 3, name: 'Daniel Glorio Rio', address: 'Jl Menganti Bukan Surabaya' },
  { no: 4, name: 'Ali Shodikin', address: 'Jl Semolowaru Utara I 80' },
  { no: 5, name: 'Jeremi Yonatan', address: 'Jl IR Soekarno Hatta 124 AB' },
];
const GridData = (): JSX.Element => {
  const [gdData, setGdData] = useState([...data1]);
  const gdCols: any = [
    { name: 'no', label: 'Nomor', width: '100px' },
    { name: 'name', label: 'Nama' },
    { name: 'address', label: 'Alamat' },
  ];

  const textSize = 'text-sm leading-5';
  const paddingHeader = 'py-1 px-2';
  const paddingBody = 'py-1 px-1';
  const stripe = true;
  const headerRound = true;

  return (
    <div>
      <table
        className={`${textSize} font-normal w-full border-collapse text-base-content`}>
        <thead>
          <tr>
            {gdCols.map((item: any, i: number) => {
              const first = i === 0;
              const last = i === gdCols.length - 1;
              return (
                <th
                  className={`text-left font-semibold text-base-content  border-b border-gray-300 box-border border-collapse 
                  ${paddingHeader} bg-gray-200 
                  ${first && 'rounded-tl-md'} ${last && 'rounded-tr-md'}`}
                  key={`th-${i}`}>
                  {item.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {gdData.map((item: any, i: number) => {
            return (
              <tr
                key={`tr-${i}`}
                className={`${
                  i % 2 !== 0 && stripe && 'bg-gray-100'
                } hover:bg-gray-200 cursor-pointer`}>
                {gdCols.map((col: any, c: number) => {
                  return (
                    <td
                      className={`text-left border-b box-border border-collapse ${paddingBody}`}
                      key={`td-${c}`}>
                      {item[col.name]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

  // return (
  //   <div>
  //     <div className={`grid-data table w-full border border-red-600 ${textSize}`}>
  //       <div className="grid-data-header w-full">
  //         <div className="grid-data-row inline-table w-full">
  //           {gdCols.map((item: any, i: number) => {
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
  //               {gdCols.map((col: any, x: number) => {
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
  //           {gdCols.map((item: any, i: number) => {
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
