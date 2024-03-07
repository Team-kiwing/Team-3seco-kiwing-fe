import { useEffect, useState } from 'react';
import styled from 'styled-components';

import UserInfoCard from '@/components/common/UserInfoCard';
import SharedBundleBox from '@/components/SharedBundle/SharedBundleBox';
import SharedBundleCard from '@/components/SharedBundle/SharedBundleCard';
import { MOBILE } from '@/constants';
import { Col } from '@/styles/globalStyles';

const SharedItemWrapper = styled(Col)`
  width: 70%;
  align-items: center;
  margin: 0 auto;
  gap: 3rem;
  @media screen and (max-width: ${MOBILE}px) {
    width: 100%;
    gap: 1.5rem;
  }
`;

const UserInfoWrapper = styled.div`
  margin-top: 5rem;
  width: 100%;
  @media screen and (max-width: ${MOBILE}px) {
    margin-top: 1rem;
  }
`;

const SharedWrapper = styled(Col)`
  width: 100%;
  align-items: center;
  gap: 3rem;
  @media screen and (max-width: ${MOBILE}px) {
    width: 90%;
    gap: 1.5rem;
  }
`;

const SharedItem = () => {
  const [bundles, setBundles] = useState([]);
  useEffect(() => {
    fetch('/bundles')
      .then((res) => res.json())
      .then((data) => setBundles(data));
  }, []);

  if (bundles.length === 0) {
    return <div>Loading...</div>;
  }
  const questions = bundles[0]?.questions;
  console.log(questions);
  return (
    <>
      <SharedItemWrapper>
        <UserInfoWrapper>
          <UserInfoCard
            userImage=""
            userName="pkb"
            tags={['개발자', '프론트엔드', '백엔드']}
            links={[
              'pkb8839@naver.com',
              'pkb8839@naver.com',
              'pkb8839@naver.comdsasdsadasdasdasdasdasdasdl;kasd;koas;dkas;dkasl;dk;askd;laskdas;.lkdals;dkas;dkl;asdkls;',
            ]}
          />
        </UserInfoWrapper>
        <SharedWrapper>
          <SharedBundleCard
            bundleId={bundles[0].id}
            bundleName={bundles[0]?.name}
          />
          <SharedBundleBox questions={questions} />
        </SharedWrapper>
      </SharedItemWrapper>
    </>
  );
};
export default SharedItem;