import { useState } from 'react';

import BorderBox from '@/components/common/BorderBox';
import MyBundleDetail from '@/components/MyBundle/MyBundleDetail';
import MyBundleIndex from '@/components/MyBundle/MyBundleIndex';
import MyBundleList from '@/components/MyBundle/MyBundleList';
import MyBundleMenu from '@/components/MyBundle/MyBundleMenu';
import useResize from '@/hooks/useResize';
import { Bundle } from '@/types';

import { useFetchMyBundles } from './MyBundle.hook';
import { Container, StyledWrapper } from './MyBundle.style';

const MyBundle = () => {
  const { isMobileSize } = useResize();

  const { data: bundles } = useFetchMyBundles();
  const [selectedBundle, setSelectedBundle] = useState<Bundle | null>(null);

  return (
    <>
      <Container>
        <MyBundleList
          bundles={bundles}
          selectedBundle={selectedBundle}
          setSelectedBundle={setSelectedBundle}
        />

        {!isMobileSize && selectedBundle && (
          <div style={{ width: '60%', height: '100%' }}>
            <MyBundleDetail questions={selectedBundle.questions} />
          </div>
        )}
        {!isMobileSize && !selectedBundle && (
          <div style={{ width: '60%', height: '100%' }}>
            <BorderBox
              width="100%"
              height="100%"
            >
              {' '}
              없음
            </BorderBox>
          </div>
        )}
        {!isMobileSize && (
          <StyledWrapper $isSelected={selectedBundle != null}>
            <MyBundleMenu bundle={selectedBundle} />
            <MyBundleIndex questions={selectedBundle?.questions} />
          </StyledWrapper>
        )}
      </Container>
    </>
  );
};

export default MyBundle;
