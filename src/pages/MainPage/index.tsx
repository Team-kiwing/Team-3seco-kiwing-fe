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
      <button onClick={isToken}>토큰 정보 확인</button>
      <button onClick={tagfetch}>태그 정보 호출(인증 필요X)</button>
      <button onClick={onClick}>
        번들 아이디 2번의 상세정보 호출(인증 필요O)
      </button>
      <button onClick={getMy}>내 정보 호출(인증 필요O)</button>
    </>
  );
};

export default MainPage;
