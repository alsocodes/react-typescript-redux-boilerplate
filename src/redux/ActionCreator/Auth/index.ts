import { Dispatch } from 'redux';
import { IFromLogin } from '../../../pages/Login';
import { APP_LIST_CABANG, AUTH_KEY } from '../../../type.d';
import { ActionType, Action } from '../../ActionTypes/Auth';
import { Auth } from '../../Reducers/Auth';

// const authData = {
//   id: '0001',
//   name: 'also',
//   email: 'also@gmail.com',
// };
export const checkAuth = () => {
  return async (dispatch: Dispatch<Action>): Promise<void> => {
    try {
      const storage = localStorage.getItem(AUTH_KEY);
      const authData = storage ? JSON.parse(storage) : null;
      dispatch({
        type: ActionType.GET_AUTH,
        payload: authData,
      });
    } catch (err) {
      //
    }
  };
};

export const login = (data: IFromLogin) => {
  // nanti method dan axios disini untuk cek login
  // authData dummy dulu, nanti response dari login
  const authData = {
    id: '00001',
    name: data.username,
    email: 'alsocodes@gmai.com',
  } as Auth;

  localStorage.setItem(AUTH_KEY, JSON.stringify(authData));

  const dummyCabang = [
    { id: 'SB01', name: 'Karang Asem', address: 'Jl. Karang Asem IV 34A' },
    { id: 'SB02', name: 'Klinik Kayoon', address: 'Jl. Kayoon 11 D Surabaya' },
    { id: 'SB03', name: 'Klinik Beverly', address: 'Jl. HR Mohammad Surabaya' },
    { id: 'JK01', name: 'Klinik PIK', address: 'Jl. Medan Merdeka Selatan I 12' },
    {
      id: 'JK02',
      name: 'Klinik Jaksel',
      address: 'Jl. Panglima Sudirman SCBD Tower 1 Lt 2',
    },
    { id: 'MD01', name: 'Klinik Medan', address: 'Jl. Kenganan Bersama mu' },
    { id: 'BT01', name: 'Klinik BATAM', address: 'Jl. Medan Merdeka Selatan I 12' },
    { id: 'BP01', name: 'Klinik Balikpapan', address: 'Jl. Panglima Sudirman SCB' },
    { id: 'MG01', name: 'Klinik Menganti', address: 'Jl. Menganti jodoh datang 2' },
  ];

  localStorage.setItem(APP_LIST_CABANG, JSON.stringify(dummyCabang));

  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGIN_SUCCESS,
      payload: authData,
    });
  };
};
