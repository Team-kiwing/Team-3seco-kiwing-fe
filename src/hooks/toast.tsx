import 'react-toastify/dist/ReactToastify.css';

import { toast, ToastContainer } from 'react-toastify';

const autoClose = 2000;

interface ToastProps {
  text: string;
  type: 'default' | 'success' | 'warning' | 'error';
}

export const notify = ({ type, text }: ToastProps) => {
  switch (type) {
    case 'default':
      toast(text);
      break;
    case 'success':
      toast.success(text);
      break;
    case 'warning':
      toast.warning(text);
      break;
    case 'error':
      toast.error(text);
      break;
  }
};

const Toast = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={autoClose}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      theme={'light'}
    />
  );
};

export default Toast;
