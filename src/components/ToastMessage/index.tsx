import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/UseTypeSelector';
import { AppDispatch } from '../../redux/store';
import { ToastContainer, toast } from 'react-toastify';
import { setToast } from '../../redux/ActionCreator/AppConfig';
import 'react-toastify/dist/ReactToastify.css';

export const ToastMessage = (): JSX.Element => {
  const { toastData } = useTypedSelector((state) => state.appConfig);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!toastData) {
      return;
    }

    const config = {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };

    const { message, type } = toastData;

    switch (type) {
      case 'error':
        console.log(toastData);

        toast.error(message, config);
        break;
      case 'success':
        toast.success(message, config);
        break;
      default:
        toast(message, config);
        break;
    }

    dispatch(setToast(null));
  }, [toastData]);
  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      // style={{ minWidth: 500 }}
    />
  );
};
