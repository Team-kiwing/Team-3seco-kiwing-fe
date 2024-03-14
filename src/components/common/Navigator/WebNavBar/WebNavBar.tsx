import { MdDarkMode, MdLightMode } from 'react-icons/md';

import { PATH } from '@/constants/router';
import { themeStore, userDataStore } from '@/stores';

import Avatar from '../../Avatar';
import IconWrapper from '../../IconWrapper';
import { NavigatorText } from '../Navigator.const';
import { useNavigatorMenu } from '../Navigator.hook';
import {
  WebNavBarBackground,
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
  const { isLogin, profileImage } = userDataStore();
  const {
    location,
    handleLogo,
    handleHub,
    handleShared,
    handleMyBundle,
    handleLogin,
  } = useNavigatorMenu();

  return (
    <WebNavBarBackground>
      <WebNavBarWrapper>
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
          {isDarkMode ? (
            <IconWrapper
              $size={3.5}
              onClick={updateTheme}
              $isBackground
              $hoverIconColor="yellow"
            >
              <MdLightMode />
            </IconWrapper>
          ) : (
            <IconWrapper
              $size={3.5}
              onClick={updateTheme}
              $isBackground
              $hoverIconColor="navy"
            >
              <MdDarkMode />
            </IconWrapper>
          )}
          {isLogin ? (
            <WebNavItem
              $isLocated={location.pathname.includes('user/')}
              onClick={handleMyBundle}
            >
              <Avatar
                $size={'nav'}
                $src={profileImage}
              />
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
    </WebNavBarBackground>
  );
};

export default WebNavBar;
