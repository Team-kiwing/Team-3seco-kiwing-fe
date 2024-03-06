import { getBundleDetail } from '@/services/bundles';
import { getTag } from '@/services/etc';
import { getMyInfo } from '@/services/members';
import { accessTokenStore, themeStore } from '@/stores';

const MainPage = () => {
  const { updateTheme } = themeStore();
  const handle = () => {
    updateTheme();
  };

  const onClick = async () => {
    const res = await getBundleDetail({ bundleId: 2 });
    console.log(res);
  };

  const isToken = () => {
    const token = accessTokenStore.getState().token;
    console.log(token);
  };

  const tagfetch = async () => {
    const res = await getTag();
    console.log(res);
  };

  const getMy = async () => {
    const res = await getMyInfo();
    console.log(res);
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

  return (
    <>
      <div style={{ display: 'flex' }}>This is Main</div>
      <button onClick={handle}>XXX</button>
      <button onClick={handler}>OOO</button>
      <button onClick={onClick}>OXOXOXOXOXO</button>
      <button onClick={isToken}>토큰있?</button>
      <button onClick={tagfetch}>태그 정보 오나</button>
      <button onClick={getMy}>내 정보</button>
    </>
  );
};

export default MainPage;
