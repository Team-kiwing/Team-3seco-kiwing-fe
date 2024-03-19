import { MdArrowBack, MdDarkMode, MdLightMode } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';

import { themeStore, userDataStore } from '@/stores';

import Avatar from '../../Avatar';
import IconWrapper from '../../IconWrapper';
import { useNavigatorMenu } from '../Navigator.hook';
import { TopBarItem, TopNavBarWrapper } from './MobileTopNavBar.style';

const MobileTopNavBar = () => {
  const { isDarkMode, updateTheme } = themeStore();
  const location = useLocation();
  const navigator = useNavigate();
  const { isLogin, profileImage, nickname } = userDataStore();
  const { handleMyBundle } = useNavigatorMenu();

  const isBackActive =
    location.pathname !== '/shared' &&
    location.pathname !== `/user/${nickname}` &&
    location.pathname !== '/hub' &&
    location.pathname !== '/';

  const ShowBackButton = (path: string) => {
    switch (path) {
      case '/':
        return 'HOME';
      case '/shared':
        return '공유된 꾸러미';
      case '/hub':
        return '질문 허브';
    }

    if (path.includes(`/user/${nickname}`)) {
      return `내 꾸러미`;
    }
  };

  return (
    <TopNavBarWrapper $isDark={isDarkMode}>
      <TopBarItem>
        {isBackActive ? (
          <IconWrapper
            onClick={() => {
              navigator(-1);
            }}
            $size={'s'}
          >
            <MdArrowBack />
          </IconWrapper>
        ) : (
          <div
            style={{
              fontSize: '2rem',
              fontWeight: '550',
            }}
          >
            {ShowBackButton(location.pathname)}
          </div>
        )}
      </TopBarItem>
      <TopBarItem>
        {isDarkMode ? (
          <IconWrapper
            onClick={updateTheme}
            $size={2.5}
          >
            <MdLightMode />
          </IconWrapper>
        ) : (
          <IconWrapper
            onClick={updateTheme}
            $size={2.5}
          >
            <MdDarkMode />
          </IconWrapper>
        )}
        {isLogin && (
          <Avatar
            onClick={handleMyBundle}
            style={{ cursor: 'pointer', transform: 'scale(0.9)' }}
            $size="nav"
            $src={profileImage}
          />
        )}
      </TopBarItem>
    </TopNavBarWrapper>
  );
};

export default MobileTopNavBar;
