import Router from '@/routes';

const App = () => {
  // 아마 App을 거쳐서 페이지를 뿌리는 구조라 여기서 auth 여부 판별하는 로직이 있지 않을까 합니다.
  return (
    <>
      <Router />
    </>
  );
};

export default App;
