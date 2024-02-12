import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useMenu = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const navigator = useNavigate();

  useEffect(() => {
    // Todo 로그인 여부
    // const id = getId();
    // if (id) setIsLogin(true);
    setIsLogin(false);
    // setIsLogin(true);
  }, []);

  const handleLogo = () => navigator('/');
  const handleHub = () => navigator('/hub');
  const handleList = () => navigator('/shared');
  const handleMyList = (userId: string): void => navigator(`/@${userId}`);
  const handleLogin = () => navigator('/auth');

  return {
    isLogin,
    handleLogo,
    handleHub,
    handleList,
    handleMyList,
    handleLogin,
  };
};
