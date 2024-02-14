import {
  PiArrowCircleRightLight,
  PiBooks,
  PiCloudArrowDown,
  PiScroll,
} from 'react-icons/pi';

import Avatar from '../../Avatar';
import { useNavigatorMenu } from './MobileBottomNavBar.hook';
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
    handleSharedList,
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
                : '/kiwing_circle_009c4d.png'
            }
          />
        </BottomNavBarItem>
        <BottomNavBarItem
          $color={location.pathname.includes('/hub')}
          onClick={handleHub}
        >
          <PiCloudArrowDown size={30} />
          <span>허브</span>
        </BottomNavBarItem>
        <BottomNavBarItem
          $color={location.pathname.includes('/shared')}
          onClick={handleSharedList}
        >
          <PiScroll size={30} />
          <span>공유된 꾸러미</span>
        </BottomNavBarItem>
        {isLogin ? (
          <BottomNavBarItem
            $color={location.pathname.includes('/@:id')}
            onClick={() => handleMyList(':id')}
          >
            <PiBooks size={30} />
            <span>내 꾸러미</span>
          </BottomNavBarItem>
        ) : (
          <BottomNavBarItem
            $color={location.pathname.includes('/auth')}
            onClick={handleLogin}
          >
            <PiArrowCircleRightLight size={30} />
            <span>로그인</span>
          </BottomNavBarItem>
        )}
      </BottomNavBarWrapper>
    </>
  );
};

export default MobileBottomNavBar;
