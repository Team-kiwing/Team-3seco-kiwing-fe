import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import Spinner from '@/components/common/Spinner';
import useResize from '@/hooks/useResize';
import { themeStore, userDataStore } from '@/stores';
import { getItem, setItem } from '@/utils/localStorage';

import { SignInUrl } from './Auth.const';
import {
  AuthContentWrapper,
  AuthDescription,
  AuthGoogleWrapper,
  AuthHeader,
  AuthLogo,
  AuthPageWrapper,
  AuthSubHeader,
} from './Auth.style';

const Auth = () => {
  const { isMobileSize } = useResize();
  const { isDarkMode } = themeStore();
  const { accessToken: storedAccessToken, setAccessToken } = userDataStore();
  const storedRefreshToken = getItem('refresh-token', null);
  const theme = useTheme();

  const navigate = useNavigate();

  const accessToken = new URL(window.location.href).searchParams.get(
    'access-token'
  );
  const refreshToken = new URL(window.location.href).searchParams.get(
    'refresh-token'
  );

  const goGoogleLogin = () => {
    window.location.href = SignInUrl;
  };

  useEffect(() => {
    if (!storedAccessToken && !storedRefreshToken) {
      if (accessToken && refreshToken) {
        setAccessToken(accessToken);
        setItem('refresh-token', refreshToken);
        navigate('/');
      }
    } else {
      navigate('/');
    }
  }, [
    navigate,
    accessToken,
    setAccessToken,
    refreshToken,
    storedAccessToken,
    storedRefreshToken,
  ]);

  if (storedAccessToken || storedRefreshToken) {
    return <Spinner />;
  }

  return (
    <>
      {accessToken && refreshToken ? (
        <Spinner />
      ) : (
        <AuthPageWrapper>
          {!isMobileSize && (
            <AuthLogo>
              <img
                src="./kiwing_circle_green.png"
                alt="kiwing logo"
              />
            </AuthLogo>
          )}
          <AuthContentWrapper>
            <AuthHeader>
              <span
                style={{
                  color: isDarkMode
                    ? `${theme.symbol_secondary_color}`
                    : `${theme.symbol_color}`,
                }}
              >
                kiwing
              </span>
              에 오신 것을 환영합니다.
            </AuthHeader>
            <AuthDescription>
              kiwing은 취업 준비생, 이직생들이 마주한 면접과정을 준비하는 데에
              도움이 되고자 기획된 장기 프로젝트입니다. <br /> kiwing은
              사용자들에게 면접을 효율적이고 빠르게 준비할 수 있는 기능들을
              제공합니다.
            </AuthDescription>
            <AuthSubHeader>이메일로 로그인 해보세요.</AuthSubHeader>
            <AuthGoogleWrapper
              $isDarkMode={isDarkMode}
              onClick={goGoogleLogin}
            >
              <img
                src={
                  isDarkMode
                    ? './google_sign_in_dark.png'
                    : './google_sign_in_light.png'
                }
                alt="구글 로그인"
              />
            </AuthGoogleWrapper>
          </AuthContentWrapper>
        </AuthPageWrapper>
      )}
    </>
  );
};

export default Auth;
