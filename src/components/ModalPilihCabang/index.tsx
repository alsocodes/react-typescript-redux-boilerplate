import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/UseTypeSelector';
import { fetchListCabang, setCabangSelected } from '../../redux/ActionCreator/AppConfig';
import { CabangData } from '../../redux/Reducers/AppConfig';
import { AppDispatch } from '../../redux/store';

type Props = {
  open: boolean;
  setOpen(bool: boolean): void;
};
const ModalPilihCabang: FC<Props> = ({ open, setOpen }): JSX.Element => {
  // console.log('open', open);
  const { listCabang, cabangSelected } = useTypedSelector((state) => state.appConfig);
  // if (!open && cabangSelected) return <></>;

  const [selected, setSelected] = useState<CabangData | null>(cabangSelected);
  const [isOpen, setIsOpen] = useState(open);

  const dispatch = useDispatch<AppDispatch>();
  // fetch master cabang
  // show modal list cabang
  // select -> dispatch setCabangSelected

  useEffect(() => {
    setIsOpen(cabangSelected === null || open);
  }, [cabangSelected, open]);

  useEffect(() => {
    if (listCabang.length < 1) dispatch(fetchListCabang());
  }, [listCabang]);

  const onSelectCabang = (data: CabangData) => {
    setSelected(data);
    // dispatch(setCabangSelected(data));
  };

  const onPiliCabangClick = () => {
    if (!selected) return;
    setIsOpen(false);
    setOpen(false);
    dispatch(setCabangSelected(selected));
  };

  // useEffect(() => {}, [isOpen]);

  return (
    <div>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className={`${'modal'} ${isOpen && 'modal-open'}`}>
        <div className="modal-box w-11/12 max-w-5xl">
          {cabangSelected && (
            <label
              onClick={() => {
                setIsOpen(false);
                setOpen(false);
              }}
              className="btn btn-sm btn-circle absolute right-2 top-2">
              ✕
            </label>
          )}
          <h2 className="font-bold text-lg mb-2">Pilih Cabang</h2>
          {/* <hr className="mb-2" /> */}
          <div className="grid grid-cols-3 gap-4">
            {listCabang?.map((item) => {
              const isSelected = item.id === selected?.id;
              return (
                <div
                  onClick={() => onSelectCabang(item)}
                  key={item.id}
                  className={`${'card card-compact bg-base-100 shadow-xl cursor-pointer'}`}>
                  <div
                    className={`${'card-body p-4'} ${
                      isSelected ? 'bg-gray-300' : 'hover:bg-gray-300'
                    } `}>
                    <h2 className={`${'card-title p-0 m-0'}`}>
                      {item.id} {item.name}
                    </h2>
                    <p className="truncate text-xs p-0 m-0">{item.address}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="modal-action">
            <button
              onClick={() => onPiliCabangClick()}
              type="button"
              className={`${'btn btn-sm btn-primary'} ${!selected && 'btn-disabled'}`}>
              Pilih Cabang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPilihCabang;
