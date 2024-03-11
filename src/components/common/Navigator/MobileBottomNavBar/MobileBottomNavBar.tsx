import Avatar from '@components/common/Avatar';
import IconWrapper from '@components/common/IconWrapper';
import {
  PiArrowCircleRightLight,
  PiBooks,
  PiCloudArrowDown,
  PiScroll,
} from 'react-icons/pi';

import { PATH } from '@/constants/router';
import { userDataStore } from '@/stores';

import { NavigatorText } from '../Navigator.const';
import { useNavigatorMenu } from '../Navigator.hook';
import {
  BottomNavBarItem,
  BottomNavBarWrapper,
} from './MobileBottomNavBar.style';

const MobileBottomNavBar = () => {
  const { isLogin } = userDataStore();
  const {
    location,
    handleLogo,
    handleHub,
    handleShared,
    handleMyBundle,
    handleLogin,
  } = useNavigatorMenu();

  return (
    <>
      <BottomNavBarWrapper>
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
          <span>{NavigatorText.HUB_TEXT}</span>
        </BottomNavBarItem>
        <BottomNavBarItem
          $color={location.pathname.includes(PATH.SHARED)}
          onClick={handleShared}
        >
          <IconWrapper $size={'s'}>
            <PiScroll />
          </IconWrapper>
          <span>{NavigatorText.SHARED_TEXT}</span>
        </BottomNavBarItem>
        {isLogin ? (
          <BottomNavBarItem
            $color={location.pathname.includes(PATH.MY)}
            onClick={handleMyBundle}
          >
            <IconWrapper $size={'s'}>
              <PiBooks />
            </IconWrapper>
            <span>{NavigatorText.MY_TEXT}</span>
          </BottomNavBarItem>
        ) : (
          <BottomNavBarItem
            $color={location.pathname.includes(PATH.AUTH)}
            onClick={handleLogin}
          >
            <IconWrapper $size={'s'}>
              <PiArrowCircleRightLight />
            </IconWrapper>
            <span>{NavigatorText.AUTH_TEXT}</span>
          </BottomNavBarItem>
        )}
      </BottomNavBarWrapper>
    </>
  );
};

export default MobileBottomNavBar;
