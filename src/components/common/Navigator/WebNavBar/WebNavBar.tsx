import { MdDarkMode, MdLightMode } from 'react-icons/md';

import {
  ROUTE_AUTH_PAGE,
  ROUTE_HUB_PAGE,
  ROUTE_MY_PAGE,
  ROUTE_SHARED_PAGE,
} from '@/constants/router';
import { themeStore } from '@/stores';

import { useMenu } from './WebNavBar.hook';
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
    handleList,
    handleMyList,
    handleLogin,
  } = useMenu();

  console.log(location.pathname);

  return (
    <WebNavBarWrapper>
      <WebNavBarRouter>
        <WebNavBarLogo onClick={handleLogo}>
          <span>키윙</span>
          <WebNavBarLogoImage />
        </WebNavBarLogo>
        <WebNavItem
          $isLocated={location.pathname.includes(ROUTE_HUB_PAGE)}
          onClick={handleHub}
        >
          <span>질문 허브</span>
        </WebNavItem>
        <WebNavItem
          $isLocated={location.pathname.includes(ROUTE_SHARED_PAGE)}
          onClick={handleList}
        >
          <span>공유된 질문 꾸러미</span>
        </WebNavItem>
      </WebNavBarRouter>
      <WebNavBarDivideLine />
      <WebNavBarMyPage>
        {/* todo Wrapper를 통한 색상, hover 변경 */}
        {isDarkMode ? (
          <MdLightMode onClick={updateTheme} />
        ) : (
          <MdDarkMode onClick={updateTheme} />
        )}
        {/* todo 로그인 시 아바타 컴포넌트 추가 */}
        {/* todo 버튼 변경 */}
        {isLogin ? (
          <WebNavItem
            $isLocated={location.pathname.includes(ROUTE_MY_PAGE)}
            onClick={() => handleMyList(':id')}
          >
            <span>내 질문 꾸러미</span>
          </WebNavItem>
        ) : (
          <WebNavItem
            $isLocated={location.pathname.includes(ROUTE_AUTH_PAGE)}
            onClick={handleLogin}
          >
            <span>로그인</span>
          </WebNavItem>
        )}
      </WebNavBarMyPage>
    </WebNavBarWrapper>
  );
};

export default WebNavBar;
