import { useState } from 'react';

import MyBundleDetail from '@/components/MyBundle/MyBundleDetail';
import MyBundleDetailSkeleton from '@/components/MyBundle/MyBundleDetail/MyBundleDetail.skeleton';
import MyBundleIndex from '@/components/MyBundle/MyBundleIndex';
import MyBundleList from '@/components/MyBundle/MyBundleList';
import BundleListSkeleton from '@/components/MyBundle/MyBundleList/Skeletion';
import MyBundleMenu from '@/components/MyBundle/MyBundleMenu';
import useResize from '@/hooks/useResize';

import { useFetchMyBundles } from './MyBundle.hook';
import { Container, StyledWrapper, Wrapper } from './MyBundle.style';

const MyBundle = () => {
  // const queryClient = useQueryClient();
  const { isMobileSize } = useResize();

  // 내 꾸러미 목록 전체 조회
  const { data: bundles } = useFetchMyBundles();

  // 웹에서 사용
  const [selectedBundleId, setSelectedBundleId] = useState<null | number>(null);

  if (!bundles) {
    return (
      <Container>
        <BundleListSkeleton />
        {!isMobileSize && <MyBundleDetailSkeleton />}
      </Container>
    );
  }

  return (
    <Wrapper>
      <Container>
        <MyBundleList
          bundles={bundles}
          selectedBundleId={selectedBundleId}
          setSelectedBundleId={setSelectedBundleId}
        />

        {!isMobileSize && (
          <MyBundleDetail
            isBundleSelected={selectedBundleId != null}
            isMyBundlesEmpty={bundles.length === 0}
            bundleId={selectedBundleId}
          />
        )}

        {!isMobileSize && (
          <StyledWrapper $isSelected={selectedBundleId != null}>
            <MyBundleMenu
              bundleId={selectedBundleId}
              setSelectedBundleId={setSelectedBundleId}
            />
            <MyBundleIndex bundleId={selectedBundleId} />
          </StyledWrapper>
        )}
      </Container>
    </Wrapper>
  );
};

export default MyBundle;
