import { MdDarkMode, MdLightMode } from 'react-icons/md';

import { PATH } from '@/constants/router';
import { themeStore } from '@/stores';

import IconWrapper from '../../IconWrapper';
import { NavigatorText } from '../Navigator.const';
import { useNavigatorMenu } from '../Navigator.hook';
import {
  WebNavBarDivideLine,
  WebNavBarLogo,
  WebNavBarLogoImage,
  WebNavBarMyPage,
  WebNavBarRouter,
  WebNavBarWrapper,
  WebNavItem,
} from './WebNavBar.style';

const WebNavBar = () => {
  const { isDarkMode, updateTheme } = themeStore();
  const {
    isLogin,
    location,
    handleLogo,
    handleHub,
    handleShared,
    handleMyList,
    handleLogin,
  } = useNavigatorMenu();

  return (
    <WebNavBarWrapper style={{ paddingTop: '6rem' }}>
      <WebNavBarRouter>
        <WebNavBarLogo onClick={handleLogo}>
          <span>{NavigatorText.LOGO_TEXT}</span>
          <WebNavBarLogoImage />
        </WebNavBarLogo>
        <WebNavItem
          $isLocated={location.pathname.includes(PATH.HUB)}
          onClick={handleHub}
        >
          <span>{NavigatorText.HUB_TEXT}</span>
        </WebNavItem>
        <WebNavItem
          $isLocated={location.pathname.includes(PATH.SHARED)}
          onClick={handleShared}
        >
          <span>{NavigatorText.SHARED_TEXT}</span>
        </WebNavItem>
      </WebNavBarRouter>
      <WebNavBarDivideLine />
      <WebNavBarMyPage>
        {/* todo Wrapper를 통한 색상, hover 변경 */}
        {isDarkMode ? (
          <IconWrapper
            $size={2.5}
            onClick={updateTheme}
          >
            <MdLightMode />
          </IconWrapper>
        ) : (
          <IconWrapper
            $size={2.5}
            onClick={updateTheme}
          >
            <MdDarkMode />
          </IconWrapper>
        )}
        {/* todo 로그인 시 아바타 컴포넌트 추가 */}
        {/* todo 버튼 변경 */}
        {isLogin ? (
          <WebNavItem
            $isLocated={location.pathname.includes(PATH.MY)}
            onClick={handleMyList}
          >
            <span>{NavigatorText.MY_TEXT}</span>
          </WebNavItem>
        ) : (
          <WebNavItem
            $isLocated={location.pathname.includes(PATH.AUTH)}
            onClick={handleLogin}
          >
            <span>{NavigatorText.AUTH_TEXT}</span>
          </WebNavItem>
        )}
      </WebNavBarMyPage>
    </WebNavBarWrapper>
  );
};

export default WebNavBar;
