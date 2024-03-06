import { ReactNode, useEffect } from 'react';
import { Navigate, NavigateProps } from 'react-router-dom';

import Spinner from '@/components/common/Spinner';
import { notify } from '@/hooks/toast';
import { userDataStore } from '@/stores';
import { getItem } from '@/utils/localStorage';

interface AuthRouteProps {
  element: ReactNode;
}

const AuthRoute = ({ element }: AuthRouteProps) => {
  const { accessToken } = userDataStore();
  const refreshToken = getItem('refresh-token', null);

  useEffect(() => {
    if (!refreshToken && !accessToken) {
      notify({ type: 'warning', text: '로그인이 필요한 기능이에요!' });
    }
  }, [refreshToken, accessToken]);

  if (refreshToken && !accessToken) {
    return <Spinner />;
  }

  return refreshToken && accessToken ? (
    element
  ) : (
    <Navigate
      to={
        {
          pathname: '/',
        } as NavigateProps['to']
      }
      replace
    />
  );
};

export default AuthRoute;
