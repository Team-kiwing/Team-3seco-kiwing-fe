import { useMenu } from './WebNavBar.hook';
import {
  WebNavBarDivideLine,
  WebNavBarHub,
  WebNavBarLogin,
  WebNavBarLogo,
  WebNavBarMyList,
  WebNavBarMyPage,
  WebNavBarRouter,
  WebNavBarShared,
  WebNavBarWrapper,
} from './WebNavBar.style';

const WebNavBar = () => {
  const {
    isLogin,
    handleLogo,
    handleHub,
    handleList,
    handleMyList,
    handleLogin,
  } = useMenu();

  console.log(isLogin);

  return (
    <WebNavBarWrapper>
      <WebNavBarRouter>
        <WebNavBarLogo onClick={handleLogo}>키윙</WebNavBarLogo>
        <WebNavBarHub onClick={handleHub}>질문 허브</WebNavBarHub>
        <WebNavBarShared onClick={handleList}>
          공유된 질문 꾸러미
        </WebNavBarShared>
      </WebNavBarRouter>
      <WebNavBarDivideLine />
      <WebNavBarMyPage>
        {isLogin ? (
          <WebNavBarMyList onClick={() => handleMyList(':id')}>
            내 질문 꾸러미
          </WebNavBarMyList>
        ) : (
          <WebNavBarLogin onClick={handleLogin}>로그인</WebNavBarLogin>
        )}
      </WebNavBarMyPage>
    </WebNavBarWrapper>
  );
};

export default WebNavBar;
