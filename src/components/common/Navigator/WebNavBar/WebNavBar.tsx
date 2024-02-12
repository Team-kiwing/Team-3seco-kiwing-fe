import { useMenu } from './WebNavBar.hook';
import {
  WebNavBarMyPage,
  WebNavBarRouter,
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
        <div onClick={handleLogo}>handleLogo</div>
        <div onClick={handleHub}>handleHub</div>
        <div onClick={handleList}>handleList</div>
      </WebNavBarRouter>
      <WebNavBarMyPage>
        {isLogin ? (
          <div onClick={() => handleMyList(':id')}>handleMyList</div>
        ) : (
          <div onClick={handleLogin}>Todo/LoginButton</div>
        )}
      </WebNavBarMyPage>
    </WebNavBarWrapper>
  );
};

export default WebNavBar;
