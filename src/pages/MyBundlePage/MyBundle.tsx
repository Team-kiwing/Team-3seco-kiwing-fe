import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import MyBundleDetail from '@/components/MyBundle/MyBundleDetail';
import MyBundleDetailSkeleton from '@/components/MyBundle/MyBundleDetail/MyBundleDetail.skeleton';
import MyBundleIndex from '@/components/MyBundle/MyBundleIndex';
import MyBundleList from '@/components/MyBundle/MyBundleList';
import BundleListSkeleton from '@/components/MyBundle/MyBundleList/Skeletion';
import MyBundleMenu from '@/components/MyBundle/MyBundleMenu';
import { QUERYKEY } from '@/constants/queryKeys';
import useResize from '@/hooks/useResize';
import { getBundleDetail } from '@/services/bundles';

import { useFetchMyBundles } from './MyBundle.hook';
import { Container, StyledWrapper } from './MyBundle.style';

const MyBundle = () => {
  // const queryClient = useQueryClient();
  const { isMobileSize } = useResize();

  // 내 꾸러미 목록 전체 조회
  const { data: bundles } = useFetchMyBundles();

  // 웹에서 사용
  const [selectedBundleId, setSelectedBundleId] = useState<null | number>(null);

  const { data: selectedBundleDetail } = useQuery({
    queryKey: [QUERYKEY.BUNDLE_DETAIL, selectedBundleId],
    queryFn: async ({ queryKey }) => {
      if (!queryKey[1]) return null;
      const data = await getBundleDetail({ bundleId: queryKey[1] as number });
      return data;
    },
  });

  if (!bundles) {
    return (
      <Container>
        <BundleListSkeleton />
        {!isMobileSize && <MyBundleDetailSkeleton />}
      </Container>
    );
  }

  return (
    <>
      <Container>
        <MyBundleList
          bundles={bundles}
          selectedBundleId={selectedBundleId}
          setSelectedBundleId={setSelectedBundleId}
        />

        {!isMobileSize && (
          <MyBundleDetail
            isBundleSelected={selectedBundleDetail != null}
            isMyBundlesEmpty={bundles.length === 0}
            bundleId={selectedBundleDetail ? selectedBundleDetail.id : null}
          />
        )}

        {!isMobileSize && (
          <StyledWrapper $isSelected={selectedBundleDetail != null}>
            <MyBundleMenu bundle={selectedBundleDetail} />
            <MyBundleIndex
              bundleId={selectedBundleDetail ? selectedBundleDetail.id : null}
            />
          </StyledWrapper>
        )}
      </Container>
    </>
  );
};

export default MyBundle;
