import { MdArrowBack, MdDarkMode, MdLightMode } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { themeStore } from '@/stores';

import Avatar from '../../Avatar';
import IconWrapper from '../../IconWrapper';
import { TopBarItem, TopNavBarWrapper } from './MobileTopNavBar.style';

const MobileTopNavBar = () => {
  const { isDarkMode, updateTheme } = themeStore();
  const navigator = useNavigate();

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
            $size={'xs'}
          >
            <MdLightMode />
          </IconWrapper>
        ) : (
          <IconWrapper
            onClick={updateTheme}
            $size={'xs'}
          >
            <MdDarkMode />
          </IconWrapper>
        )}
        <Avatar
          onClick={() => navigator('/@:id')}
          style={{ transform: 'scale(0.9)' }}
          $size="nav"
          // todo 동적으로 로그인 한 경우에만 이미지 주소를 주도록
          $src="https://avatars.githubusercontent.com/u/90549862?v=4"
        />
      </TopBarItem>
    </TopNavBarWrapper>
  );
};

export default MobileTopNavBar;
