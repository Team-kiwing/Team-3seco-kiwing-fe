/* eslint-disable react-refresh/only-export-components */
import 'react-toastify/dist/ReactToastify.css';

import { toast, ToastContainer } from 'react-toastify';

import { themeStore } from '@/stores';

import useResize from './useResize';

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
  const { isDarkMode } = themeStore();
  const { isMobileSize } = useResize();
  return (
    <ToastContainer
      position="top-center"
      autoClose={autoClose}
      hideProgressBar={false}
      stacked={isMobileSize ? false : true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover={false}
      theme={isDarkMode ? 'dark' : 'light'}
      style={{ fontSize: isMobileSize ? '1.3rem' : '1.6rem' }}
    />
  );
};

export default Toast;
