import ShadowBox from '@/components/common/ShadowBox';
import Skeleton from '@/components/common/Skeleton';

const BundleListSkeleton = () => {
  return Array.from(Array(10), (_, index) => {
    return (
      <ShadowBox
        key={index}
        width="100%"
        height="5rem"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Skeleton.Box
          $width="80%"
          $height="2rem"
        />
      </ShadowBox>
    );
  });
};

export default BundleListSkeleton;
