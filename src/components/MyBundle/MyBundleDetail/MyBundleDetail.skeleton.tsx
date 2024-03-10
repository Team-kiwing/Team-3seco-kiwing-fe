import BorderBox from '@/components/common/BorderBox';

import { Container } from './MyBundleDetail.style';

const MyBundleDetailSkeleton = () => {
  return (
    <Container $isBundleSelected={false}>
      <BorderBox
        width="100%"
        height="100%"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center',
          boxSizing: 'border-box',
        }}
      >
        <img
          src="./kiwing_circle_transparent.png"
          alt="kiwing logo"
          style={{
            width: '30%',
          }}
        />
        <span>나만의 꾸러미를 선택해보세요!</span>
      </BorderBox>
    </Container>
  );
};

export default MyBundleDetailSkeleton;
