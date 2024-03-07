import { useState } from 'react';

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

        {!isMobileSize && (
          <MyBundleDetail
            isBundleSelected={selectedBundle !== null}
            questions={selectedBundle?.questions || []}
          />
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
