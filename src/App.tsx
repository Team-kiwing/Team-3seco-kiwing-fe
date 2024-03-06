import { useEffect } from 'react';

import Router from '@/routes';

import { getAccessToken } from './services/auth';
import { userDataStore } from './stores';
import { getItem } from './utils/localStorage';

const App = () => {
  const { accessToken, setAccessToken } = userDataStore();
  const Auth = async () => {
    const refreshToken = getItem('refresh-token', null);
    if (refreshToken) {
      const res = await getAccessToken({ refreshToken });
      if (res) {
        console.log(res);
        setAccessToken(res.accessToken);
      } else {
        throw new Error(`토큰값이 없어요!`);
      }
    } else {
      console.log(`저장된 토큰 없음`);
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
