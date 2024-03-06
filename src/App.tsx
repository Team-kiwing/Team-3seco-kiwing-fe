import { useEffect } from 'react';

import Router from '@/routes';

const App = () => {
  const Auth = async () => {
    console.log('추후에 추가');
    // const refreshToken = getItem('refresh-token', null);
    // console.log(refreshToken);
    // if (refreshToken) {
    //   const res = await getAccessToken({ refreshToken });
    //   console.log(res);
    // } else {
    //   console.log(`저장된 토큰 없음`);
    // }
  };

  useEffect(() => {
    Auth();
  });

  return (
    <>
      <Router />
    </>
  );
};

export default App;
