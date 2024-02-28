// 이 부분 로직이 WebNavBar.hook이랑 겹쳐서 상위 Navigator 폴더 훅으로 마이그레이션 예정입니다.
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { PATH } from '@/constants/router';

export const useNavigatorMenu = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const location = useLocation();
  const navigator = useNavigate();

  useEffect(() => {
    // Todo 로그인 여부
    // const id = getId();
    // if (id) setIsLogin(true);
    setIsLogin(false);
    // setIsLogin(true);
  }, []);

  const handleNavigate = (path: string): void => {
    if (location.pathname === path) {
      return;
    } else {
      navigator(path);
    }
  };

  const handleLogo = () => handleNavigate(PATH.MAIN);
  const handleHub = () => handleNavigate(PATH.HUB);
  const handleSharedBundle = () => handleNavigate(PATH.SHARED_ITEM);
  const handleShared = () => handleNavigate(PATH.SHARED);
  const handleLogin = () => handleNavigate(PATH.AUTH);
  const handleMyBundle = () => handleNavigate(PATH.MY);

  return {
    isLogin,
    location,
    handleLogo,
    handleHub,
    handleShared,
    handleSharedBundle,
    handleMyBundle,
    handleLogin,
  };
};
