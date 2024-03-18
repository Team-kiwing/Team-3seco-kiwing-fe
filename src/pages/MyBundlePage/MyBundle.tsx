import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Spinner from '@/components/common/Spinner';
import MyBundleDetail from '@/components/MyBundle/MyBundleDetail';
import MyBundleIndex from '@/components/MyBundle/MyBundleIndex';
import MyBundleList from '@/components/MyBundle/MyBundleList';
import MyBundleMenu from '@/components/MyBundle/MyBundleMenu';
import useResize from '@/hooks/useResize';
import { userDataStore } from '@/stores';

import { useFetchMyBundles } from './MyBundle.hook';
import { Container, StyledWrapper, Wrapper } from './MyBundle.style';

const MyBundle = () => {
  const { nickname } = userDataStore();
  const navigator = useNavigate();
  const { userid } = useParams();
  if (userid && nickname && userid !== nickname) {
    navigator(`/user/${nickname}`);
    const urlString = location.href;
    window.location.replace(urlString.replace(userid, nickname));
  }
  // const queryClient = useQueryClient();
  const { isMobileSize } = useResize();

  // 내 꾸러미 목록 전체 조회
  const { data: bundles } = useFetchMyBundles();

  // 웹에서 사용
  const [selectedBundleId, setSelectedBundleId] = useState<null | number>(null);

  if (!bundles) {
    return <Spinner />;
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
