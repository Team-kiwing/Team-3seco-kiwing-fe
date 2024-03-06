import { getBundleDetail } from '@/services/bundles';

const TestPage = () => {
  const onClick = async () => {
    const res = await getBundleDetail({ bundleId: 2 });
    console.log(res);
  };

  return (
    <>
      <button onClick={onClick}>버튼ㄴ</button>
    </>
  );
};

export default TestPage;
