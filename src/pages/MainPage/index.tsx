import { useNavigate } from 'react-router-dom';

import { themeStore } from '@/stores';

const MainPage = () => {
  const navigator = useNavigate();
  const { updateTheme } = themeStore();
  const handle = () => {
    updateTheme();
  };

  const handler = async () => {
    try {
      const res = await fetch('/question', { method: 'GET' });
      const response = await res.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const moveToMyPage = () => {
    const moveTo = window.prompt(`이동할 주소!!`);
    navigator(`/@${moveTo}`);
  };

  const moveToSharedItemPage = () => {
    const moveTo = window.prompt(`이동할 주소!!`);
    navigator(`/shared/${moveTo}`);
  };

  const moveToReportPage = () => {
    navigator(`/report`);
  };

  return (
    <>
      <div style={{ display: 'flex' }}>This is Main</div>
      <button onClick={handle}>XXX</button>
      <button onClick={handler}>OOO</button>
      <div
        style={{
          fontSize: '1.6rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <button onClick={moveToMyPage}>내 페이지로 이동</button>
        <button onClick={moveToSharedItemPage}>
          공유된 꾸러미 아이템 주소로 이동
        </button>
        <button onClick={moveToReportPage}>문의하기 페이지로 이동</button>
      </div>
    </>
  );
};

export default MainPage;
