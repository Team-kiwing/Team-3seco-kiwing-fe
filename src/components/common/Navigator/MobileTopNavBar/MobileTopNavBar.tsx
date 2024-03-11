import { MdArrowBack, MdDarkMode, MdLightMode } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { themeStore, userDataStore } from '@/stores';

import Avatar from '../../Avatar';
import IconWrapper from '../../IconWrapper';
import { useNavigatorMenu } from '../Navigator.hook';
import { TopBarItem, TopNavBarWrapper } from './MobileTopNavBar.style';

const MobileTopNavBar = () => {
  const { isDarkMode, updateTheme } = themeStore();
  const navigator = useNavigate();
  const { isLogin, profileImage } = userDataStore();
  const { handleMyBundle } = useNavigatorMenu();

  return (
    <TopNavBarWrapper $isDark={isDarkMode}>
      <TopBarItem>
        <IconWrapper
          onClick={() => {
            navigator(-1);
          }}
          $size={'s'}
        >
          <MdArrowBack />
        </IconWrapper>
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
