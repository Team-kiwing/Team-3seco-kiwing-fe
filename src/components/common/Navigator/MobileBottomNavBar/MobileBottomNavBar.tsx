import Avatar from '@components/common/Avatar';
import IconWrapper from '@components/common/IconWrapper';
import {
  PiArrowCircleRightLight,
  PiBooks,
  PiCloudArrowDown,
  PiScroll,
} from 'react-icons/pi';

import { PATH } from '@/constants/router';

import { useNavigatorMenu } from '../Navigator.hook';
import { MobileBottomNavBarText } from './MobileBottomNavBar.const';
import {
  BottomNavBarItem,
  BottomNavBarWrapper,
} from './MobileBottomNavBar.style';

const MobileBottomNavBar = () => {
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
          <span>{MobileBottomNavBarText.HUB_ITEM}</span>
        </BottomNavBarItem>
        <BottomNavBarItem
          $color={location.pathname.includes(PATH.SHARED)}
          onClick={handleShared}
        >
          <IconWrapper $size={'s'}>
            <PiScroll />
          </IconWrapper>
          <span>{MobileBottomNavBarText.SHARED_ITEM}</span>
        </BottomNavBarItem>
        {isLogin ? (
          <BottomNavBarItem
            $color={location.pathname.includes(PATH.MY)}
            onClick={handleMyList}
          >
            <IconWrapper $size={'s'}>
              <PiBooks />
            </IconWrapper>
            <span>{MobileBottomNavBarText.MY_ITEM}</span>
          </BottomNavBarItem>
        ) : (
          <BottomNavBarItem
            $color={location.pathname.includes(PATH.AUTH)}
            onClick={handleLogin}
          >
            <IconWrapper $size={'s'}>
              <PiArrowCircleRightLight />
            </IconWrapper>
            <span>{MobileBottomNavBarText.MY_ITEM}</span>
          </BottomNavBarItem>
        )}
      </BottomNavBarWrapper>
    </>
  );
};

export default MobileBottomNavBar;
