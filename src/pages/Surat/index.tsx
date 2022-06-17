import React, { useState } from 'react';
import { IoSearch, IoCalendar } from 'react-icons/io5';
import { listKaryawan } from '../../mock-data/list-karyawan-dummy';
import { tableDummies } from '../../mock-data/list-table-dummy';
import GridData from '../../components/GridData';
import CustomScrollbar from '../../components/CustomScrollbar';

const Surat = (): JSX.Element => {
  const [listData, setListData] = useState([...listKaryawan]);
  const cols: any = [
    { name: 'no', label: 'No', width: 50 },
    { name: 'name', label: 'Nama' },
    { name: 'address', label: 'Alamat' },
  ];
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
              <div className="overflow-hidden" style={{ height: 'calc(100% - 40px)' }}>
                <GridData data={listData} cols={cols} />
                {/* <CustomScrollbar>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                    tortor neque, vehicula sit amet odio quis, dictum tristique lorem.
                    Phasellus mattis, nibh in volutpat consequat, diam lectus tristique
                    purus, vitae mattis enim metus sed nulla. Sed et risus blandit,
                    posuere arcu eu, bibendum eros. In hac habitasse platea dictumst.
                    Vestibulum id elementum mi, ac bibendum ipsum. Phasellus venenatis
                    enim nec arcu ullamcorper, eu vulputate augue imperdiet. Nulla
                    sagittis egestas mi non mollis. Aenean dapibus in nulla eu elementum.
                    Nam non nisl malesuada, suscipit massa euismod, pretium ligula. Nulla
                    in porta nisi.
                  </p>
                  <p>
                    Fusce sit amet nisi ultricies, varius magna semper, semper mi. Ut
                    faucibus, dolor non rutrum dictum, ipsum urna aliquam augue, non
                    egestas odio mi vitae purus. Etiam volutpat ut magna ut tristique.
                    Vivamus a tempor ex, eu egestas lorem. Nullam pulvinar, sem sit amet
                    scelerisque porttitor, metus elit eleifend libero, vel tincidunt nibh
                    nisi sed eros. Ut quis quam ut nulla commodo commodo. Morbi ac felis
                    id ligula maximus iaculis. Nunc malesuada placerat purus eget
                    consequat.
                  </p>
                  <p>
                    In hac habitasse platea dictumst. Quisque ullamcorper turpis ultrices
                    posuere feugiat. Etiam vehicula orci ac ipsum tincidunt, non ornare
                    leo tristique. Nullam eleifend massa mollis elit consectetur
                    fermentum. In congue efficitur odio, nec imperdiet elit volutpat sed.
                    Mauris congue ut mauris non semper. Duis ultrices elit mauris, eu
                    mollis lacus ullamcorper et. Donec vel libero enim. Sed placerat felis
                    lectus, sit amet posuere libero laoreet sed. Integer vitae luctus
                    magna. Phasellus et diam ipsum. Vestibulum tempor dictum ante, quis
                    varius dolor mattis non. Aliquam tempus, dolor dignissim posuere
                    tincidunt, leo massa pulvinar velit, nec sollicitudin arcu arcu ac
                    nulla. Aenean ipsum felis, iaculis vel libero ac, tincidunt molestie
                    elit. Aliquam eu nunc nunc. Integer at ante a erat tincidunt
                    imperdiet. Morbi augue magna, fermentum id posuere ultrices, venenatis
                    a tortor. Donec vel erat quis nisi vehicula cursus. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Aliquam imperdiet lacinia nibh,
                    ut semper erat vulputate sed. Phasellus mauris felis, ornare sit amet
                    aliquam nec, maximus nec velit. Donec vel mollis magna, id feugiat
                    leo. Nulla interdum interdum est, a maximus dui blandit in. Maecenas
                    et lacus ac justo placerat imperdiet. Cras sit amet sapien ac mi
                    faucibus dignissim id eu libero. Donec porttitor interdum dui quis
                    iaculis. Quisque odio massa, rhoncus sit amet nisl luctus, dictum
                    finibus velit. Sed eu est ac nunc luctus viverra. Nunc placerat
                    scelerisque hendrerit. Sed malesuada mauris orci, convallis gravida
                    felis tempus ut. Sed porttitor risus vel ligula volutpat egestas
                    dictum ut lectus. Cras mattis posuere tellus, egestas egestas orci
                    accumsan et. Sed varius, risus eleifend scelerisque lobortis, ante
                    ligula rutrum tellus, a fermentum libero nulla id nisl. Nulla eros
                    elit, convallis in justo quis, fermentum molestie leo. Pellentesque
                    pulvinar tortor sit amet gravida euismod. Etiam id scelerisque ligula.
                    Donec eu dui at leo placerat facilisis quis quis dui. Donec aliquam
                    lacinia lacus, vitae dictum velit vulputate eu.
                  </p>
                </CustomScrollbar> */}
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
                <td style={{ width: '50%' }}>
                  <div className="td-truncate">{item[0]}</div>
                </td>
                <td style={{ width: '40%' }}>
                  <div className="td-truncate">{item[1]}</div>
                </td>
                <td width={'20px'}>
                  <div className="td-truncate">{item[2]}</div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Surat;
