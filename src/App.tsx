import { useEffect } from 'react';

import Router from '@/routes';

import { getAccessToken } from './services/auth';
import { getMyInfo } from './services/members';
import { userDataStore } from './stores';
import { getItem } from './utils/localStorage';

const App = () => {
  const { accessToken, setAccessToken, setUserData, setIsLogin } =
    userDataStore();

  const Auth = async () => {
    const refreshToken = getItem('refresh-token', null);
    if (refreshToken) {
      const res = await getAccessToken({ refreshToken });
      if (res) {
        setAccessToken(res.accessToken);
        const userData = await getMyInfo();
        if (userData) {
          setIsLogin(true);
          setUserData(userData);
        } else {
          throw new Error(`사용자 정보가 없어요!`);
        }
      } else {
        throw new Error(`토큰값이 없어요!`);
      }
    }
  };

  useEffect(() => {
    if (!accessToken) {
      Auth();
    }
  });

  return (
    <>
      <Router />
    </>
  );
};

export default App;
