import Avatar from '@components/common/Avatar';
import IconWrapper from '@components/common/IconWrapper';
import {
  PiArrowCircleRightLight,
  PiBooks,
  PiCloudArrowDown,
  PiScroll,
} from 'react-icons/pi';

import { PATH } from '@/constants/router';
import { themeStore } from '@/stores';

import { useNavigatorMenu } from '../Navigator.hook';
import {
  BottomNavBarItem,
  BottomNavBarWrapper,
} from './MobileBottomNavBar.style';

const MobileBottomNavBar = () => {
  const { isDarkMode } = themeStore();
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
    <>
      <BottomNavBarWrapper $isDark={isDarkMode}>
        <BottomNavBarItem onClick={handleLogo}>
          <Avatar
            $size="nav"
            $src={
              location.pathname.length === 1
                ? '/kiwing_circle_green.png'
                : '/kiwing_circle_white.png'
            }
          />
        </BottomNavBarItem>
        <BottomNavBarItem
          $color={location.pathname.includes(PATH.HUB)}
          onClick={handleHub}
        >
          <IconWrapper $size={'s'}>
            <PiCloudArrowDown />
          </IconWrapper>
          <span>허브</span>
        </BottomNavBarItem>
        <BottomNavBarItem
          $color={location.pathname.includes(PATH.SHARED)}
          onClick={handleShared}
        >
          <IconWrapper $size={'s'}>
            <PiScroll />
          </IconWrapper>
          <span>공유된 꾸러미</span>
        </BottomNavBarItem>
        {isLogin ? (
          <BottomNavBarItem
            $color={location.pathname.includes(PATH.MY)}
            onClick={handleMyList}
          >
            <IconWrapper $size={'s'}>
              <PiBooks />
            </IconWrapper>
            <span>내 꾸러미</span>
          </BottomNavBarItem>
        ) : (
          <BottomNavBarItem
            $color={location.pathname.includes(PATH.AUTH)}
            onClick={handleLogin}
          >
            <IconWrapper $size={'s'}>
              <PiArrowCircleRightLight />
            </IconWrapper>
            <span>로그인</span>
          </BottomNavBarItem>
        )}
      </BottomNavBarWrapper>
    </>
  );
};

export default MobileBottomNavBar;
