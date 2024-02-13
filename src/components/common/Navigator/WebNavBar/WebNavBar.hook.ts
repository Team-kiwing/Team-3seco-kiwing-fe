import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useMenu = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const location = useLocation();
  const navigator = useNavigate();

  useEffect(() => {
    // Todo 로그인 여부
    // const id = getId();
    // if (id) setIsLogin(true);
    // setIsLogin(false);
    setIsLogin(true);
  }, []);

  const handleNavigate = (path: string): void => {
    if (location.pathname === path) {
      return;
    } else {
      navigator(path);
    }
  };

  const handleLogo = () => handleNavigate('/');
  const handleHub = () => handleNavigate('/hub');
  const handleList = () => handleNavigate('/shared');
  const handleLogin = () => handleNavigate('/auth');
  const handleMyList = (userId: string) => handleNavigate(`/@${userId}`);

  return {
    isLogin,
    handleLogo,
    handleHub,
    handleList,
    handleMyList,
    handleLogin,
  };
};
