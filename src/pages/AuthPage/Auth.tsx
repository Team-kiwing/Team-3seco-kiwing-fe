import { useTheme } from 'styled-components';

import useResize from '@/hooks/useResize';
import { themeStore } from '@/stores';

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
  const theme = useTheme();

  const goGoogleLogin = () => {
    window.location.href =
      'https://api-dev.kiwing.kr/oauth2/authorization/google';
  };

  return (
    <AuthPageWrapper>
      {!isMobileSize && (
        <AuthLogo>
          <img
            src="./kiwing_square_white.png"
            alt="kiwing logo"
          />
        </AuthLogo>
      )}
      <AuthContentWrapper $isMobile={isMobileSize}>
        <AuthHeader $isMobile={isMobileSize}>
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
        <AuthDescription $isMobile={isMobileSize}>
          kiwing은 취업 준비생, 이직생들이 마주한 면접과정을 준비하는 데에
          도움이 되고자 기획된 장기 프로젝트입니다. <br /> kiwing은 사용자들에게
          면접을 효율적이고 빠르게 준비할 수 있는 기능들을 제공합니다.
        </AuthDescription>
        <AuthSubHeader $isMobile={isMobileSize}>
          이메일로 로그인 해보세요.
        </AuthSubHeader>
        <AuthGoogleWrapper
          $isMobile={isMobileSize}
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
  );
};

export default Auth;
