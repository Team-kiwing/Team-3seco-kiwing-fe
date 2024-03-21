import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Spinner from '@/components/common/Spinner';
import MyBundleDetail from '@/components/MyBundle/MyBundleDetail';
import MyBundleEmpty from '@/components/MyBundle/MyBundleEmpty';
import MyBundleIndex from '@/components/MyBundle/MyBundleIndex';
import MyBundleList from '@/components/MyBundle/MyBundleList';
import MyBundleMenu from '@/components/MyBundle/MyBundleMenu';
import { notify } from '@/hooks/toast';
import useResize from '@/hooks/useResize';
import { userDataStore } from '@/stores';

import { useFetchMyBundles } from './MyBundle.hook';
import { Container, StyledWrapper, Wrapper } from './MyBundle.style';

const MyBundle = () => {
  const { isMobileSize } = useResize();
  const navigator = useNavigate();

  const { userid, bundleId } = useParams();
  const { nickname } = userDataStore();

  // 내 꾸러미 목록 전체 조회
  const { data: bundles, isFetching } = useFetchMyBundles();

  const [selectedBundleId, setSelectedBundleId] = useState<null | number>(null);

  const warnAndRedirectToUser = useCallback(() => {
    notify({ type: 'warning', text: '올바르지 않은 주소 값입니다.' });
    navigator(`/user/${nickname}`);
  }, [navigator, nickname]);

  useEffect(() => {
    if (userid && nickname && userid !== nickname) {
      warnAndRedirectToUser();
      return;
    }
    if (bundleId && bundles && !isFetching) {
      if (bundles.find((bundle) => bundle.id === Number(bundleId))) {
        setSelectedBundleId(Number(bundleId));
      } else {
        warnAndRedirectToUser();
        setSelectedBundleId(null);
      }
    }
    if (!bundleId) {
      setSelectedBundleId(null);
    }
  }, [bundleId, bundles, userid, nickname, warnAndRedirectToUser, isFetching]);

  if (!bundles) {
    return <Spinner />;
  }

  return (
    <Wrapper>
      <Container>
        {bundles.length === 0 && <MyBundleEmpty />}
        {bundles.length !== 0 && (
          <MyBundleList
            bundles={bundles}
            selectedBundleId={selectedBundleId}
            setSelectedBundleId={setSelectedBundleId}
          />
        )}

        {!isMobileSize && bundles.length !== 0 && <MyBundleDetail />}

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
