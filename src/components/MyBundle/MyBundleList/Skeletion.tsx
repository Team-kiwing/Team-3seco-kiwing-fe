import BorderBox from '@/components/common/BorderBox';
import Skeleton from '@/components/common/Skeleton';

const BundleListSkeleton = () => {
  return Array.from(Array(10), (_, index) => (
    <BorderBox
      key={index}
      width="100%"
      height="5rem"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
      }}
    >
      <Skeleton.Box
        $width="90%"
        $height="3rem"
      />
    </BorderBox>
  ));
};

export default BundleListSkeleton;
